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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Gateway](docs/gateway/README.md)

* [GetV05WellKnownOpenidConfiguration](docs/gateway/README.md#getv05wellknownopenidconfiguration) - Get openid configuration
* [GetV05Certs](docs/gateway/README.md#getv05certs) - Get certs for JWT verification
* [PostV05ConsentRequestsInitJSON](docs/gateway/README.md#postv05consentrequestsinitjson) - Create consent request
* [PostV05ConsentRequestsInitRaw](docs/gateway/README.md#postv05consentrequestsinitraw) - Create consent request
* [PostV05ConsentRequestsStatusJSON](docs/gateway/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [PostV05ConsentRequestsStatusRaw](docs/gateway/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [PostV05ConsentsFetch](docs/gateway/README.md#postv05consentsfetch) - Get consent artefact
* [PostV05ConsentsHiuOnNotify](docs/gateway/README.md#postv05consentshiuonnotify) - Consent notification
* [PostV05HealthInformationCmRequestJSON](docs/gateway/README.md#postv05healthinformationcmrequestjson) - Health information data request
* [PostV05HealthInformationCmRequestRaw](docs/gateway/README.md#postv05healthinformationcmrequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](docs/gateway/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](docs/gateway/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05PatientsFindJSON](docs/gateway/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [PostV05PatientsFindRaw](docs/gateway/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [PostV05SessionsJSON](docs/gateway/README.md#postv05sessionsjson) - Get access token
* [PostV05SessionsRaw](docs/gateway/README.md#postv05sessionsraw) - Get access token
* [PostV05SubscriptionRequestsCmInitJSON](docs/gateway/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [PostV05SubscriptionRequestsCmInitRaw](docs/gateway/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [PostV05SubscriptionRequestsHiuOnNotify](docs/gateway/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [PostV05SubscriptionsHiuOnNotify](docs/gateway/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [PostV05UsersAuthConfirmJSON](docs/gateway/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](docs/gateway/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](docs/gateway/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](docs/gateway/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](docs/gateway/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](docs/gateway/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](docs/gateway/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](docs/gateway/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

### [ConsentFlow](docs/consentflow/README.md)

* [PostV05ConsentRequestsOnInitJSON](docs/consentflow/README.md#postv05consentrequestsoninitjson) - Response to consent request
* [PostV05ConsentRequestsOnInitRaw](docs/consentflow/README.md#postv05consentrequestsoninitraw) - Response to consent request
* [PostV05ConsentRequestsOnStatusJSON](docs/consentflow/README.md#postv05consentrequestsonstatusjson) - Result of consent request status
* [PostV05ConsentRequestsOnStatusRaw](docs/consentflow/README.md#postv05consentrequestsonstatusraw) - Result of consent request status
* [PostV05ConsentsHiuNotify](docs/consentflow/README.md#postv05consentshiunotify) - Consent notification
* [PostV05ConsentsOnFetchJSON](docs/consentflow/README.md#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [PostV05ConsentsOnFetchRaw](docs/consentflow/README.md#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

### [DataFlow](docs/dataflow/README.md)

* [PostV05HealthInformationHiuOnRequestJSON](docs/dataflow/README.md#postv05healthinformationhiuonrequestjson) - Health information data request
* [PostV05HealthInformationHiuOnRequestRaw](docs/dataflow/README.md#postv05healthinformationhiuonrequestraw) - Health information data request
* [PostV05HealthInformationTransferJSON](docs/dataflow/README.md#postv05healthinformationtransferjson) - health information transfer API
* [PostV05HealthInformationTransferRaw](docs/dataflow/README.md#postv05healthinformationtransferraw) - health information transfer API

### [Identification](docs/identification/README.md)

* [PostV05PatientsOnFindJSON](docs/identification/README.md#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [PostV05PatientsOnFindRaw](docs/identification/README.md#postv05patientsonfindraw) - Identification result for a consent-manager user-id

### [Monitoring](docs/monitoring/README.md)

* [GetV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [Subscriptions](docs/subscriptions/README.md)

* [PostV05SubscriptionRequestsHiuNotifyJSON](docs/subscriptions/README.md#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuNotifyRaw](docs/subscriptions/README.md#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuOnInit](docs/subscriptions/README.md#postv05subscriptionrequestshiuoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [PostV05SubscriptionsHiuNotifyJSON](docs/subscriptions/README.md#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [PostV05SubscriptionsHiuNotifyRaw](docs/subscriptions/README.md#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription

### [UserAuth](docs/userauth/README.md)

* [PostV05UsersAuthNotifyJSON](docs/userauth/README.md#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthNotifyRaw](docs/userauth/README.md#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthOnConfirmJSON](docs/userauth/README.md#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnConfirmRaw](docs/userauth/README.md#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnFetchModesJSON](docs/userauth/README.md#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnFetchModesRaw](docs/userauth/README.md#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnInitJSON](docs/userauth/README.md#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [PostV05UsersAuthOnInitRaw](docs/userauth/README.md#postv05usersauthoninitraw) - Response to user authentication initialization from HIP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
