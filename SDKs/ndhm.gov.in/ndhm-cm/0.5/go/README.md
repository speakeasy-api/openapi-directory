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
            Authorization: "sit",
        },
        Request: operations.PostV05ConsentRequestsInitRequests{
            ApplicationXML: []byte("voluptas"),
            ConsentRequest: &shared.ConsentRequest{
                Consent: shared.ConsentRequestConsent{
                    CareContexts: []shared.CareContextDefinition{
                        shared.CareContextDefinition{
                            CareContextReference: "expedita",
                            PatientReference: "consequuntur",
                        },
                        shared.CareContextDefinition{
                            CareContextReference: "dolor",
                            PatientReference: "expedita",
                        },
                    },
                    HiTypes: []shared.HiTypeEnumEnum{
                        "OPConsultation",
                        "OPConsultation",
                        "OPConsultation",
                    },
                    Hip: &shared.ConsentRequestConsentHip{
                        ID: "rerum",
                    },
                    Hiu: shared.ConsentRequestConsentHiu{
                        ID: "dicta",
                    },
                    Patient: shared.ConsentRequestConsentPatient{
                        ID: "debitis",
                    },
                    Permission: shared.Permission{
                        AccessMode: "VIEW",
                        DataEraseAt: "2005-09-27T09:17:54Z",
                        DateRange: shared.PermissionDateRange{
                            From: "1970-04-14T21:44:49Z",
                            To: "2021-10-23T13:19:10Z",
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: 7259475919510918339,
                            Unit: "YEAR",
                            Value: 3287288577352441706,
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "vitae",
                        RefURI: "totam",
                        Text: "dolores",
                    },
                    Requester: shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: "illum",
                            Type: "debitis",
                            Value: "vel",
                        },
                        Name: "odio",
                    },
                },
                RequestID: "dolore",
                Timestamp: "1993-03-23T22:53:08Z",
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
