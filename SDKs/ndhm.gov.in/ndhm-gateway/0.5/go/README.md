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
    
    req := operations.PostV05CareContextsDiscoverRequest{
        Headers: operations.PostV05CareContextsDiscoverHeaders{
            Authorization: "sit",
            XHIPID: "voluptas",
        },
        Request: operations.PostV05CareContextsDiscoverRequests{
            ApplicationXML: []byte("culpa"),
            PatientDiscoveryRequest: &shared.PatientDiscoveryRequest{
                Patient: shared.PatientDiscoveryRequestPatient{
                    Gender: "O",
                    ID: "consequuntur",
                    Name: "dolor",
                    UnverifiedIdentifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: "MR",
                            Value: "fugit",
                        },
                        shared.Identifier{
                            Type: "MOBILE",
                            Value: "nihil",
                        },
                    },
                    VerifiedIdentifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: "HEALTH_ID",
                            Value: "debitis",
                        },
                        shared.Identifier{
                            Type: "MOBILE",
                            Value: "et",
                        },
                        shared.Identifier{
                            Type: "HEALTH_ID",
                            Value: "dolorem",
                        },
                    },
                    YearOfBirth: 7259475919510918339,
                },
                RequestID: "voluptate",
                Timestamp: "1998-09-30T11:01:25Z",
                TransactionID: "vitae",
            },
        },
    }
    
    res, err := s.CmFacing.PostV05CareContextsDiscover(ctx, req)
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

### cm facing

* `PostV05CareContextsDiscover` - Discover patient's accounts
* `PostV05CareContextsOnDiscover` - Response to patient's account discovery request
* `PostV05ConsentRequestsOnInit` - Response to consent request
* `PostV05ConsentRequestsOnStatus` - Result of consent request status
* `PostV05ConsentsHipNotify` - Consent notification
* `PostV05ConsentsHiuNotify` - Consent notification
* `PostV05ConsentsOnFetch` - Result of fetch request for a consent artefact
* `PostV05HealthInformationCmOnRequest` - Health information data request
* `PostV05HealthInformationHipRequest` - Health information data request
* `PostV05LinksLinkConfirm` - Token submission by Consent Manager for link confirmation
* `PostV05LinksLinkInit` - Link patient's care contexts
* `PostV05LinksLinkOnAddContexts` - callback API for HIP initiated patient linking /link/add-context
* `PostV05PatientsOnFind` - Identification result for a consent-manager user-id
* `PostV05PatientsProfileShare` - Share patient profile details
* `PostV05PatientsSmsOnNotify` - Acknowledgment response for SMS notification sent to patient by HIP
* `PostV05SubscriptionRequestsCmOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `PostV05SubscriptionRequestsHiuNotify` - Notification for subscription grant/deny/revoke
* `PostV05SubscriptionsHiuNotify` - Notification to HIU on basis of a granted subscription
* `PostV05UsersAuthNotify` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthOnConfirm` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnFetchModes` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnInit` - Response to user authentication initialization from HIP

### consent flow

* `PostV05ConsentRequestsInit` - Create consent request
* `PostV05ConsentRequestsOnInit` - Response to consent request
* `PostV05ConsentRequestsOnStatus` - Result of consent request status
* `PostV05ConsentRequestsStatus` - Get consent request status
* `PostV05ConsentsFetch` - Get consent artefact
* `PostV05ConsentsHipNotify` - Consent notification
* `PostV05ConsentsHipOnNotify` - Consent notification
* `PostV05ConsentsHiuNotify` - Consent notification
* `PostV05ConsentsHiuOnNotify` - Consent notification
* `PostV05ConsentsOnFetch` - Result of fetch request for a consent artefact

### data flow

* `PostV05HealthInformationCmOnRequest` - Health information data request
* `PostV05HealthInformationCmRequest` - Health information data request
* `PostV05HealthInformationHipOnRequest` - Health information data request
* `PostV05HealthInformationHipRequest` - Health information data request
* `PostV05HealthInformationNotify` - Notifications corresponding to events during data flow

### discovery

* `PostV05CareContextsDiscover` - Discover patient's accounts
* `PostV05CareContextsOnDiscover` - Response to patient's account discovery request

### hip facing

* `PostV05ConsentsHipOnNotify` - Consent notification
* `PostV05HealthInformationHipOnRequest` - Health information data request
* `PostV05HealthInformationNotify` - Notifications corresponding to events during data flow
* `PostV05LinksLinkAddContexts` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkOnConfirm` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnInit` - Response to patient's care context link request
* `PostV05PatientsSmsNotify` - API for HIP to send SMS notifications to patients
* `PostV05UsersAuthConfirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInit` - Initialize authentication from HIP
* `PostV05UsersAuthOnNotify` - callback API by HIU/HIPs as acknowledgement of auth notification

### hiu facing

* `PostV05ConsentRequestsInit` - Create consent request
* `PostV05ConsentRequestsStatus` - Get consent request status
* `PostV05ConsentsFetch` - Get consent artefact
* `PostV05ConsentsHiuOnNotify` - Consent notification
* `PostV05HealthInformationCmRequest` - Health information data request
* `PostV05HealthInformationNotify` - Notifications corresponding to events during data flow
* `PostV05PatientsFind` - Identify a patient by her consent-manager user-id
* `PostV05SubscriptionRequestsCmInit` - Request for subscription
* `PostV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `PostV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `PostV05UsersAuthConfirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInit` - Initialize authentication from HIP
* `PostV05UsersAuthOnNotify` - callback API by HIU/HIPs as acknowledgement of auth notification

### identification

* `PostV05PatientsFind` - Identify a patient by her consent-manager user-id
* `PostV05PatientsOnFind` - Identification result for a consent-manager user-id

### link

* `PostV05LinksLinkAddContexts` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkConfirm` - Token submission by Consent Manager for link confirmation
* `PostV05LinksLinkInit` - Link patient's care contexts
* `PostV05LinksLinkOnAddContexts` - callback API for HIP initiated patient linking /link/add-context
* `PostV05LinksLinkOnConfirm` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnInit` - Response to patient's care context link request

### monitoring

* `GetV05Heartbeat` - Get consent request status

### patient notification

* `PostV05PatientsSmsNotify` - API for HIP to send SMS notifications to patients
* `PostV05PatientsSmsOnNotify` - Acknowledgment response for SMS notification sent to patient by HIP

### profile

* `PostV05PatientsProfileOnShare` - Response to patient's share profile request
* `PostV05PatientsProfileShare` - Share patient profile details

### services

* `GetV05HiServicesServiceID` - Get bridge service details/profile by the serviceId provided.

### sessions

* `GetV05WellKnownOpenidConfiguration` - Get openid configuration
* `GetV05Certs` - Get certs for JWT verification
* `PostV05Sessions` - Get access token

### subscriptions

* `PostV05SubscriptionRequestsCmInit` - Request for subscription
* `PostV05SubscriptionRequestsCmOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `PostV05SubscriptionRequestsHiuNotify` - Notification for subscription grant/deny/revoke
* `PostV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `PostV05SubscriptionsHiuNotify` - Notification to HIU on basis of a granted subscription
* `PostV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### user auth

* `PostV05UsersAuthConfirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInit` - Initialize authentication from HIP
* `PostV05UsersAuthNotify` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthOnConfirm` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnFetchModes` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnInit` - Response to user authentication initialization from HIP
* `PostV05UsersAuthOnNotify` - callback API by HIU/HIPs as acknowledgement of auth notification

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
