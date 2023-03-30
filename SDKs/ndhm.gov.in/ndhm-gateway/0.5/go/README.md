# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-gateway/0.5/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PostV05CareContextsDiscoverJSONRequest{
        Headers: operations.PostV05CareContextsDiscoverJSONHeaders{
            Authorization: "corrupti",
            XHipID: "provident",
        },
        Request: shared.PatientDiscoveryRequest{
            Patient: shared.PatientDiscoveryRequestPatient{
                Gender: "O",
                ID: "<patient-id>@<consent-manager-id>",
                Name: "chandler bing",
                UnverifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: "NDHM_HEALTH_NUMBER",
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: "HEALTH_ID",
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: "NDHM_HEALTH_NUMBER",
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: "HEALTH_ID",
                        Value: "+919800083232",
                    },
                },
                VerifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: "NDHM_HEALTH_NUMBER",
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: "NDHM_HEALTH_NUMBER",
                        Value: "+919800083232",
                    },
                },
                YearOfBirth: 2000,
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: "2022-07-25T06:44:09.184Z",
            TransactionID: "4e0f467c-c879-46ed-951a-05dfc2ddf7cc",
        },
    }

    ctx := context.Background()
    res, err := s.CmFacing.PostV05CareContextsDiscoverJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### CmFacing

* `PostV05CareContextsDiscoverJSON` - Discover patient's accounts
* `PostV05CareContextsDiscoverRaw` - Discover patient's accounts
* `PostV05CareContextsOnDiscoverJSON` - Response to patient's account discovery request
* `PostV05CareContextsOnDiscoverRaw` - Response to patient's account discovery request
* `PostV05ConsentRequestsOnInitJSON` - Response to consent request
* `PostV05ConsentRequestsOnInitRaw` - Response to consent request
* `PostV05ConsentRequestsOnStatusJSON` - Result of consent request status
* `PostV05ConsentRequestsOnStatusRaw` - Result of consent request status
* `PostV05ConsentsHipNotifyJSON` - Consent notification
* `PostV05ConsentsHipNotifyRaw` - Consent notification
* `PostV05ConsentsHiuNotify` - Consent notification
* `PostV05ConsentsOnFetchJSON` - Result of fetch request for a consent artefact
* `PostV05ConsentsOnFetchRaw` - Result of fetch request for a consent artefact
* `PostV05HealthInformationCmOnRequestJSON` - Health information data request
* `PostV05HealthInformationCmOnRequestRaw` - Health information data request
* `PostV05HealthInformationHipRequestJSON` - Health information data request
* `PostV05HealthInformationHipRequestRaw` - Health information data request
* `PostV05LinksLinkConfirmJSON` - Token submission by Consent Manager for link confirmation
* `PostV05LinksLinkConfirmRaw` - Token submission by Consent Manager for link confirmation
* `PostV05LinksLinkInitJSON` - Link patient's care contexts
* `PostV05LinksLinkInitRaw` - Link patient's care contexts
* `PostV05LinksLinkOnAddContextsJSON` - callback API for HIP initiated patient linking /link/add-context
* `PostV05LinksLinkOnAddContextsRaw` - callback API for HIP initiated patient linking /link/add-context
* `PostV05PatientsOnFindJSON` - Identification result for a consent-manager user-id
* `PostV05PatientsOnFindRaw` - Identification result for a consent-manager user-id
* `PostV05PatientsProfileShareJSON` - Share patient profile details
* `PostV05PatientsProfileShareRaw` - Share patient profile details
* `PostV05PatientsSmsOnNotifyJSON` - Acknowledgment response for SMS notification sent to patient by HIP
* `PostV05PatientsSmsOnNotifyRaw` - Acknowledgment response for SMS notification sent to patient by HIP
* `PostV05SubscriptionRequestsCmOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `PostV05SubscriptionRequestsHiuNotifyJSON` - Notification for subscription grant/deny/revoke
* `PostV05SubscriptionRequestsHiuNotifyRaw` - Notification for subscription grant/deny/revoke
* `PostV05SubscriptionsHiuNotifyJSON` - Notification to HIU on basis of a granted subscription
* `PostV05SubscriptionsHiuNotifyRaw` - Notification to HIU on basis of a granted subscription
* `PostV05UsersAuthNotifyJSON` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthNotifyRaw` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthOnConfirmJSON` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnConfirmRaw` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnFetchModesJSON` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnFetchModesRaw` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnInitJSON` - Response to user authentication initialization from HIP
* `PostV05UsersAuthOnInitRaw` - Response to user authentication initialization from HIP

### ConsentFlow

* `PostV05ConsentRequestsInitJSON` - Create consent request
* `PostV05ConsentRequestsInitRaw` - Create consent request
* `PostV05ConsentRequestsOnInitJSON` - Response to consent request
* `PostV05ConsentRequestsOnInitRaw` - Response to consent request
* `PostV05ConsentRequestsOnStatusJSON` - Result of consent request status
* `PostV05ConsentRequestsOnStatusRaw` - Result of consent request status
* `PostV05ConsentRequestsStatusJSON` - Get consent request status
* `PostV05ConsentRequestsStatusRaw` - Get consent request status
* `PostV05ConsentsFetch` - Get consent artefact
* `PostV05ConsentsHipNotifyJSON` - Consent notification
* `PostV05ConsentsHipNotifyRaw` - Consent notification
* `PostV05ConsentsHipOnNotifyJSON` - Consent notification
* `PostV05ConsentsHipOnNotifyRaw` - Consent notification
* `PostV05ConsentsHiuNotify` - Consent notification
* `PostV05ConsentsHiuOnNotify` - Consent notification
* `PostV05ConsentsOnFetchJSON` - Result of fetch request for a consent artefact
* `PostV05ConsentsOnFetchRaw` - Result of fetch request for a consent artefact

### DataFlow

* `PostV05HealthInformationCmOnRequestJSON` - Health information data request
* `PostV05HealthInformationCmOnRequestRaw` - Health information data request
* `PostV05HealthInformationCmRequestJSON` - Health information data request
* `PostV05HealthInformationCmRequestRaw` - Health information data request
* `PostV05HealthInformationHipOnRequestJSON` - Health information data request
* `PostV05HealthInformationHipOnRequestRaw` - Health information data request
* `PostV05HealthInformationHipRequestJSON` - Health information data request
* `PostV05HealthInformationHipRequestRaw` - Health information data request
* `PostV05HealthInformationNotifyJSON` - Notifications corresponding to events during data flow
* `PostV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow

