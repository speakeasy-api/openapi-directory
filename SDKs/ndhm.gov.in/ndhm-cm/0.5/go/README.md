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
            Authorization: "omnis",
        },
        Request: operations.PostV05ConsentRequestsInitRequests{
            ApplicationXML: []byte("officiis"),
            ConsentRequest: &shared.ConsentRequest{
                Consent: shared.ConsentRequestConsent{
                    CareContexts: []shared.CareContextDefinition{
                        shared.CareContextDefinition{
                            CareContextReference: "harum",
                            PatientReference: "dolore",
                        },
                    },
                    HiTypes: []shared.HiTypeEnumEnum{
                        "DischargeSummary",
                    },
                    Hip: map[string]interface{}{
                        "voluptatem": "ut",
                        "dolore": "eligendi",
                        "quis": "esse",
                    },
                    Hiu: map[string]interface{}{
                        "fugit": "ullam",
                        "reiciendis": "aut",
                    },
                    Patient: map[string]interface{}{
                        "perspiciatis": "incidunt",
                        "ut": "excepturi",
                        "sunt": "et",
                    },
                    Permission: shared.Permission{
                        AccessMode: "VIEW",
                        DataEraseAt: "2019-02-03T05:07:07Z",
                        DateRange: shared.PermissionDateRange{
                            From: "1998-12-03T02:52:49Z",
                            To: "2012-12-04T23:49:43Z",
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: 2461558090694216527,
                            Unit: "WEEK",
                            Value: 3238526225196230627,
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "aliquid",
                        RefURI: "eos",
                        Text: "dolores",
                    },
                    Requester: shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: "consequuntur",
                            Type: "expedita",
                            Value: "quasi",
                        },
                        Name: "eos",
                    },
                },
                RequestID: "eius",
                Timestamp: "1997-09-22T05:26:28Z",
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
