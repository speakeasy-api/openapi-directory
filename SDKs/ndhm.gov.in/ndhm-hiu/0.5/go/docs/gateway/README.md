# Gateway

### Available Operations

* [GetV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [GetV05Certs](#getv05certs) - Get certs for JWT verification
* [PostV05ConsentRequestsInitJSON](#postv05consentrequestsinitjson) - Create consent request
* [PostV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [PostV05ConsentRequestsStatusJSON](#postv05consentrequestsstatusjson) - Get consent request status
* [PostV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [PostV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [PostV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification
* [PostV05HealthInformationCmRequestJSON](#postv05healthinformationcmrequestjson) - Health information data request
* [PostV05HealthInformationCmRequestRaw](#postv05healthinformationcmrequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05PatientsFindJSON](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [PostV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [PostV05SessionsJSON](#postv05sessionsjson) - Get access token
* [PostV05SessionsRaw](#postv05sessionsraw) - Get access token
* [PostV05SubscriptionRequestsCmInitJSON](#postv05subscriptionrequestscminitjson) - Request for subscription
* [PostV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [PostV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [PostV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [PostV05UsersAuthConfirmJSON](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

## GetV05WellKnownOpenidConfiguration

Get openid configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gateway.GetV05WellKnownOpenidConfiguration(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDConfiguration != nil {
        // handle response
    }
}
```

## GetV05Certs

Get certs for JWT verification

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gateway.GetV05Certs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Certs != nil {
        // handle response
    }
}
```

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
    res, err := s.Gateway.PostV05ConsentRequestsInitJSON(ctx, operations.PostV05ConsentRequestsInitJSONRequest{
        Authorization: "corrupti",
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
                },
                HiTypes: []shared.HITypeEnumEnum{
                    shared.HITypeEnumEnumDiagnosticReport,
                    shared.HITypeEnumEnumDischargeSummary,
                    shared.HITypeEnumEnumDiagnosticReport,
                },
                Hip: &shared.ConsentRequestConsentHip{
                    ID: "8d69a674-e0f4-467c-8879-6ed151a05dfc",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: "hinapatel@ndhm",
                },
                Permission: shared.Permission{
                    AccessMode: shared.PermissionAccessModeEnumView,
                    DataEraseAt: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
                    DateRange: shared.PermissionDateRange{
                        From: types.MustTimeFromString("2022-05-22T14:02:28.908Z"),
                        To: types.MustTimeFromString("2022-05-20T19:39:29.035Z"),
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: 386489,
                        Unit: shared.PermissionFrequencyUnitEnumYear,
                        Value: 902599,
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "fuga",
                    RefURI: sdk.String("http://grown-opposite.info"),
                    Text: "saepe",
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
            Timestamp: types.MustTimeFromString("2022-10-20T12:36:28.767Z"),
        },
        XCmID: "ipsa",
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
    res, err := s.Gateway.PostV05ConsentRequestsInitRaw(ctx, operations.PostV05ConsentRequestsInitRawRequest{
        Authorization: "reiciendis",
        RequestBody: []byte("est"),
        XCmID: "mollitia",
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
    res, err := s.Gateway.PostV05ConsentRequestsStatusJSON(ctx, operations.PostV05ConsentRequestsStatusJSONRequest{
        Authorization: "laborum",
        ConsentRequestStatusRequest: shared.ConsentRequestStatusRequest{
            ConsentRequestID: "dolores",
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-08-23T06:35:12.519Z"),
        },
        XCmID: "explicabo",
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
    res, err := s.Gateway.PostV05ConsentRequestsStatusRaw(ctx, operations.PostV05ConsentRequestsStatusRawRequest{
        Authorization: "nobis",
        RequestBody: []byte("enim"),
        XCmID: "omnis",
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
    res, err := s.Gateway.PostV05ConsentsFetch(ctx, operations.PostV05ConsentsFetchRequest{
        Authorization: "nemo",
        ConsentFetchRequest: shared.ConsentFetchRequest{
            ConsentID: "minima",
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-12-03T22:47:10.600Z"),
        },
        XCmID: "iure",
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
    res, err := s.Gateway.PostV05ConsentsHiuOnNotify(ctx, operations.PostV05ConsentsHiuOnNotifyRequest{
        Authorization: "culpa",
        HIUConsentNotificationResponse: shared.HIUConsentNotificationResponse{
            Acknowledgement: []shared.ConsentAcknowledgement{
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumUnknown,
                },
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumOk,
                },
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumUnknown,
                },
                shared.ConsentAcknowledgement{
                    ConsentID: "<consent-artefact-id>",
                    Status: shared.ConsentAcknowledgementStatusEnumOk,
                },
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "consequuntur",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "fa946773-9251-4aa5-ac3f-5ad019da1ffe",
            },
            Timestamp: types.MustTimeFromString("2022-06-28T23:41:25.321Z"),
        },
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

## PostV05HealthInformationCmRequestJSON

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


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
    res, err := s.Gateway.PostV05HealthInformationCmRequestJSON(ctx, operations.PostV05HealthInformationCmRequestJSONRequest{
        Authorization: "ipsa",
        HIRequest: shared.HIRequest{
            HiRequest: shared.HIRequestHIRequest{
                Consent: shared.Consent{
                    ID: "97b0074f-1547-41b5-a6e1-3b99d488e1e9",
                },
                DataPushURL: "veritatis",
                DateRange: shared.DateRange{
                    From: types.MustTimeFromString("2022-03-02T21:33:21.372Z"),
                    To: types.MustTimeFromString("2022-12-28T14:02:06.064Z"),
                },
                KeyMaterial: shared.KeyMaterial{
                    CryptoAlg: "ECDH",
                    Curve: "Curve25519",
                    DhPublicKey: shared.KeyObject{
                        Expiry: types.MustTimeFromString("2021-04-26T02:10:00.226Z"),
                        KeyValue: "explicabo",
                        Parameters: "Curve25519/32byte random key",
                    },
                    Nonce: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                },
            },
            RequestID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            Timestamp: types.MustTimeFromString("2021-07-27T01:56:50.693Z"),
        },
        XCmID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationCmRequestRaw

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


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
    res, err := s.Gateway.PostV05HealthInformationCmRequestRaw(ctx, operations.PostV05HealthInformationCmRequestRawRequest{
        Authorization: "labore",
        RequestBody: []byte("modi"),
        XCmID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationNotifyJSON

API called by HIU and HIP during data-transfer.
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]


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
    res, err := s.Gateway.PostV05HealthInformationNotifyJSON(ctx, operations.PostV05HealthInformationNotifyJSONRequest{
        Authorization: "aliquid",
        HealthInformationNotification: shared.HealthInformationNotification{
            Notification: shared.HealthInformationNotificationNotification{
                ConsentID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
                DoneAt: types.MustTimeFromString("2021-11-23T10:34:02.904Z"),
                Notifier: shared.HealthInformationNotificationNotificationNotifier{
                    ID: "tmh",
                    Type: shared.HealthInformationNotificationNotificationNotifierTypeEnumHiu,
                },
                StatusNotification: shared.HealthInformationNotificationNotificationStatusNotification{
                    HipID: "max",
                    SessionStatus: shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnumTransferred,
                    StatusResponses: []shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "ipsam",
                            Description: sdk.String("alias"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "fugit",
                            Description: sdk.String("dolorum"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "excepturi",
                            Description: sdk.String("tempora"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                        shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses{
                            CareContextReference: "facilis",
                            Description: sdk.String("tempore"),
                            HiStatus: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk,
                        },
                    },
                },
                TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-01-14T19:13:42.009Z"),
        },
        XCmID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05HealthInformationNotifyRaw

API called by HIU and HIP during data-transfer.
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]


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
    res, err := s.Gateway.PostV05HealthInformationNotifyRaw(ctx, operations.PostV05HealthInformationNotifyRawRequest{
        Authorization: "non",
        RequestBody: []byte("eligendi"),
        XCmID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsFindJSON

This API is meant for identify to patient given her consent-manager-user-id


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
    res, err := s.Gateway.PostV05PatientsFindJSON(ctx, operations.PostV05PatientsFindJSONRequest{
        Authorization: "aliquid",
        PatientIdentificationRequest: shared.PatientIdentificationRequest{
            Query: shared.PatientIdentificationRequestQuery{
                Patient: shared.PatientIdentificationRequestQueryPatient{
                    ID: "hinapatel79@ndhm",
                },
                Requester: shared.PatientIdentificationRequestQueryRequester{
                    ID: "100005",
                    Type: shared.PatientIdentificationRequestQueryRequesterTypeEnumHip,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2021-04-14T09:13:11.675Z"),
        },
        XCmID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsFindRaw

This API is meant for identify to patient given her consent-manager-user-id


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
    res, err := s.Gateway.PostV05PatientsFindRaw(ctx, operations.PostV05PatientsFindRawRequest{
        Authorization: "dolor",
        RequestBody: []byte("debitis"),
        XCmID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SessionsJSON

Get access token

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gateway.PostV05SessionsJSON(ctx, shared.SessionRequest{
        ClientID: "dolorum",
        ClientSecret: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionResponse != nil {
        // handle response
    }
}
```

## PostV05SessionsRaw

Get access token

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gateway.PostV05SessionsRaw(ctx, []byte("in"))
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionResponse != nil {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsCmInitJSON

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

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
    res, err := s.Gateway.PostV05SubscriptionRequestsCmInitJSON(ctx, operations.PostV05SubscriptionRequestsCmInitJSONRequest{
        Authorization: "illum",
        SubscriptionRequest: shared.SubscriptionRequest{
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Subscription: shared.SubscriptionRequestSubscription{
                Categories: []shared.SubscriptionCategoryEnum{
                    shared.SubscriptionCategoryEnumLink,
                    shared.SubscriptionCategoryEnumLink,
                    shared.SubscriptionCategoryEnumLink,
                    shared.SubscriptionCategoryEnumLink,
                },
                Hips: []shared.OrganizationRepresentation{
                    shared.OrganizationRepresentation{
                        ID: "14cd66ae-395e-4fb9-ba88-f3a66997074b",
                    },
                    shared.OrganizationRepresentation{
                        ID: "a4469b6e-2141-4959-890a-fa563e2516fe",
                    },
                    shared.OrganizationRepresentation{
                        ID: "4c8b711e-5b7f-4d2e-9028-921cddc69260",
                    },
                },
                Hiu: shared.OrganizationRepresentation{
                    ID: "1fb576b0-d5f0-4d30-85fb-b2587053202c",
                },
                Patient: shared.ConsentManagerPatientID{
                    ID: "hinapatel@ndhm",
                },
                Period: shared.SubscriptionPeriod{
                    From: types.MustTimeFromString("2022-10-11T06:25:10.430Z"),
                    To: types.MustTimeFromString("2021-12-18T20:09:27.741Z"),
                },
                Purpose: shared.UsePurpose{
                    Code: "hic",
                    RefURI: sdk.String("https://pale-psychoanalyst.name"),
                    Text: "voluptatem",
                },
            },
            Timestamp: types.MustTimeFromString("2022-07-04T15:50:14.407Z"),
        },
        XCmID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsCmInitRaw

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

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
    res, err := s.Gateway.PostV05SubscriptionRequestsCmInitRaw(ctx, operations.PostV05SubscriptionRequestsCmInitRawRequest{
        Authorization: "error",
        RequestBody: []byte("eaque"),
        XCmID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionRequestsHiuOnNotify

This API is called by HIU as acknowledgement to subscription request relevant notifications. 


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
    res, err := s.Gateway.PostV05SubscriptionRequestsHiuOnNotify(ctx, operations.PostV05SubscriptionRequestsHiuOnNotifyRequest{
        Authorization: "rerum",
        HIUSubscriptionRequestNotificationAcknowledgement: shared.HIUSubscriptionRequestNotificationAcknowledgement{
            Acknowledgement: &shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement{
                Status: shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnumOk,
                SubscriptionRequestID: "subscription Id",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "asperiores",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "e49a8d9c-bf48-4633-b23f-9b77f3a41006",
            },
            Timestamp: types.MustTimeFromString("2022-09-09T04:40:04.540Z"),
        },
        XCmID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05SubscriptionsHiuOnNotify

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
    res, err := s.Gateway.PostV05SubscriptionsHiuOnNotify(ctx, operations.PostV05SubscriptionsHiuOnNotifyRequest{
        Authorization: "quidem",
        HIUSubscriptionNotificationAcknowledgment: shared.HIUSubscriptionNotificationAcknowledgment{
            Acknowledgement: &shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgement{
                EventID: "subscription event Id",
                Status: shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "voluptas",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "9280d1ba-77a8-49eb-b737-ae4203ce5e6a",
            },
            Timestamp: types.MustTimeFromString("2022-05-08T23:33:14.875Z"),
        },
        XCmID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthConfirmJSON

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


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
    res, err := s.Gateway.PostV05UsersAuthConfirmJSON(ctx, operations.PostV05UsersAuthConfirmJSONRequest{
        Authorization: "totam",
        PatientAuthConfirmRequest: shared.PatientAuthConfirmRequest{
            Credential: shared.PatientAuthConfirmRequestCredential{
                AuthCode: sdk.String("similique"),
                Demographic: &shared.PatientDemographic{
                    DateOfBirth: "1972-02-29",
                    Gender: shared.PatientGenderEnumM,
                    Identifier: &shared.AuthConfirmIdentifier{
                        Type: shared.AuthConfirmIdentifierTypeEnumMobile,
                        Value: "+919800083232",
                    },
                    Name: "janki das",
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-01-24T12:18:47.570Z"),
            TransactionID: "tempora",
        },
        XCmID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthConfirmRaw

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


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
    res, err := s.Gateway.PostV05UsersAuthConfirmRaw(ctx, operations.PostV05UsersAuthConfirmRawRequest{
        Authorization: "quod",
        RequestBody: []byte("officiis"),
        XCmID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthFetchModesJSON

This API is meant for identify supported authentication modes for a patient given a specific purpose


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
    res, err := s.Gateway.PostV05UsersAuthFetchModesJSON(ctx, operations.PostV05UsersAuthFetchModesJSONRequest{
        Authorization: "dolorum",
        PatientAuthModeQueryRequest: shared.PatientAuthModeQueryRequest{
            Query: shared.PatientAuthModeQueryRequestQuery{
                ID: "hinapatel79@ndhm",
                Purpose: shared.PatientAuthPurposeEnumKycAndLink,
                Requester: shared.PatientAuthModeQueryRequestQueryRequester{
                    ID: "100005",
                    Type: shared.PatientAuthModeQueryRequestQueryRequesterTypeEnumHip,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-01-13T02:40:51.157Z"),
        },
        XCmID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthFetchModesRaw

This API is meant for identify supported authentication modes for a patient given a specific purpose


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
    res, err := s.Gateway.PostV05UsersAuthFetchModesRaw(ctx, operations.PostV05UsersAuthFetchModesRawRequest{
        Authorization: "quisquam",
        RequestBody: []byte("tenetur"),
        XCmID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthInitJSON

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
  1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request


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
    res, err := s.Gateway.PostV05UsersAuthInitJSON(ctx, operations.PostV05UsersAuthInitJSONRequest{
        Authorization: "tempore",
        PatientAuthInitRequest: shared.PatientAuthInitRequest{
            Query: shared.PatientAuthInitRequestQuery{
                AuthMode: shared.AuthenticationModeEnumAadhaarOtp.ToPointer(),
                ID: "hinapatel@ndhm",
                Purpose: shared.PatientAuthPurposeEnumLink,
                Requester: shared.PatientAuthInitRequestQueryRequester{
                    ID: "100005",
                    Type: shared.PatientAuthInitRequestQueryRequesterTypeEnumHip,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-01-16T12:43:49.763Z"),
        },
        XCmID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthInitRaw

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
  1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request


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
    res, err := s.Gateway.PostV05UsersAuthInitRaw(ctx, operations.PostV05UsersAuthInitRawRequest{
        Authorization: "nihil",
        RequestBody: []byte("sit"),
        XCmID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnNotifyJSON

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


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
    res, err := s.Gateway.PostV05UsersAuthOnNotifyJSON(ctx, operations.PostV05UsersAuthOnNotifyJSONRequest{
        Authorization: "neque",
        PatientAuthNotificationAcknowledgement: shared.PatientAuthNotificationAcknowledgement{
            Acknowledgement: &shared.PatientAuthNotificationAcknowledgementAcknowledgement{
                Status: shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "vel",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "b5a73429-cdb1-4a84-a2bb-679d2322715b",
            },
            Timestamp: types.MustTimeFromString("2022-11-28T15:41:44.846Z"),
        },
        XCmID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnNotifyRaw

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


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
    res, err := s.Gateway.PostV05UsersAuthOnNotifyRaw(ctx, operations.PostV05UsersAuthOnNotifyRawRequest{
        Authorization: "soluta",
        RequestBody: []byte("nobis"),
        XCmID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