### Discovery

* `PostV05CareContextsDiscoverJSON` - Discover patient's accounts
* `PostV05CareContextsDiscoverRaw` - Discover patient's accounts
* `PostV05CareContextsOnDiscoverJSON` - Response to patient's account discovery request
* `PostV05CareContextsOnDiscoverRaw` - Response to patient's account discovery request

### HipFacing

* `PostV05ConsentsHipOnNotifyJSON` - Consent notification
* `PostV05ConsentsHipOnNotifyRaw` - Consent notification
* `PostV05HealthInformationHipOnRequestJSON` - Health information data request
* `PostV05HealthInformationHipOnRequestRaw` - Health information data request
* `PostV05HealthInformationNotifyJSON` - Notifications corresponding to events during data flow
* `PostV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow
* `PostV05LinksLinkAddContextsJSON` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkAddContextsRaw` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkOnConfirmJSON` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnConfirmRaw` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnInitJSON` - Response to patient's care context link request
* `PostV05LinksLinkOnInitRaw` - Response to patient's care context link request
* `PostV05PatientsSmsNotifyJSON` - API for HIP to send SMS notifications to patients
* `PostV05PatientsSmsNotifyRaw` - API for HIP to send SMS notifications to patients
* `PostV05UsersAuthConfirmJSON` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModesJSON` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInitJSON` - Initialize authentication from HIP
* `PostV05UsersAuthInitRaw` - Initialize authentication from HIP
* `PostV05UsersAuthOnNotifyJSON` - callback API by HIU/HIPs as acknowledgement of auth notification
* `PostV05UsersAuthOnNotifyRaw` - callback API by HIU/HIPs as acknowledgement of auth notification

### HiuFacing

* `PostV05ConsentRequestsInitJSON` - Create consent request
* `PostV05ConsentRequestsInitRaw` - Create consent request
* `PostV05ConsentRequestsStatusJSON` - Get consent request status
* `PostV05ConsentRequestsStatusRaw` - Get consent request status
* `PostV05ConsentsFetch` - Get consent artefact
* `PostV05ConsentsHiuOnNotify` - Consent notification
* `PostV05HealthInformationCmRequestJSON` - Health information data request
* `PostV05HealthInformationCmRequestRaw` - Health information data request
* `PostV05HealthInformationNotifyJSON` - Notifications corresponding to events during data flow
* `PostV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow
* `PostV05PatientsFindJSON` - Identify a patient by her consent-manager user-id
* `PostV05PatientsFindRaw` - Identify a patient by her consent-manager user-id
* `PostV05SubscriptionRequestsCmInitJSON` - Request for subscription
* `PostV05SubscriptionRequestsCmInitRaw` - Request for subscription
* `PostV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `PostV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `PostV05UsersAuthConfirmJSON` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModesJSON` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInitJSON` - Initialize authentication from HIP
* `PostV05UsersAuthInitRaw` - Initialize authentication from HIP
* `PostV05UsersAuthOnNotifyJSON` - callback API by HIU/HIPs as acknowledgement of auth notification
* `PostV05UsersAuthOnNotifyRaw` - callback API by HIU/HIPs as acknowledgement of auth notification

