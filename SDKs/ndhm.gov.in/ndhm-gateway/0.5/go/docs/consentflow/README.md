# ConsentFlow

### Available Operations

* [PostV05ConsentRequestsInitJSON](#postv05consentrequestsinitjson) - Create consent request
* [PostV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [PostV05ConsentRequestsOnInitJSON](#postv05consentrequestsoninitjson) - Response to consent request
* [PostV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [PostV05ConsentRequestsOnStatusJSON](#postv05consentrequestsonstatusjson) - Result of consent request status
* [PostV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [PostV05ConsentRequestsStatusJSON](#postv05consentrequestsstatusjson) - Get consent request status
* [PostV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [PostV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [PostV05ConsentsHipNotifyJSON](#postv05consentshipnotifyjson) - Consent notification
* [PostV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification
* [PostV05ConsentsHipOnNotifyJSON](#postv05consentshiponnotifyjson) - Consent notification
* [PostV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [PostV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [PostV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification
* [PostV05ConsentsOnFetchJSON](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [PostV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

## PostV05ConsentRequestsInitJSON

Creates a consent request to get data about a patient by HIU user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentRequestsInitJSON(ctx, operations.PostV05ConsentRequestsInitJSONRequest{
        Authorization: "vel",
        ConsentRequest: shared.ConsentRequest{
            Consent: shared.ConsentRequestConsent{
                CareContexts: []shared.CareContextDefinition{
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                },
                HiTypes: []shared.HITypeEnumEnum{
                    shared.HITypeEnumEnumOpConsultation,
                    shared.HITypeEnumEnumOpConsultation,
                    shared.HITypeEnumEnumPrescription,
                    shared.HITypeEnumEnumPrescription,
                },
                Hip: &shared.ConsentRequestConsentHip{
                    ID: "76360a15-db6a-4660-a59a-1adeaab5851d",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "6c645b08-b618-491b-aa0f-e1ade008e6f8",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: sdk.String("hinapatel79@ndhm"),
                },
                Permission: shared.Permission{
                    AccessMode: shared.PermissionAccessModeEnumStream,
                    DataEraseAt: types.MustTimeFromString("2022-01-03T21:25:59.161Z"),
                    DateRange: shared.PermissionDateRange{
                        From: types.MustTimeFromString("2022-08-24T08:13:37.314Z"),
                        To: types.MustTimeFromString("2022-02-25T08:32:24.820Z"),
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: sdk.Int64(518150),
                        Unit: shared.PermissionFrequencyUnitEnumMonth.ToPointer(),
                        Value: sdk.Int64(842777),
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "nam",
                    RefURI: sdk.String("http://polite-cria.biz"),
                    Text: "inventore",
                },
                Requester: shared.Requester{
                    Identifier: &shared.RequesterIdentifier{
                        System: sdk.String("https://www.mciindia.org"),
                        Type: sdk.String("REGNO"),
                        Value: sdk.String("MH1001"),
                    },
                    Name: "Dr. Manju",
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-10-30T17:21:08.305Z"),
        },
        XCmID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsInitRaw

Creates a consent request to get data about a patient by HIU user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentRequestsInitRaw(ctx, operations.PostV05ConsentRequestsInitRawRequest{
        Authorization: "dolor",
        RequestBody: []byte("consequatur"),
        XCmID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsOnInitJSON

Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
  Reasons for error may be
  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentRequestsOnInitJSON(ctx, operations.PostV05ConsentRequestsOnInitJSONRequest{
        Authorization: "sit",
        ConsentRequestInitResponse: shared.ConsentRequestInitResponse{
            ConsentRequest: &shared.ConsentRequestInitResponseConsentRequest{
                ID: "f29f0e59-8388-4698-9fe6-05db67aeac46",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("fugit"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "1813d520-8ece-47e2-93b6-68451c6c6e20",
            },
            Timestamp: types.MustTimeFromString("2022-02-08T01:44:39.255Z"),
        },
        XHiuID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsOnInitRaw

Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
  Reasons for error may be
  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentRequestsOnInitRaw(ctx, operations.PostV05ConsentRequestsOnInitRawRequest{
        Authorization: "nisi",
        RequestBody: []byte("at"),
        XHiuID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsOnStatusJSON

Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentRequestsOnStatusJSON(ctx, operations.PostV05ConsentRequestsOnStatusJSONRequest{
        Authorization: "est",
        HIUConsentRequestStatus: shared.HIUConsentRequestStatus{
            ConsentRequest: &shared.HIUConsentRequestStatusConsentRequest{
                ConsentArtefacts: []shared.ConsentArtefactReference{
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                },
                ID: "<consent-request-id>",
                Status: shared.ConsentStatusEnumGranted,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("repudiandae"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "c9578a64-5842-473a-8418-d162309fb092",
            },
            Timestamp: types.MustTimeFromString("2021-10-10T14:34:27.546Z"),
        },
        XHiuID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsOnStatusRaw

Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentRequestsOnStatusRaw(ctx, operations.PostV05ConsentRequestsOnStatusRawRequest{
        Authorization: "inventore",
        RequestBody: []byte("fuga"),
        XHiuID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsStatusJSON

Get status of consent request done previously

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentRequestsStatusJSON(ctx, operations.PostV05ConsentRequestsStatusJSONRequest{
        Authorization: "voluptatibus",
        ConsentRequestStatusRequest: shared.ConsentRequestStatusRequest{
            ConsentRequestID: "distinctio",
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2021-01-25T12:50:51.842Z"),
        },
        XCmID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentRequestsStatusRaw

Get status of consent request done previously

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentRequestsStatusRaw(ctx, operations.PostV05ConsentRequestsStatusRawRequest{
        Authorization: "praesentium",
        RequestBody: []byte("maxime"),
        XCmID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsFetch

Get consent artefact

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsFetch(ctx, operations.PostV05ConsentsFetchRequest{
        Authorization: "temporibus",
        ConsentFetchRequest: shared.ConsentFetchRequest{
            ConsentID: "quos",
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-01-26T06:01:40.776Z"),
        },
        XCmID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipNotifyJSON

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
  3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsHipNotifyJSON(ctx, operations.PostV05ConsentsHipNotifyJSONRequest{
        Authorization: "totam",
        HIPConsentNotification: shared.HIPConsentNotification{
            Notification: shared.HIPConsentNotificationNotification{
                ConsentDetail: shared.HIPConsentNotificationNotificationConsentDetail{
                    CareContexts: []shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                        shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                        shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                        shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                        shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                    },
                    ConsentID: "4be05601-3f59-4da7-97a5-9ecfef66ef1c",
                    ConsentManager: shared.HIPConsentNotificationNotificationConsentDetailConsentManager{
                        ID: "aa3383c2-beb4-4773-b3c8-d72f64d1db1f",
                    },
                    CreatedAt: types.MustTimeFromString("2022-03-21T12:53:49.231Z"),
                    HiTypes: []shared.HITypeEnumEnum{
                        shared.HITypeEnumEnumOpConsultation,
                        shared.HITypeEnumEnumOpConsultation,
                    },
                    Hip: shared.HIPConsentNotificationNotificationConsentDetailHIP{
                        ID: "0661e963-49e1-4cf9-a06e-3a437000ae6b",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: sdk.String("hinapatel79@ndhm"),
                    },
                    Permission: shared.Permission{
                        AccessMode: shared.PermissionAccessModeEnumStore,
                        DataEraseAt: types.MustTimeFromString("2021-05-20T03:55:32.372Z"),
                        DateRange: shared.PermissionDateRange{
                            From: types.MustTimeFromString("2021-08-01T09:41:55.270Z"),
                            To: types.MustTimeFromString("2021-02-03T08:04:17.719Z"),
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: sdk.Int64(455579),
                            Unit: shared.PermissionFrequencyUnitEnumWeek.ToPointer(),
                            Value: sdk.Int64(600193),
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "necessitatibus",
                        RefURI: sdk.String("https://snappy-futon.info"),
                        Text: "est",
                    },
                    SchemaVersion: sdk.String("error"),
                },
                ConsentID: "741d3113-5296-45bb-8a72-02611435e139",
                Signature: "Signature of CM as defined in W3C standards; Base64 encoded",
                Status: shared.ConsentStatusEnumRevoked,
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2021-05-24T21:18:28.969Z"),
        },
        XHipID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipNotifyRaw

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
  3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsHipNotifyRaw(ctx, operations.PostV05ConsentsHipNotifyRawRequest{
        Authorization: "quia",
        RequestBody: []byte("nostrum"),
        XHipID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipOnNotifyJSON

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsHipOnNotifyJSON(ctx, operations.PostV05ConsentsHipOnNotifyJSONRequest{
        Authorization: "libero",
        HIPConsentNotificationResponse: shared.HIPConsentNotificationResponse{
            Acknowledgement: &shared.ConsentAcknowledgement{
                ConsentID: "<consent-artefact-id>",
                Status: shared.ConsentAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("libero"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "da8c070e-1084-4cb0-a72d-1ad879eeb966",
            },
            Timestamp: types.MustTimeFromString("2022-04-19T10:08:34.555Z"),
        },
        XCmID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipOnNotifyRaw

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsHipOnNotifyRaw(ctx, operations.PostV05ConsentsHipOnNotifyRawRequest{
        Authorization: "corporis",
        RequestBody: []byte("officiis"),
        XCmID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHiuNotify

Health information user will get notified about the consent request granted or denied, consent revoked, consent expired. 
1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsHiuNotify(ctx, operations.PostV05ConsentsHiuNotifyRequest{
        Authorization: "cum",
        HIUConsentNotificationEvent: shared.HIUConsentNotificationEvent{
            Notification: shared.HIUConsentNotificationEventNotification{
                ConsentArtefacts: []shared.ConsentArtefactReference{
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                },
                ConsentRequestID: "<consent-request-id>",
                Status: shared.ConsentStatusEnumGranted,
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-04-22T15:10:37.825Z"),
        },
        XHiuID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsHiuOnNotify(ctx, operations.PostV05ConsentsHiuOnNotifyRequest{
        Authorization: "repudiandae",
        HIUConsentNotificationResponse: shared.HIUConsentNotificationResponse{
            Acknowledgement: []shared.ConsentAcknowledgement{
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumUnknown,
                },
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("eos"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "d782259e-3ea4-4b51-97f9-2443da7ce52b",
            },
            Timestamp: types.MustTimeFromString("2021-10-29T05:11:03.916Z"),
        },
        XCmID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsOnFetchJSON

Must contain either consentDetail or error. Possible reason of errors are 
1. consentId passed through /fetch is invalid


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsOnFetchJSON(ctx, operations.PostV05ConsentsOnFetchJSONRequest{
        Authorization: "placeat",
        ConsentArtefactResponse: shared.ConsentArtefactResponse{
            Consent: &shared.ConsentArtefactResponseConsent{
                ConsentDetail: shared.ConsentArtefactResponseConsentConsentDetail{
                    CareContexts: []shared.ConsentArtefactResponseConsentConsentDetailCareContexts{
                        shared.ConsentArtefactResponseConsentConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                        shared.ConsentArtefactResponseConsentConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                    },
                    ConsentID: "37c6454e-fb0b-4348-96c3-ca5acfbe2fd5",
                    ConsentManager: shared.ConsentArtefactResponseConsentConsentDetailConsentManager{
                        ID: "70757792-9177-4dea-8646-ecb573409e3e",
                    },
                    CreatedAt: types.MustTimeFromString("2022-10-05T07:29:39.358Z"),
                    HiTypes: []shared.HITypeEnumEnum{
                        shared.HITypeEnumEnumPrescription,
                        shared.HITypeEnumEnumDischargeSummary,
                        shared.HITypeEnumEnumOpConsultation,
                        shared.HITypeEnumEnumDischargeSummary,
                    },
                    Hip: shared.ConsentArtefactResponseConsentConsentDetailHip{
                        ID: "12eb07f1-16db-4995-85fc-95fa88970e18",
                    },
                    Hiu: shared.ConsentArtefactResponseConsentConsentDetailHiu{
                        ID: "9dbb30fc-b33e-4a05-9b19-7cd44e2f52d8",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: sdk.String("hinapatel79@ndhm"),
                    },
                    Permission: shared.Permission{
                        AccessMode: shared.PermissionAccessModeEnumView,
                        DataEraseAt: types.MustTimeFromString("2022-04-27T00:54:52.450Z"),
                        DateRange: shared.PermissionDateRange{
                            From: types.MustTimeFromString("2022-12-06T20:51:23.545Z"),
                            To: types.MustTimeFromString("2022-04-18T09:58:47.871Z"),
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: sdk.Int64(731065),
                            Unit: shared.PermissionFrequencyUnitEnumWeek.ToPointer(),
                            Value: sdk.Int64(977518),
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "quaerat",
                        RefURI: sdk.String("https://sardonic-goodwill.info"),
                        Text: "nisi",
                    },
                    Requester: &shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: sdk.String("https://www.mciindia.org"),
                            Type: sdk.String("REGNO"),
                            Value: sdk.String("MH1001"),
                        },
                        Name: "Dr. Manju",
                    },
                    SchemaVersion: sdk.String("libero"),
                },
                Signature: "Signature of CM as defined in W3C standards; Base64 encoded",
                Status: shared.ConsentStatusEnumRequested,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("facilis"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "35ff2e4b-2753-47a8-8d9e-7319c177d525",
            },
            Timestamp: types.MustTimeFromString("2021-07-21T13:41:09.845Z"),
        },
        XHiuID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsOnFetchRaw

Must contain either consentDetail or error. Possible reason of errors are 
1. consentId passed through /fetch is invalid


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ConsentFlow.PostV05ConsentsOnFetchRaw(ctx, operations.PostV05ConsentsOnFetchRawRequest{
        Authorization: "libero",
        RequestBody: []byte("illo"),
        XHiuID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
