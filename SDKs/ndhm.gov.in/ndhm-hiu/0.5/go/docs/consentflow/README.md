# ConsentFlow

### Available Operations

* [PostV05ConsentRequestsOnInitJSON](#postv05consentrequestsoninitjson) - Response to consent request
* [PostV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [PostV05ConsentRequestsOnStatusJSON](#postv05consentrequestsonstatusjson) - Result of consent request status
* [PostV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [PostV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [PostV05ConsentsOnFetchJSON](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [PostV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

## PostV05ConsentRequestsOnInitJSON

Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
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
        Authorization: "saepe",
        ConsentRequestInitResponse: shared.ConsentRequestInitResponse{
            ConsentRequest: &shared.ConsentRequestInitResponseConsentRequest{
                ID: "f29f0e59-8388-4698-9fe6-05db67aeac46",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "veritatis",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "b8b90f34-43a1-4108-a0ad-cf4b921879fc",
            },
            Timestamp: types.MustTimeFromString("2021-03-07T21:49:29.078Z"),
        },
        XHiuID: "quis",
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

Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
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
        Authorization: "ipsum",
        RequestBody: []byte("delectus"),
        XHiuID: "voluptate",
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
        Authorization: "consectetur",
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
                    shared.ConsentArtefactReference{
                        ID: "<consent-artefact-id>",
                    },
                },
                ID: "<consent-request-id>",
                Status: shared.ConsentStatusEnumRevoked,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "hic",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "bc7abd74-dd39-4c0f-9d2c-ff7c70a45626",
            },
            Timestamp: types.MustTimeFromString("2022-02-08T20:43:00.221Z"),
        },
        XHiuID: "ratione",
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
        Authorization: "ex",
        RequestBody: []byte("laudantium"),
        XHiuID: "dicta",
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
        Authorization: "dolor",
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
            Timestamp: types.MustTimeFromString("2022-02-20T07:12:08.273Z"),
        },
        XHiuID: "excepturi",
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

Must contain either consent or error. Possible reason of errors are 
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
        Authorization: "voluptatibus",
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
                    ConsentID: "fce6c556-146c-43e2-90fb-008c42e141aa",
                    ConsentManager: shared.ConsentArtefactResponseConsentConsentDetailConsentManager{
                        ID: "c366c8dd-6b14-4429-8747-4778a7bd466d",
                    },
                    CreatedAt: types.MustTimeFromString("2022-06-29T02:09:48.123Z"),
                    HiTypes: []shared.HITypeEnumEnum{
                        shared.HITypeEnumEnumOpConsultation,
                        shared.HITypeEnumEnumOpConsultation,
                        shared.HITypeEnumEnumDischargeSummary,
                        shared.HITypeEnumEnumDischargeSummary,
                    },
                    Hip: shared.ConsentArtefactResponseConsentConsentDetailHip{
                        ID: "3cdca425-1904-4e52-bc7e-0bc7178e4796",
                    },
                    Hiu: shared.ConsentArtefactResponseConsentConsentDetailHiu{
                        ID: "f2a70c68-8282-4aa4-8256-2f222e9817ee",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: "hinapatel@ndhm",
                    },
                    Permission: shared.Permission{
                        AccessMode: shared.PermissionAccessModeEnumView,
                        DataEraseAt: types.MustTimeFromString("2022-03-14T20:41:04.723Z"),
                        DateRange: shared.PermissionDateRange{
                            From: types.MustTimeFromString("2021-03-31T16:39:55.446Z"),
                            To: types.MustTimeFromString("2022-11-27T21:17:41.726Z"),
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: 904045,
                            Unit: shared.PermissionFrequencyUnitEnumDay,
                            Value: 690025,
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "molestiae",
                        RefURI: sdk.String("https://obedient-exterior.net"),
                        Text: "eligendi",
                    },
                    Requester: shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: sdk.String("https://www.mciindia.org"),
                            Type: "REGNO",
                            Value: "MH1001",
                        },
                        Name: "Dr. Manju",
                    },
                    SchemaVersion: sdk.String("sit"),
                },
                Signature: "Signature of CM as defined in W3C standards; Base64 encoded",
                Status: shared.ConsentStatusEnumRequested,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "adipisci",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "c20c4f37-89fd-4871-b99d-d2efd121aa6f",
            },
            Timestamp: types.MustTimeFromString("2022-01-24T02:06:03.033Z"),
        },
        XHiuID: "vel",
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

Must contain either consent or error. Possible reason of errors are 
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
        Authorization: "in",
        RequestBody: []byte("eius"),
        XHiuID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