### Identification

* `PostV05PatientsFindJSON` - Identify a patient by her consent-manager user-id
* `PostV05PatientsFindRaw` - Identify a patient by her consent-manager user-id
* `PostV05PatientsOnFindJSON` - Identification result for a consent-manager user-id
* `PostV05PatientsOnFindRaw` - Identification result for a consent-manager user-id

### Link

* `PostV05LinksLinkAddContextsJSON` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkAddContextsRaw` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkConfirmJSON` - Token submission by Consent Manager for link confirmation
* `PostV05LinksLinkConfirmRaw` - Token submission by Consent Manager for link confirmation
* `PostV05LinksLinkInitJSON` - Link patient's care contexts
* `PostV05LinksLinkInitRaw` - Link patient's care contexts
* `PostV05LinksLinkOnAddContextsJSON` - callback API for HIP initiated patient linking /link/add-context
* `PostV05LinksLinkOnAddContextsRaw` - callback API for HIP initiated patient linking /link/add-context
* `PostV05LinksLinkOnConfirmJSON` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnConfirmRaw` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnInitJSON` - Response to patient's care context link request
* `PostV05LinksLinkOnInitRaw` - Response to patient's care context link request

### Monitoring

* `GetV05Heartbeat` - Get consent request status

### PatientNotification

* `PostV05PatientsSmsNotifyJSON` - API for HIP to send SMS notifications to patients
* `PostV05PatientsSmsNotifyRaw` - API for HIP to send SMS notifications to patients
* `PostV05PatientsSmsOnNotifyJSON` - Acknowledgment response for SMS notification sent to patient by HIP
* `PostV05PatientsSmsOnNotifyRaw` - Acknowledgment response for SMS notification sent to patient by HIP

### Profile

* `PostV05PatientsProfileOnShareJSON` - Response to patient's share profile request
* `PostV05PatientsProfileOnShareRaw` - Response to patient's share profile request
* `PostV05PatientsProfileShareJSON` - Share patient profile details
* `PostV05PatientsProfileShareRaw` - Share patient profile details

### Services

* `GetV05HiServicesServiceID` - Get bridge service details/profile by the serviceId provided.

### Sessions

* `GetV05WellKnownOpenidConfiguration` - Get openid configuration
* `GetV05Certs` - Get certs for JWT verification
* `PostV05SessionsJSON` - Get access token
* `PostV05SessionsRaw` - Get access token

### Subscriptions

* `PostV05SubscriptionRequestsCmInitJSON` - Request for subscription
* `PostV05SubscriptionRequestsCmInitRaw` - Request for subscription
* `PostV05SubscriptionRequestsCmOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `PostV05SubscriptionRequestsHiuNotifyJSON` - Notification for subscription grant/deny/revoke
* `PostV05SubscriptionRequestsHiuNotifyRaw` - Notification for subscription grant/deny/revoke
* `PostV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `PostV05SubscriptionsHiuNotifyJSON` - Notification to HIU on basis of a granted subscription
* `PostV05SubscriptionsHiuNotifyRaw` - Notification to HIU on basis of a granted subscription
* `PostV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### UserAuth

* `PostV05UsersAuthConfirmJSON` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModesJSON` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInitJSON` - Initialize authentication from HIP
* `PostV05UsersAuthInitRaw` - Initialize authentication from HIP
* `PostV05UsersAuthNotifyJSON` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthNotifyRaw` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthOnConfirmJSON` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnConfirmRaw` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnFetchModesJSON` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnFetchModesRaw` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnInitJSON` - Response to user authentication initialization from HIP
* `PostV05UsersAuthOnInitRaw` - Response to user authentication initialization from HIP
* `PostV05UsersAuthOnNotifyJSON` - callback API by HIU/HIPs as acknowledgement of auth notification
* `PostV05UsersAuthOnNotifyRaw` - callback API by HIU/HIPs as acknowledgement of auth notification
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
