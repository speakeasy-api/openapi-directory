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
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestConsent;
use \OpenAPI\OpenAPI\Models\Shared\CareContextDefinition;
use \OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestConsentHip;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestConsentHiu;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestConsentPatient;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Shared\PermissionAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionDateRange;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequency;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequencyUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsePurpose;
use \OpenAPI\OpenAPI\Models\Shared\Requester;
use \OpenAPI\OpenAPI\Models\Shared\RequesterIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsInitJsonRequest();
    $request->authorization = 'corrupti';
    $request->consentRequest = new ConsentRequest();
    $request->consentRequest->consent = new ConsentRequestConsent();
    $request->consentRequest->consent->careContexts = [
        new CareContextDefinition(),
        new CareContextDefinition(),
        new CareContextDefinition(),
    ];
    $request->consentRequest->consent->hiTypes = [
        HITypeEnumEnum::DIAGNOSTIC_REPORT,
        HITypeEnumEnum::DISCHARGE_SUMMARY,
        HITypeEnumEnum::DIAGNOSTIC_REPORT,
    ];
    $request->consentRequest->consent->hip = new ConsentRequestConsentHip();
    $request->consentRequest->consent->hip->id = '8d69a674-e0f4-467c-8879-6ed151a05dfc';
    $request->consentRequest->consent->hiu = new ConsentRequestConsentHiu();
    $request->consentRequest->consent->hiu->id = '2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392';
    $request->consentRequest->consent->patient = new ConsentRequestConsentPatient();
    $request->consentRequest->consent->patient->id = 'hinapatel79@ndhm';
    $request->consentRequest->consent->permission = new Permission();
    $request->consentRequest->consent->permission->accessMode = PermissionAccessModeEnum::VIEW;
    $request->consentRequest->consent->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T13:30:46.463Z');
    $request->consentRequest->consent->permission->dateRange = new PermissionDateRange();
    $request->consentRequest->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T14:02:28.908Z');
    $request->consentRequest->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T19:39:29.035Z');
    $request->consentRequest->consent->permission->frequency = new PermissionFrequency();
    $request->consentRequest->consent->permission->frequency->repeats = 386489;
    $request->consentRequest->consent->permission->frequency->unit = PermissionFrequencyUnitEnum::YEAR;
    $request->consentRequest->consent->permission->frequency->value = 902599;
    $request->consentRequest->consent->purpose = new UsePurpose();
    $request->consentRequest->consent->purpose->code = 'fuga';
    $request->consentRequest->consent->purpose->refUri = 'http://grown-opposite.info';
    $request->consentRequest->consent->purpose->text = 'saepe';
    $request->consentRequest->consent->requester = new Requester();
    $request->consentRequest->consent->requester->identifier = new RequesterIdentifier();
    $request->consentRequest->consent->requester->identifier->system = 'https://www.mciindia.org';
    $request->consentRequest->consent->requester->identifier->type = 'REGNO';
    $request->consentRequest->consent->requester->identifier->value = 'MH1001';
    $request->consentRequest->consent->requester->name = 'Dr. Manju';
    $request->consentRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->consentRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T12:36:28.767Z');

    $response = $sdk->consent->postV05ConsentRequestsInitJson($request);

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


### [consent](docs/consent/README.md)

* [postV05ConsentRequestsInitJson](docs/consent/README.md#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](docs/consent/README.md#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsStatusJson](docs/consent/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](docs/consent/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](docs/consent/README.md#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHipOnNotifyJson](docs/consent/README.md#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](docs/consent/README.md#postv05consentshiponnotifyraw) - Consent notification
* [postV05ConsentsHiuOnNotify](docs/consent/README.md#postv05consentshiuonnotify) - Consent notification

### [dataFlow](docs/dataflow/README.md)

* [postV05HealthInformationNotifyJson](docs/dataflow/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](docs/dataflow/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05HealthInformationOnRequestJson](docs/dataflow/README.md#postv05healthinformationonrequestjson) - Health information data request acknowledgement from HIP
* [postV05HealthInformationOnRequestRaw](docs/dataflow/README.md#postv05healthinformationonrequestraw) - Health information data request acknowledgement from HIP
* [postV05HealthInformationRequestJson](docs/dataflow/README.md#postv05healthinformationrequestjson) - Health information data request from HIU
* [postV05HealthInformationRequestRaw](docs/dataflow/README.md#postv05healthinformationrequestraw) - Health information data request from HIU

### [discovery](docs/discovery/README.md)

* [postV05CareContextsOnDiscoverJson](docs/discovery/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](docs/discovery/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

### [hipFacing](docs/hipfacing/README.md)

* [postV05UsersAuthFetchModesJson](docs/hipfacing/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/hipfacing/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthOnNotifyJson](docs/hipfacing/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](docs/hipfacing/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### [hiuFacing](docs/hiufacing/README.md)

* [postV05SubscriptionsHiuOnNotify](docs/hiufacing/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [postV05UsersAuthOnNotifyJson](docs/hiufacing/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](docs/hiufacing/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### [identification](docs/identification/README.md)

* [postV05PatientsFindJson](docs/identification/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](docs/identification/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id

### [link](docs/link/README.md)

* [postV05LinksLinkAddContextsJson](docs/link/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](docs/link/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkOnConfirmJson](docs/link/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](docs/link/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](docs/link/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](docs/link/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request

### [monitoring](docs/monitoring/README.md)

* [getV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [profile](docs/profile/README.md)

* [postV05PatientsProfileOnShareJson](docs/profile/README.md#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](docs/profile/README.md#postv05patientsprofileonshareraw) - Response to patient's share profile request

### [subscriptions](docs/subscriptions/README.md)

* [postV05SubscriptionRequestsCmInitJson](docs/subscriptions/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](docs/subscriptions/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### [userAuth](docs/userauth/README.md)

* [postV05UsersAuthConfirmJson](docs/userauth/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](docs/userauth/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](docs/userauth/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/userauth/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](docs/userauth/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](docs/userauth/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](docs/userauth/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](docs/userauth/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
