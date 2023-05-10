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
use \OpenAPI\OpenAPI\Models\Operations\PostV05CareContextsDiscoverJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientDiscoveryRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientDiscoveryRequestPatient;
use \OpenAPI\OpenAPI\Models\Shared\PatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05CareContextsDiscoverJsonRequest();
    $request->authorization = 'corrupti';
    $request->patientDiscoveryRequest = new PatientDiscoveryRequest();
    $request->patientDiscoveryRequest->patient = new PatientDiscoveryRequestPatient();
    $request->patientDiscoveryRequest->patient->gender = PatientGenderEnum::O;
    $request->patientDiscoveryRequest->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientDiscoveryRequest->patient->name = 'chandler bing';
    $request->patientDiscoveryRequest->patient->unverifiedIdentifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->verifiedIdentifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->yearOfBirth = 2000;
    $request->patientDiscoveryRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->patientDiscoveryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T16:47:33.722Z');
    $request->patientDiscoveryRequest->transactionId = '8d69a674-e0f4-467c-8879-6ed151a05dfc';
    $request->xHipId = 'odit';

    $response = $sdk->cmFacing->postV05CareContextsDiscoverJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cmFacing](docs/cmfacing/README.md)

* [postV05CareContextsDiscoverJson](docs/cmfacing/README.md#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](docs/cmfacing/README.md#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [postV05CareContextsOnDiscoverJson](docs/cmfacing/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](docs/cmfacing/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [postV05ConsentRequestsOnInitJson](docs/cmfacing/README.md#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](docs/cmfacing/README.md#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](docs/cmfacing/README.md#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](docs/cmfacing/README.md#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentsHipNotifyJson](docs/cmfacing/README.md#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](docs/cmfacing/README.md#postv05consentshipnotifyraw) - Consent notification
* [postV05ConsentsHiuNotify](docs/cmfacing/README.md#postv05consentshiunotify) - Consent notification
* [postV05ConsentsOnFetchJson](docs/cmfacing/README.md#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](docs/cmfacing/README.md#postv05consentsonfetchraw) - Result of fetch request for a consent artefact
* [postV05HealthInformationCmOnRequestJson](docs/cmfacing/README.md#postv05healthinformationcmonrequestjson) - Health information data request
* [postV05HealthInformationCmOnRequestRaw](docs/cmfacing/README.md#postv05healthinformationcmonrequestraw) - Health information data request
* [postV05HealthInformationHipRequestJson](docs/cmfacing/README.md#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](docs/cmfacing/README.md#postv05healthinformationhiprequestraw) - Health information data request
* [postV05LinksLinkConfirmJson](docs/cmfacing/README.md#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](docs/cmfacing/README.md#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](docs/cmfacing/README.md#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](docs/cmfacing/README.md#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](docs/cmfacing/README.md#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](docs/cmfacing/README.md#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [postV05PatientsOnFindJson](docs/cmfacing/README.md#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](docs/cmfacing/README.md#postv05patientsonfindraw) - Identification result for a consent-manager user-id
* [postV05PatientsProfileShareJson](docs/cmfacing/README.md#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](docs/cmfacing/README.md#postv05patientsprofileshareraw) - Share patient profile details
* [postV05PatientsSmsOnNotifyJson](docs/cmfacing/README.md#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](docs/cmfacing/README.md#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05SubscriptionRequestsCmOnInit](docs/cmfacing/README.md#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionRequestsHiuNotifyJson](docs/cmfacing/README.md#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](docs/cmfacing/README.md#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionsHiuNotifyJson](docs/cmfacing/README.md#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](docs/cmfacing/README.md#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
* [postV05UsersAuthNotifyJson](docs/cmfacing/README.md#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](docs/cmfacing/README.md#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](docs/cmfacing/README.md#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](docs/cmfacing/README.md#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](docs/cmfacing/README.md#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](docs/cmfacing/README.md#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](docs/cmfacing/README.md#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](docs/cmfacing/README.md#postv05usersauthoninitraw) - Response to user authentication initialization from HIP

### [consentFlow](docs/consentflow/README.md)

* [postV05ConsentRequestsInitJson](docs/consentflow/README.md#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](docs/consentflow/README.md#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsOnInitJson](docs/consentflow/README.md#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](docs/consentflow/README.md#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](docs/consentflow/README.md#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](docs/consentflow/README.md#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentRequestsStatusJson](docs/consentflow/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](docs/consentflow/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](docs/consentflow/README.md#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHipNotifyJson](docs/consentflow/README.md#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](docs/consentflow/README.md#postv05consentshipnotifyraw) - Consent notification
* [postV05ConsentsHipOnNotifyJson](docs/consentflow/README.md#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](docs/consentflow/README.md#postv05consentshiponnotifyraw) - Consent notification
* [postV05ConsentsHiuNotify](docs/consentflow/README.md#postv05consentshiunotify) - Consent notification
* [postV05ConsentsHiuOnNotify](docs/consentflow/README.md#postv05consentshiuonnotify) - Consent notification
* [postV05ConsentsOnFetchJson](docs/consentflow/README.md#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](docs/consentflow/README.md#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

### [dataFlow](docs/dataflow/README.md)

* [postV05HealthInformationCmOnRequestJson](docs/dataflow/README.md#postv05healthinformationcmonrequestjson) - Health information data request
* [postV05HealthInformationCmOnRequestRaw](docs/dataflow/README.md#postv05healthinformationcmonrequestraw) - Health information data request
* [postV05HealthInformationCmRequestJson](docs/dataflow/README.md#postv05healthinformationcmrequestjson) - Health information data request
* [postV05HealthInformationCmRequestRaw](docs/dataflow/README.md#postv05healthinformationcmrequestraw) - Health information data request
* [postV05HealthInformationHipOnRequestJson](docs/dataflow/README.md#postv05healthinformationhiponrequestjson) - Health information data request
* [postV05HealthInformationHipOnRequestRaw](docs/dataflow/README.md#postv05healthinformationhiponrequestraw) - Health information data request
* [postV05HealthInformationHipRequestJson](docs/dataflow/README.md#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](docs/dataflow/README.md#postv05healthinformationhiprequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](docs/dataflow/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](docs/dataflow/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow

### [discovery](docs/discovery/README.md)

* [postV05CareContextsDiscoverJson](docs/discovery/README.md#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](docs/discovery/README.md#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [postV05CareContextsOnDiscoverJson](docs/discovery/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](docs/discovery/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

### [hipFacing](docs/hipfacing/README.md)

* [postV05ConsentsHipOnNotifyJson](docs/hipfacing/README.md#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](docs/hipfacing/README.md#postv05consentshiponnotifyraw) - Consent notification
* [postV05HealthInformationHipOnRequestJson](docs/hipfacing/README.md#postv05healthinformationhiponrequestjson) - Health information data request
* [postV05HealthInformationHipOnRequestRaw](docs/hipfacing/README.md#postv05healthinformationhiponrequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](docs/hipfacing/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](docs/hipfacing/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05LinksLinkAddContextsJson](docs/hipfacing/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](docs/hipfacing/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkOnConfirmJson](docs/hipfacing/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](docs/hipfacing/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](docs/hipfacing/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](docs/hipfacing/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request
* [postV05PatientsSmsNotifyJson](docs/hipfacing/README.md#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](docs/hipfacing/README.md#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05UsersAuthConfirmJson](docs/hipfacing/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](docs/hipfacing/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](docs/hipfacing/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/hipfacing/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](docs/hipfacing/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](docs/hipfacing/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](docs/hipfacing/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](docs/hipfacing/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

### [hiuFacing](docs/hiufacing/README.md)

* [postV05ConsentRequestsInitJson](docs/hiufacing/README.md#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](docs/hiufacing/README.md#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsStatusJson](docs/hiufacing/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](docs/hiufacing/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](docs/hiufacing/README.md#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHiuOnNotify](docs/hiufacing/README.md#postv05consentshiuonnotify) - Consent notification
* [postV05HealthInformationCmRequestJson](docs/hiufacing/README.md#postv05healthinformationcmrequestjson) - Health information data request
* [postV05HealthInformationCmRequestRaw](docs/hiufacing/README.md#postv05healthinformationcmrequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](docs/hiufacing/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](docs/hiufacing/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05PatientsFindJson](docs/hiufacing/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](docs/hiufacing/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [postV05SubscriptionRequestsCmInitJson](docs/hiufacing/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](docs/hiufacing/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsHiuOnNotify](docs/hiufacing/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuOnNotify](docs/hiufacing/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [postV05UsersAuthConfirmJson](docs/hiufacing/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](docs/hiufacing/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](docs/hiufacing/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/hiufacing/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](docs/hiufacing/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](docs/hiufacing/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](docs/hiufacing/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](docs/hiufacing/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

### [identification](docs/identification/README.md)

* [postV05PatientsFindJson](docs/identification/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](docs/identification/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [postV05PatientsOnFindJson](docs/identification/README.md#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](docs/identification/README.md#postv05patientsonfindraw) - Identification result for a consent-manager user-id

### [link](docs/link/README.md)

* [postV05LinksLinkAddContextsJson](docs/link/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](docs/link/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkConfirmJson](docs/link/README.md#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](docs/link/README.md#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](docs/link/README.md#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](docs/link/README.md#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](docs/link/README.md#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](docs/link/README.md#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnConfirmJson](docs/link/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](docs/link/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](docs/link/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](docs/link/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request

### [monitoring](docs/monitoring/README.md)

* [getV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [patientNotification](docs/patientnotification/README.md)

* [postV05PatientsSmsNotifyJson](docs/patientnotification/README.md#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](docs/patientnotification/README.md#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsOnNotifyJson](docs/patientnotification/README.md#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](docs/patientnotification/README.md#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

### [profile](docs/profile/README.md)

* [postV05PatientsProfileOnShareJson](docs/profile/README.md#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](docs/profile/README.md#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [postV05PatientsProfileShareJson](docs/profile/README.md#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](docs/profile/README.md#postv05patientsprofileshareraw) - Share patient profile details

### [services](docs/services/README.md)

* [getV05HiServicesServiceId](docs/services/README.md#getv05hiservicesserviceid) - Get bridge service details/profile by the serviceId provided.

### [sessions](docs/sessions/README.md)

* [getV05WellKnownOpenidConfiguration](docs/sessions/README.md#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](docs/sessions/README.md#getv05certs) - Get certs for JWT verification
* [postV05SessionsJson](docs/sessions/README.md#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](docs/sessions/README.md#postv05sessionsraw) - Get access token

### [subscriptions](docs/subscriptions/README.md)

* [postV05SubscriptionRequestsCmInitJson](docs/subscriptions/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](docs/subscriptions/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsCmOnInit](docs/subscriptions/README.md#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionRequestsHiuNotifyJson](docs/subscriptions/README.md#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](docs/subscriptions/README.md#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuNotifyJson](docs/subscriptions/README.md#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](docs/subscriptions/README.md#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### [userAuth](docs/userauth/README.md)

* [postV05UsersAuthConfirmJson](docs/userauth/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](docs/userauth/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](docs/userauth/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/userauth/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](docs/userauth/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](docs/userauth/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthNotifyJson](docs/userauth/README.md#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](docs/userauth/README.md#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](docs/userauth/README.md#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](docs/userauth/README.md#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](docs/userauth/README.md#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](docs/userauth/README.md#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](docs/userauth/README.md#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](docs/userauth/README.md#postv05usersauthoninitraw) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnNotifyJson](docs/userauth/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](docs/userauth/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
