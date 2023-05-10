# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->gateway->getV05WellKnownOpenidConfiguration();

    if ($response->openIdConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [gateway](docs/gateway/README.md)

* [getV05WellKnownOpenidConfiguration](docs/gateway/README.md#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](docs/gateway/README.md#getv05certs) - Get certs for JWT verification
* [postV05ConsentRequestsInitJson](docs/gateway/README.md#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](docs/gateway/README.md#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsStatusJson](docs/gateway/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](docs/gateway/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](docs/gateway/README.md#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHiuOnNotify](docs/gateway/README.md#postv05consentshiuonnotify) - Consent notification
* [postV05HealthInformationCmRequestJson](docs/gateway/README.md#postv05healthinformationcmrequestjson) - Health information data request
* [postV05HealthInformationCmRequestRaw](docs/gateway/README.md#postv05healthinformationcmrequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](docs/gateway/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](docs/gateway/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05PatientsFindJson](docs/gateway/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](docs/gateway/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [postV05SessionsJson](docs/gateway/README.md#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](docs/gateway/README.md#postv05sessionsraw) - Get access token
* [postV05SubscriptionRequestsCmInitJson](docs/gateway/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](docs/gateway/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsHiuOnNotify](docs/gateway/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuOnNotify](docs/gateway/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [postV05UsersAuthConfirmJson](docs/gateway/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](docs/gateway/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](docs/gateway/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/gateway/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](docs/gateway/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](docs/gateway/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](docs/gateway/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](docs/gateway/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

### [consentFlow](docs/consentflow/README.md)

* [postV05ConsentRequestsOnInitJson](docs/consentflow/README.md#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](docs/consentflow/README.md#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](docs/consentflow/README.md#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](docs/consentflow/README.md#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentsHiuNotify](docs/consentflow/README.md#postv05consentshiunotify) - Consent notification
* [postV05ConsentsOnFetchJson](docs/consentflow/README.md#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](docs/consentflow/README.md#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

### [dataFlow](docs/dataflow/README.md)

* [postV05HealthInformationHiuOnRequestJson](docs/dataflow/README.md#postv05healthinformationhiuonrequestjson) - Health information data request
* [postV05HealthInformationHiuOnRequestRaw](docs/dataflow/README.md#postv05healthinformationhiuonrequestraw) - Health information data request
* [postV05HealthInformationTransferJson](docs/dataflow/README.md#postv05healthinformationtransferjson) - health information transfer API
* [postV05HealthInformationTransferRaw](docs/dataflow/README.md#postv05healthinformationtransferraw) - health information transfer API

### [identification](docs/identification/README.md)

* [postV05PatientsOnFindJson](docs/identification/README.md#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](docs/identification/README.md#postv05patientsonfindraw) - Identification result for a consent-manager user-id

### [monitoring](docs/monitoring/README.md)

* [getV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [subscriptions](docs/subscriptions/README.md)

* [postV05SubscriptionRequestsHiuNotifyJson](docs/subscriptions/README.md#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](docs/subscriptions/README.md#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuOnInit](docs/subscriptions/README.md#postv05subscriptionrequestshiuoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionsHiuNotifyJson](docs/subscriptions/README.md#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](docs/subscriptions/README.md#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription

### [userAuth](docs/userauth/README.md)

* [postV05UsersAuthNotifyJson](docs/userauth/README.md#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](docs/userauth/README.md#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](docs/userauth/README.md#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](docs/userauth/README.md#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](docs/userauth/README.md#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](docs/userauth/README.md#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](docs/userauth/README.md#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](docs/userauth/README.md#postv05usersauthoninitraw) - Response to user authentication initialization from HIP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
