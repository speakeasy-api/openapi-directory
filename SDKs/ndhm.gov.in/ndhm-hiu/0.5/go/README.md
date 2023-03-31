# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-hiu/0.5/go
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Gateway

* `GetV05WellKnownOpenidConfiguration` - Get openid configuration
* `GetV05Certs` - Get certs for JWT verification
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
* `PostV05SessionsJSON` - Get access token
* `PostV05SessionsRaw` - Get access token
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

### ConsentFlow

* `PostV05ConsentRequestsOnInitJSON` - Response to consent request
* `PostV05ConsentRequestsOnInitRaw` - Response to consent request
* `PostV05ConsentRequestsOnStatusJSON` - Result of consent request status
* `PostV05ConsentRequestsOnStatusRaw` - Result of consent request status
* `PostV05ConsentsHiuNotify` - Consent notification
* `PostV05ConsentsOnFetchJSON` - Result of fetch request for a consent artefact
* `PostV05ConsentsOnFetchRaw` - Result of fetch request for a consent artefact

### DataFlow

* `PostV05HealthInformationHiuOnRequestJSON` - Health information data request
* `PostV05HealthInformationHiuOnRequestRaw` - Health information data request
* `PostV05HealthInformationTransferJSON` - health information transfer API
* `PostV05HealthInformationTransferRaw` - health information transfer API

### Identification

* `PostV05PatientsOnFindJSON` - Identification result for a consent-manager user-id
* `PostV05PatientsOnFindRaw` - Identification result for a consent-manager user-id

### Monitoring

* `GetV05Heartbeat` - Get consent request status

### Subscriptions

* `PostV05SubscriptionRequestsHiuNotifyJSON` - Notification for subscription grant/deny/revoke
* `PostV05SubscriptionRequestsHiuNotifyRaw` - Notification for subscription grant/deny/revoke
* `PostV05SubscriptionRequestsHiuOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `PostV05SubscriptionsHiuNotifyJSON` - Notification to HIU on basis of a granted subscription
* `PostV05SubscriptionsHiuNotifyRaw` - Notification to HIU on basis of a granted subscription

### UserAuth

* `PostV05UsersAuthNotifyJSON` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthNotifyRaw` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthOnConfirmJSON` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnConfirmRaw` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnFetchModesJSON` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnFetchModesRaw` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnInitJSON` - Response to user authentication initialization from HIP
* `PostV05UsersAuthOnInitRaw` - Response to user authentication initialization from HIP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
