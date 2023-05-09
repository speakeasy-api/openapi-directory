# Consent

### Available Operations

* [PostV05ConsentRequestsInitJSON](#postv05consentrequestsinitjson) - Create consent request
* [PostV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [PostV05ConsentRequestsStatusJSON](#postv05consentrequestsstatusjson) - Get consent request status
* [PostV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [PostV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [PostV05ConsentsHipOnNotifyJSON](#postv05consentshiponnotifyjson) - Consent notification
* [PostV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [PostV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification

## PostV05ConsentRequestsInitJSON

Creates a consent request to get data about a patient by HIU user. CM should call Gateway - ***/v0.5/consent-requests/on-init*** API with the consent-request-id

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
    res, err := s.Consent.PostV05ConsentRequestsInitJSON(ctx, operations.PostV05ConsentRequestsInitJSONRequest{
        Authorization: "ipsa",
        ConsentRequest: shared.ConsentRequest{
            Consent: shared.ConsentRequestConsent{
                CareContexts: []shared.CareContextDefinition{
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                },
                HiTypes: []shared.HITypeEnumEnum{
                    shared.HITypeEnumEnumDischargeSummary,
                    shared.HITypeEnumEnumDischargeSummary,
                    shared.HITypeEnumEnumOpConsultation,
                },
                Hip: &shared.ConsentRequestConsentHip{
                    ID: "352c5955-907a-4ff1-a3a2-fa9467739251",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "aa52c3f5-ad01-49da-9ffe-78f097b0074f",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: "hinapatel79@ndhm",
                },
                Permission: shared.Permission{
                    AccessMode: shared.PermissionAccessModeEnumView,
                    DataEraseAt: types.MustTimeFromString("2022-09-14T21:48:41.971Z"),
                    DateRange: shared.PermissionDateRange{
                        From: types.MustTimeFromString("2022-11-18T15:56:41.921Z"),
                        To: types.MustTimeFromString("2022-05-13T20:56:04.612Z"),
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: sdk.Int64(880476),
                        Unit: shared.PermissionFrequencyUnitEnumDay.ToPointer(),
                        Value: sdk.Int64(918236),
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "quae",
                    RefURI: sdk.String("http://repentant-minnow.name"),
                    Text: "pariatur",
                },
                Requester: shared.Requester{
                    Identifier: &shared.RequesterIdentifier{
                        System: sdk.String("https://www.mciindia.org"),
                        Type: "REGNO",
                        Value: "MH1001",
                    },
                    Name: "Dr. Manju",
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-06-29T05:25:54.356Z"),
        },
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

Creates a consent request to get data about a patient by HIU user. CM should call Gateway - ***/v0.5/consent-requests/on-init*** API with the consent-request-id

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
    res, err := s.Consent.PostV05ConsentRequestsInitRaw(ctx, operations.PostV05ConsentRequestsInitRawRequest{
        Authorization: "rem",
        RequestBody: []byte("voluptates"),
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

Get status of consent request done previously. CM responds by calling Gateway API - ***/v0.5/consent-requests/on-status***

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
    res, err := s.Consent.PostV05ConsentRequestsStatusJSON(ctx, operations.PostV05ConsentRequestsStatusJSONRequest{
        Authorization: "quasi",
        ConsentRequestStatusRequest: shared.ConsentRequestStatusRequest{
            ConsentRequestID: "repudiandae",
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-11-01T07:52:08.326Z"),
        },
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

Get status of consent request done previously. CM responds by calling Gateway API - ***/v0.5/consent-requests/on-status***

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
    res, err := s.Consent.PostV05ConsentRequestsStatusRaw(ctx, operations.PostV05ConsentRequestsStatusRawRequest{
        Authorization: "itaque",
        RequestBody: []byte("incidunt"),
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

This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway ***/v0.5/consents/on-fetch***

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
    res, err := s.Consent.PostV05ConsentsFetch(ctx, operations.PostV05ConsentsFetchRequest{
        Authorization: "enim",
        ConsentFetchRequest: shared.ConsentFetchRequest{
            ConsentID: "consequatur",
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2021-04-26T02:10:00.226Z"),
        },
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

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - ***/v0.5/consents/hip/notify***. 


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
    res, err := s.Consent.PostV05ConsentsHipOnNotifyJSON(ctx, operations.PostV05ConsentsHipOnNotifyJSONRequest{
        Authorization: "explicabo",
        HIPConsentNotificationResponse: shared.HIPConsentNotificationResponse{
            Acknowledgement: &shared.ConsentAcknowledgement{
                ConsentID: "<consent-artefact-id>",
                Status: shared.ConsentAcknowledgementStatusEnumUnknown,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "quibusdam",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "44269802-d502-4a94-bb4f-63c969e9a3ef",
            },
            Timestamp: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
        },
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

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - ***/v0.5/consents/hip/notify***. 


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
    res, err := s.Consent.PostV05ConsentsHipOnNotifyRaw(ctx, operations.PostV05ConsentsHipOnNotifyRawRequest{
        Authorization: "in",
        RequestBody: []byte("illum"),
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

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - ***/v0.5/consents/hiu/notify***.


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
    res, err := s.Consent.PostV05ConsentsHiuOnNotify(ctx, operations.PostV05ConsentsHiuOnNotifyRequest{
        Authorization: "maiores",
        HIUConsentNotificationResponse: shared.HIUConsentNotificationResponse{
            Acknowledgement: []shared.ConsentAcknowledgement{
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumOk,
                },
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumOk,
                },
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumUnknown,
                },
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "ea",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "6ae395ef-b9ba-488f-ba66-997074ba4469",
            },
            Timestamp: types.MustTimeFromString("2022-02-21T23:58:20.071Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
