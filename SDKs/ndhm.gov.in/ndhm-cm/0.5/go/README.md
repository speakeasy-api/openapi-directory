# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.PostV05ConsentRequestsInitRequest{
        Headers: operations.PostV05ConsentRequestsInitHeaders{
            Authorization: "assumenda",
        },
        Request: operations.PostV05ConsentRequestsInitRequests{
            ApplicationXML: []byte("ipsa"),
            ConsentRequest: &shared.ConsentRequest{
                Consent: shared.ConsentRequestConsent{
                    CareContexts: []shared.CareContextDefinition{
                        shared.CareContextDefinition{
                            CareContextReference: "debitis",
                            PatientReference: "quia",
                        },
                        shared.CareContextDefinition{
                            CareContextReference: "qui",
                            PatientReference: "sit",
                        },
                        shared.CareContextDefinition{
                            CareContextReference: "aut",
                            PatientReference: "corrupti",
                        },
                    },
                    HiTypes: []shared.HiTypeEnumEnum{
                        "Prescription",
                        "DiagnosticReport",
                        "OPConsultation",
                    },
                    Hip: &shared.ConsentRequestConsentHip{
                        ID: "quos",
                    },
                    Hiu: shared.ConsentRequestConsentHiu{
                        ID: "non",
                    },
                    Patient: shared.ConsentRequestConsentPatient{
                        ID: "culpa",
                    },
                    Permission: shared.Permission{
                        AccessMode: "STORE",
                        DataEraseAt: "1996-05-30T09:14:15Z",
                        DateRange: shared.PermissionDateRange{
                            From: "1999-04-03T00:31:51Z",
                            To: "2000-05-14T09:37:53Z",
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: 1023459084632939894,
                            Unit: "MONTH",
                            Value: 9095513636727418367,
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "atque",
                        RefURI: "quasi",
                        Text: "voluptates",
                    },
                    Requester: shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: "in",
                            Type: "aut",
                            Value: "nobis",
                        },
                        Name: "hic",
                    },
                },
                RequestID: "dolores",
                Timestamp: "2018-03-19T12:27:56Z",
            },
        },
    }
    
    res, err := s.Consent.PostV05ConsentRequestsInit(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### consent

* `PostV05ConsentRequestsInit` - Create consent request
* `PostV05ConsentRequestsStatus` - Get consent request status
* `PostV05ConsentsFetch` - Get consent artefact
* `PostV05ConsentsHipOnNotify` - Consent notification
* `PostV05ConsentsHiuOnNotify` - Consent notification

### data flow

* `PostV05HealthInformationNotify` - Notifications corresponding to events during data flow
* `PostV05HealthInformationOnRequest` - Health information data request acknowledgement from HIP
* `PostV05HealthInformationRequest` - Health information data request from HIU

### discovery

* `PostV05CareContextsOnDiscover` - Response to patient's account discovery request

### hip facing

* `PostV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthOnNotify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### hiu facing

* `PostV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `PostV05UsersAuthOnNotify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### identification

* `PostV05PatientsFind` - Identify a patient by her consent-manager user-id

### link

* `PostV05LinksLinkAddContexts` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkOnConfirm` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnInit` - Response to patient's care context link request

### monitoring

* `GetV05Heartbeat` - Get consent request status

### profile

* `PostV05PatientsProfileOnShare` - Response to patient's share profile request

### subscriptions

* `PostV05SubscriptionRequestsCmInit` - Request for subscription
* `PostV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `PostV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### user auth

* `PostV05UsersAuthConfirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInit` - Initialize authentication from HIP
* `PostV05UsersAuthOnNotify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
