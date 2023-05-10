# cmFacing

### Available Operations

* [postV05CareContextsDiscoverJson](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [postV05CareContextsOnDiscoverJson](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [postV05ConsentRequestsOnInitJson](#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentsHipNotifyJson](#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification
* [postV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [postV05ConsentsOnFetchJson](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact
* [postV05HealthInformationCmOnRequestJson](#postv05healthinformationcmonrequestjson) - Health information data request
* [postV05HealthInformationCmOnRequestRaw](#postv05healthinformationcmonrequestraw) - Health information data request
* [postV05HealthInformationHipRequestJson](#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request
* [postV05LinksLinkConfirmJson](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [postV05PatientsOnFindJson](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id
* [postV05PatientsProfileShareJson](#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details
* [postV05PatientsSmsOnNotifyJson](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05SubscriptionRequestsCmOnInit](#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionRequestsHiuNotifyJson](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionsHiuNotifyJson](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
* [postV05UsersAuthNotifyJson](#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](#postv05usersauthoninitraw) - Response to user authentication initialization from HIP

## postV05CareContextsDiscoverJson

Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


### Example Usage

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
    $request->authorization = 'at';
    $request->patientDiscoveryRequest = new PatientDiscoveryRequest();
    $request->patientDiscoveryRequest->patient = new PatientDiscoveryRequestPatient();
    $request->patientDiscoveryRequest->patient->gender = PatientGenderEnum::U;
    $request->patientDiscoveryRequest->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientDiscoveryRequest->patient->name = 'chandler bing';
    $request->patientDiscoveryRequest->patient->unverifiedIdentifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->verifiedIdentifiers = [
        new Identifier(),
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->yearOfBirth = 2000;
    $request->patientDiscoveryRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->patientDiscoveryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-07T00:03:55.328Z');
    $request->patientDiscoveryRequest->transactionId = '78ca1ba9-28fc-4816-b42c-b73920592939';
    $request->xHipId = 'laboriosam';

    $response = $sdk->cmFacing->postV05CareContextsDiscoverJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05CareContextsDiscoverRaw

Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05CareContextsDiscoverRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05CareContextsDiscoverRawRequest();
    $request->authorization = 'hic';
    $request->requestBody = 'saepe';
    $request->xHipId = 'fuga';

    $response = $sdk->cmFacing->postV05CareContextsDiscoverRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05CareContextsOnDiscoverJson

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05CareContextsOnDiscoverJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientDiscoveryResult;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\CareContextRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05CareContextsOnDiscoverJsonRequest();
    $request->authorization = 'in';
    $request->patientDiscoveryResult = new PatientDiscoveryResult();
    $request->patientDiscoveryResult->error = new Error();
    $request->patientDiscoveryResult->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientDiscoveryResult->error->message = 'iste';
    $request->patientDiscoveryResult->patient = new PatientRepresentation();
    $request->patientDiscoveryResult->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientDiscoveryResult->patient->display = 'saepe';
    $request->patientDiscoveryResult->patient->matchedBy = [
        IdentifierTypeEnum::MOBILE,
        IdentifierTypeEnum::MOBILE,
        IdentifierTypeEnum::HEALTH_ID,
    ];
    $request->patientDiscoveryResult->patient->referenceNumber = 'est';
    $request->patientDiscoveryResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientDiscoveryResult->resp = new RequestReference();
    $request->patientDiscoveryResult->resp->requestId = 'aa2352c5-9559-407a-bf1a-3a2fa9467739';
    $request->patientDiscoveryResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T15:03:11.112Z');
    $request->patientDiscoveryResult->transactionId = '1aa52c3f-5ad0-419d-a1ff-e78f097b0074';
    $request->xCmId = 'maiores';

    $response = $sdk->cmFacing->postV05CareContextsOnDiscoverJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05CareContextsOnDiscoverRaw

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05CareContextsOnDiscoverRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05CareContextsOnDiscoverRawRequest();
    $request->authorization = 'dicta';
    $request->requestBody = 'corporis';
    $request->xCmId = 'dolore';

    $response = $sdk->cmFacing->postV05CareContextsOnDiscoverRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsOnInitJson

Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
  Reasons for error may be
  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsOnInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestInitResponse;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestInitResponseConsentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsOnInitJsonRequest();
    $request->authorization = 'iusto';
    $request->consentRequestInitResponse = new ConsentRequestInitResponse();
    $request->consentRequestInitResponse->consentRequest = new ConsentRequestInitResponseConsentRequest();
    $request->consentRequestInitResponse->consentRequest->id = 'f29f0e59-8388-4698-9fe6-05db67aeac46';
    $request->consentRequestInitResponse->error = new Error();
    $request->consentRequestInitResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->consentRequestInitResponse->error->message = 'harum';
    $request->consentRequestInitResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentRequestInitResponse->resp = new RequestReference();
    $request->consentRequestInitResponse->resp->requestId = '5e6e13b9-9d48-48e1-a91e-450ad2abd442';
    $request->consentRequestInitResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-31T22:08:47.731Z');
    $request->xHiuId = 'quos';

    $response = $sdk->cmFacing->postV05ConsentRequestsOnInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsOnInitRaw

Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
  Reasons for error may be
  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsOnInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsOnInitRawRequest();
    $request->authorization = 'perferendis';
    $request->requestBody = 'magni';
    $request->xHiuId = 'assumenda';

    $response = $sdk->cmFacing->postV05ConsentRequestsOnInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsOnStatusJson

Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsOnStatusJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUConsentRequestStatus;
use \OpenAPI\OpenAPI\Models\Shared\HIUConsentRequestStatusConsentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactReference;
use \OpenAPI\OpenAPI\Models\Shared\ConsentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsOnStatusJsonRequest();
    $request->authorization = 'ipsam';
    $request->hiuConsentRequestStatus = new HIUConsentRequestStatus();
    $request->hiuConsentRequestStatus->consentRequest = new HIUConsentRequestStatusConsentRequest();
    $request->hiuConsentRequestStatus->consentRequest->consentArtefacts = [
        new ConsentArtefactReference(),
    ];
    $request->hiuConsentRequestStatus->consentRequest->id = '<consent-request-id>';
    $request->hiuConsentRequestStatus->consentRequest->status = ConsentStatusEnum::GRANTED;
    $request->hiuConsentRequestStatus->error = new Error();
    $request->hiuConsentRequestStatus->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuConsentRequestStatus->error->message = 'excepturi';
    $request->hiuConsentRequestStatus->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentRequestStatus->resp = new RequestReference();
    $request->hiuConsentRequestStatus->resp->requestId = '4bb4f63c-969e-49a3-afa7-7dfb14cd66ae';
    $request->hiuConsentRequestStatus->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-02T20:02:58.167Z');
    $request->xHiuId = 'enim';

    $response = $sdk->cmFacing->postV05ConsentRequestsOnStatusJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsOnStatusRaw

Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsOnStatusRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsOnStatusRawRequest();
    $request->authorization = 'accusamus';
    $request->requestBody = 'delectus';
    $request->xHiuId = 'quidem';

    $response = $sdk->cmFacing->postV05ConsentRequestsOnStatusRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHipNotifyJson

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
  3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHipNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotification;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotification;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotificationConsentDetail;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotificationConsentDetailCareContexts;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotificationConsentDetailConsentManager;
use \OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationNotificationConsentDetailHIP;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Shared\PermissionAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionDateRange;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequency;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequencyUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsePurpose;
use \OpenAPI\OpenAPI\Models\Shared\ConsentStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHipNotifyJsonRequest();
    $request->authorization = 'provident';
    $request->hipConsentNotification = new HIPConsentNotification();
    $request->hipConsentNotification->notification = new HIPConsentNotificationNotification();
    $request->hipConsentNotification->notification->consentDetail = new HIPConsentNotificationNotificationConsentDetail();
    $request->hipConsentNotification->notification->consentDetail->careContexts = [
        new HIPConsentNotificationNotificationConsentDetailCareContexts(),
        new HIPConsentNotificationNotificationConsentDetailCareContexts(),
        new HIPConsentNotificationNotificationConsentDetailCareContexts(),
    ];
    $request->hipConsentNotification->notification->consentDetail->consentId = 'a88f3a66-9970-474b-a446-9b6e21419598';
    $request->hipConsentNotification->notification->consentDetail->consentManager = new HIPConsentNotificationNotificationConsentDetailConsentManager();
    $request->hipConsentNotification->notification->consentDetail->consentManager->id = '90afa563-e251-46fe-8c8b-711e5b7fd2ed';
    $request->hipConsentNotification->notification->consentDetail->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-02T16:33:42.080Z');
    $request->hipConsentNotification->notification->consentDetail->hiTypes = [
        HITypeEnumEnum::DISCHARGE_SUMMARY,
        HITypeEnumEnum::OP_CONSULTATION,
        HITypeEnumEnum::OP_CONSULTATION,
    ];
    $request->hipConsentNotification->notification->consentDetail->hip = new HIPConsentNotificationNotificationConsentDetailHIP();
    $request->hipConsentNotification->notification->consentDetail->hip->id = 'cddc6926-01fb-4576-b0d5-f0d30c5fbb25';
    $request->hipConsentNotification->notification->consentDetail->patient = new ConsentManagerPatientID();
    $request->hipConsentNotification->notification->consentDetail->patient->id = 'hinapatel79@ndhm';
    $request->hipConsentNotification->notification->consentDetail->permission = new Permission();
    $request->hipConsentNotification->notification->consentDetail->permission->accessMode = PermissionAccessModeEnum::QUERY;
    $request->hipConsentNotification->notification->consentDetail->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-12T03:59:56.327Z');
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange = new PermissionDateRange();
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T00:01:48.775Z');
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-25T05:44:55.720Z');
    $request->hipConsentNotification->notification->consentDetail->permission->frequency = new PermissionFrequency();
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->repeats = 170986;
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->unit = PermissionFrequencyUnitEnum::MONTH;
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->value = 463451;
    $request->hipConsentNotification->notification->consentDetail->purpose = new UsePurpose();
    $request->hipConsentNotification->notification->consentDetail->purpose->code = 'dolor';
    $request->hipConsentNotification->notification->consentDetail->purpose->refUri = 'https://grandiose-urge.org';
    $request->hipConsentNotification->notification->consentDetail->purpose->text = 'omnis';
    $request->hipConsentNotification->notification->consentDetail->schemaVersion = 'facilis';
    $request->hipConsentNotification->notification->consentId = '90c28909-b3fe-449a-8d9c-bf48633323f9';
    $request->hipConsentNotification->notification->signature = 'Signature of CM as defined in W3C standards; Base64 encoded';
    $request->hipConsentNotification->notification->status = ConsentStatusEnum::REQUESTED;
    $request->hipConsentNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipConsentNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-05T23:34:50.715Z');
    $request->xHipId = 'reiciendis';

    $response = $sdk->cmFacing->postV05ConsentsHipNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHipNotifyRaw

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
  3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHipNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHipNotifyRawRequest();
    $request->authorization = 'amet';
    $request->requestBody = 'dolorum';
    $request->xHipId = 'numquam';

    $response = $sdk->cmFacing->postV05ConsentsHipNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHiuNotify

Health information user will get notified about the consent request granted or denied, consent revoked, consent expired. 
1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHiuNotifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUConsentNotificationEvent;
use \OpenAPI\OpenAPI\Models\Shared\HIUConsentNotificationEventNotification;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactReference;
use \OpenAPI\OpenAPI\Models\Shared\ConsentStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHiuNotifyRequest();
    $request->authorization = 'veritatis';
    $request->hiuConsentNotificationEvent = new HIUConsentNotificationEvent();
    $request->hiuConsentNotificationEvent->notification = new HIUConsentNotificationEventNotification();
    $request->hiuConsentNotificationEvent->notification->consentArtefacts = [
        new ConsentArtefactReference(),
    ];
    $request->hiuConsentNotificationEvent->notification->consentRequestId = '<consent-request-id>';
    $request->hiuConsentNotificationEvent->notification->status = ConsentStatusEnum::GRANTED;
    $request->hiuConsentNotificationEvent->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentNotificationEvent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T22:32:29.592Z');
    $request->xHiuId = 'quaerat';

    $response = $sdk->cmFacing->postV05ConsentsHiuNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsOnFetchJson

Must contain either consentDetail or error. Possible reason of errors are 
1. consentId passed through /fetch is invalid


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsOnFetchJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponse;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsent;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetail;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailCareContexts;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailConsentManager;
use \OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailHip;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtefactResponseConsentConsentDetailHiu;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;
use \OpenAPI\OpenAPI\Models\Shared\Permission;
use \OpenAPI\OpenAPI\Models\Shared\PermissionAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionDateRange;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequency;
use \OpenAPI\OpenAPI\Models\Shared\PermissionFrequencyUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsePurpose;
use \OpenAPI\OpenAPI\Models\Shared\Requester;
use \OpenAPI\OpenAPI\Models\Shared\RequesterIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ConsentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsOnFetchJsonRequest();
    $request->authorization = 'accusamus';
    $request->consentArtefactResponse = new ConsentArtefactResponse();
    $request->consentArtefactResponse->consent = new ConsentArtefactResponseConsent();
    $request->consentArtefactResponse->consent->consentDetail = new ConsentArtefactResponseConsentConsentDetail();
    $request->consentArtefactResponse->consent->consentDetail->careContexts = [
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
    ];
    $request->consentArtefactResponse->consent->consentDetail->consentId = 'f69280d1-ba77-4a89-abf7-37ae4203ce5e';
    $request->consentArtefactResponse->consent->consentDetail->consentManager = new ConsentArtefactResponseConsentConsentDetailConsentManager();
    $request->consentArtefactResponse->consent->consentDetail->consentManager->id = '6a95d8a0-d446-4ce2-af7a-73cf3be453f8';
    $request->consentArtefactResponse->consent->consentDetail->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-22T15:11:39.695Z');
    $request->consentArtefactResponse->consent->consentDetail->hiTypes = [
        HITypeEnumEnum::OP_CONSULTATION,
        HITypeEnumEnum::OP_CONSULTATION,
        HITypeEnumEnum::PRESCRIPTION,
    ];
    $request->consentArtefactResponse->consent->consentDetail->hip = new ConsentArtefactResponseConsentConsentDetailHip();
    $request->consentArtefactResponse->consent->consentDetail->hip->id = 'b5a73429-cdb1-4a84-a2bb-679d2322715b';
    $request->consentArtefactResponse->consent->consentDetail->hiu = new ConsentArtefactResponseConsentConsentDetailHiu();
    $request->consentArtefactResponse->consent->consentDetail->hiu->id = 'f0cbb1e3-1b8b-490f-b443-a1108e0adcf4';
    $request->consentArtefactResponse->consent->consentDetail->patient = new ConsentManagerPatientID();
    $request->consentArtefactResponse->consent->consentDetail->patient->id = 'hinapatel79@ndhm';
    $request->consentArtefactResponse->consent->consentDetail->permission = new Permission();
    $request->consentArtefactResponse->consent->consentDetail->permission->accessMode = PermissionAccessModeEnum::QUERY;
    $request->consentArtefactResponse->consent->consentDetail->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-21T09:49:15.782Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange = new PermissionDateRange();
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-27T23:25:59.184Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-03T03:16:58.870Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency = new PermissionFrequency();
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->repeats = 977496;
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->unit = PermissionFrequencyUnitEnum::MONTH;
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->value = 876506;
    $request->consentArtefactResponse->consent->consentDetail->purpose = new UsePurpose();
    $request->consentArtefactResponse->consent->consentDetail->purpose->code = 'omnis';
    $request->consentArtefactResponse->consent->consentDetail->purpose->refUri = 'http://eager-vivo.info';
    $request->consentArtefactResponse->consent->consentDetail->purpose->text = 'consectetur';
    $request->consentArtefactResponse->consent->consentDetail->requester = new Requester();
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier = new RequesterIdentifier();
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->system = 'https://www.mciindia.org';
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->type = 'REGNO';
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->value = 'MH1001';
    $request->consentArtefactResponse->consent->consentDetail->requester->name = 'Dr. Manju';
    $request->consentArtefactResponse->consent->consentDetail->schemaVersion = 'vero';
    $request->consentArtefactResponse->consent->signature = 'Signature of CM as defined in W3C standards; Base64 encoded';
    $request->consentArtefactResponse->consent->status = ConsentStatusEnum::REVOKED;
    $request->consentArtefactResponse->error = new Error();
    $request->consentArtefactResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->consentArtefactResponse->error->message = 'hic';
    $request->consentArtefactResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentArtefactResponse->resp = new RequestReference();
    $request->consentArtefactResponse->resp->requestId = 'bc7abd74-dd39-4c0f-9d2c-ff7c70a45626';
    $request->consentArtefactResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T20:43:00.221Z');
    $request->xHiuId = 'ratione';

    $response = $sdk->cmFacing->postV05ConsentsOnFetchJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsOnFetchRaw

Must contain either consentDetail or error. Possible reason of errors are 
1. consentId passed through /fetch is invalid


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsOnFetchRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsOnFetchRawRequest();
    $request->authorization = 'ex';
    $request->requestBody = 'laudantium';
    $request->xHiuId = 'dicta';

    $response = $sdk->cmFacing->postV05ConsentsOnFetchRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationCmOnRequestJson

Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationCmOnRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUHealthInformationRequestResponse;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIUHealthInformationRequestResponseHiRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationCmOnRequestJsonRequest();
    $request->authorization = 'dolor';
    $request->hiuHealthInformationRequestResponse = new HIUHealthInformationRequestResponse();
    $request->hiuHealthInformationRequestResponse->error = new Error();
    $request->hiuHealthInformationRequestResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuHealthInformationRequestResponse->error->message = 'quasi';
    $request->hiuHealthInformationRequestResponse->hiRequest = new HIUHealthInformationRequestResponseHiRequest();
    $request->hiuHealthInformationRequestResponse->hiRequest->sessionStatus = HIUHealthInformationRequestResponseHiRequestSessionStatusEnum::REQUESTED;
    $request->hiuHealthInformationRequestResponse->hiRequest->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuHealthInformationRequestResponse->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuHealthInformationRequestResponse->resp = new RequestReference();
    $request->hiuHealthInformationRequestResponse->resp->requestId = 'd9f5fce6-c556-4146-83e2-50fb008c42e1';
    $request->hiuHealthInformationRequestResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-29T07:04:37.837Z');
    $request->xHiuId = 'dolorum';

    $response = $sdk->cmFacing->postV05HealthInformationCmOnRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationCmOnRequestRaw

Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationCmOnRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationCmOnRequestRawRequest();
    $request->authorization = 'laborum';
    $request->requestBody = 'placeat';
    $request->xHiuId = 'velit';

    $response = $sdk->cmFacing->postV05HealthInformationCmOnRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationHipRequestJson

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHipRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHIRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHIRequestHiRequest;
use \OpenAPI\OpenAPI\Models\Shared\Consent;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\KeyMaterial;
use \OpenAPI\OpenAPI\Models\Shared\KeyObject;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHipRequestJsonRequest();
    $request->authorization = 'eum';
    $request->hiphiRequest = new HIPHIRequest();
    $request->hiphiRequest->hiRequest = new HIPHIRequestHiRequest();
    $request->hiphiRequest->hiRequest->consent = new Consent();
    $request->hiphiRequest->hiRequest->consent->id = '6c8dd6b1-4429-4074-b477-8a7bd466d28c';
    $request->hiphiRequest->hiRequest->dataPushUrl = 'veritatis';
    $request->hiphiRequest->hiRequest->dateRange = new DateRange();
    $request->hiphiRequest->hiRequest->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-05T02:03:02.582Z');
    $request->hiphiRequest->hiRequest->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-03T04:27:44.236Z');
    $request->hiphiRequest->hiRequest->keyMaterial = new KeyMaterial();
    $request->hiphiRequest->hiRequest->keyMaterial->cryptoAlg = 'ECDH';
    $request->hiphiRequest->hiRequest->keyMaterial->curve = 'Curve25519';
    $request->hiphiRequest->hiRequest->keyMaterial->dhPublicKey = new KeyObject();
    $request->hiphiRequest->hiRequest->keyMaterial->dhPublicKey->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-17T05:36:16.683Z');
    $request->hiphiRequest->hiRequest->keyMaterial->dhPublicKey->keyValue = 'quo';
    $request->hiphiRequest->hiRequest->keyMaterial->dhPublicKey->parameters = 'Curve25519/32byte random key';
    $request->hiphiRequest->hiRequest->keyMaterial->nonce = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    $request->hiphiRequest->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiphiRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-25T14:54:59.204Z');
    $request->hiphiRequest->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->xHipId = 'eos';

    $response = $sdk->cmFacing->postV05HealthInformationHipRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationHipRequestRaw

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHipRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHipRequestRawRequest();
    $request->authorization = 'voluptas';
    $request->requestBody = 'ab';
    $request->xHipId = 'cupiditate';

    $response = $sdk->cmFacing->postV05HealthInformationHipRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkConfirmJson

API to submit the token that was sent by HIP during the link request. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkConfirmJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\LinkConfirmationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LinkConfirmationRequestConfirmation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkConfirmJsonRequest();
    $request->authorization = 'consequatur';
    $request->linkConfirmationRequest = new LinkConfirmationRequest();
    $request->linkConfirmationRequest->confirmation = new LinkConfirmationRequestConfirmation();
    $request->linkConfirmationRequest->confirmation->linkRefNumber = 'tempora';
    $request->linkConfirmationRequest->confirmation->token = 'debitis';
    $request->linkConfirmationRequest->requestId = '523c7e0b-c717-48e4-b96f-2a70c688282a';
    $request->linkConfirmationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T08:30:58.411Z');
    $request->xHipId = 'atque';

    $response = $sdk->cmFacing->postV05LinksLinkConfirmJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkConfirmRaw

API to submit the token that was sent by HIP during the link request. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkConfirmRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkConfirmRawRequest();
    $request->authorization = 'explicabo';
    $request->requestBody = 'minima';
    $request->xHipId = 'nisi';

    $response = $sdk->cmFacing->postV05LinksLinkConfirmRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkInitJson

Request from CM to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkReferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientLinkReferenceRequestPatient;
use \OpenAPI\OpenAPI\Models\Shared\CareContext;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkInitJsonRequest();
    $request->authorization = 'fugit';
    $request->patientLinkReferenceRequest = new PatientLinkReferenceRequest();
    $request->patientLinkReferenceRequest->patient = new PatientLinkReferenceRequestPatient();
    $request->patientLinkReferenceRequest->patient->careContexts = [
        new CareContext(),
        new CareContext(),
        new CareContext(),
        new CareContext(),
    ];
    $request->patientLinkReferenceRequest->patient->id = 'hinapatel79@ndhm';
    $request->patientLinkReferenceRequest->patient->referenceNumber = 'TMH-PUID-001';
    $request->patientLinkReferenceRequest->requestId = '222e9817-ee17-4cbe-a1e6-b7b95bc0ab3c';
    $request->patientLinkReferenceRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T10:26:44.811Z');
    $request->patientLinkReferenceRequest->transactionId = 'c4f3789f-d871-4f99-9d2e-fd121aa6f1e6';
    $request->xHipId = 'in';

    $response = $sdk->cmFacing->postV05LinksLinkInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkInitRaw

Request from CM to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkInitRawRequest();
    $request->authorization = 'eius';
    $request->requestBody = 'libero';
    $request->xHipId = 'illum';

    $response = $sdk->cmFacing->postV05LinksLinkInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkOnAddContextsJson

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkOnAddContextsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkResponseAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkResponseAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkOnAddContextsJsonRequest();
    $request->authorization = 'soluta';
    $request->patientCareContextLinkResponse = new PatientCareContextLinkResponse();
    $request->patientCareContextLinkResponse->acknowledgement = new PatientCareContextLinkResponseAcknowledgement();
    $request->patientCareContextLinkResponse->acknowledgement->status = PatientCareContextLinkResponseAcknowledgementStatusEnum::SUCCESS;
    $request->patientCareContextLinkResponse->error = new Error();
    $request->patientCareContextLinkResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientCareContextLinkResponse->error->message = 'aliquam';
    $request->patientCareContextLinkResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientCareContextLinkResponse->resp = new RequestReference();
    $request->patientCareContextLinkResponse->resp->requestId = 'f1575608-2d68-4ea1-9f1d-17051339d080';
    $request->patientCareContextLinkResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-21T23:29:55.837Z');
    $request->xHipId = 'mollitia';

    $response = $sdk->cmFacing->postV05LinksLinkOnAddContextsJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05LinksLinkOnAddContextsRaw

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05LinksLinkOnAddContextsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05LinksLinkOnAddContextsRawRequest();
    $request->authorization = 'ab';
    $request->requestBody = 'corrupti';
    $request->xHipId = 'non';

    $response = $sdk->cmFacing->postV05LinksLinkOnAddContextsRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsOnFindJson

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsOnFindJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationResponse;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationResponsePatient;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsOnFindJsonRequest();
    $request->authorization = 'voluptatem';
    $request->patientIdentificationResponse = new PatientIdentificationResponse();
    $request->patientIdentificationResponse->error = new Error();
    $request->patientIdentificationResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientIdentificationResponse->error->message = 'occaecati';
    $request->patientIdentificationResponse->patient = new PatientIdentificationResponsePatient();
    $request->patientIdentificationResponse->patient->id = 'hinapatel79@ndhm';
    $request->patientIdentificationResponse->patient->name = 'Hina Patel';
    $request->patientIdentificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientIdentificationResponse->resp = new RequestReference();
    $request->patientIdentificationResponse->resp->requestId = '4c26071f-93f5-4f06-82da-c7af515cc413';
    $request->patientIdentificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-04T08:55:11.388Z');

    $response = $sdk->cmFacing->postV05PatientsOnFindJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsOnFindRaw

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsOnFindRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsOnFindRawRequest();
    $request->authorization = 'suscipit';
    $request->requestBody = 'velit';

    $response = $sdk->cmFacing->postV05PatientsOnFindRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsProfileShareJson

Request for sharing patient's profile details to HIP


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileShareJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileRequestPatient;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileRequestPatientUserDemographics;
use \OpenAPI\OpenAPI\Models\Shared\PatientAddress;
use \OpenAPI\OpenAPI\Models\Shared\PatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileShareJsonRequest();
    $request->authorization = 'culpa';
    $request->shareProfileRequest = new ShareProfileRequest();
    $request->shareProfileRequest->patient = new ShareProfileRequestPatient();
    $request->shareProfileRequest->patient->hipCode = '12345 (CounterId)';
    $request->shareProfileRequest->patient->userDemographics = new ShareProfileRequestPatientUserDemographics();
    $request->shareProfileRequest->patient->userDemographics->address = new PatientAddress();
    $request->shareProfileRequest->patient->userDemographics->address->district = 'est';
    $request->shareProfileRequest->patient->userDemographics->address->line = 'recusandae';
    $request->shareProfileRequest->patient->userDemographics->address->pincode = 'totam';
    $request->shareProfileRequest->patient->userDemographics->address->state = 'fugiat';
    $request->shareProfileRequest->patient->userDemographics->dayOfBirth = 424089;
    $request->shareProfileRequest->patient->userDemographics->gender = PatientGenderEnum::F;
    $request->shareProfileRequest->patient->userDemographics->healthId = '<username>@<suffix>';
    $request->shareProfileRequest->patient->userDemographics->healthIdNumber = '1111-1111-1111-11';
    $request->shareProfileRequest->patient->userDemographics->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->shareProfileRequest->patient->userDemographics->monthOfBirth = 427834;
    $request->shareProfileRequest->patient->userDemographics->name = 'Jane Doe';
    $request->shareProfileRequest->patient->userDemographics->yearOfBirth = 2000;
    $request->shareProfileRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->shareProfileRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T18:22:45.108Z');
    $request->xHipId = 'facilis';

    $response = $sdk->cmFacing->postV05PatientsProfileShareJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsProfileShareRaw

Request for sharing patient's profile details to HIP


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileShareRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileShareRawRequest();
    $request->authorization = 'cum';
    $request->requestBody = 'commodi';
    $request->xHipId = 'in';

    $response = $sdk->cmFacing->postV05PatientsProfileShareRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsSmsOnNotifyJson

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsSmsOnNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientSMSNotifcationResponse;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;
use \OpenAPI\OpenAPI\Models\Shared\PatientSMSNotifcationResponseStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsSmsOnNotifyJsonRequest();
    $request->authorization = 'corporis';
    $request->patientSMSNotifcationResponse = new PatientSMSNotifcationResponse();
    $request->patientSMSNotifcationResponse->error = new Error();
    $request->patientSMSNotifcationResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientSMSNotifcationResponse->error->message = 'assumenda';
    $request->patientSMSNotifcationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientSMSNotifcationResponse->resp = new RequestReference();
    $request->patientSMSNotifcationResponse->resp->requestId = '5e60b375-ed4f-46fb-ae41-f33317fe35b6';
    $request->patientSMSNotifcationResponse->status = PatientSMSNotifcationResponseStatusEnum::ACKNOWLEDGED;
    $request->patientSMSNotifcationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-22T20:57:52.942Z');
    $request->xHipId = 'vitae';

    $response = $sdk->cmFacing->postV05PatientsSmsOnNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsSmsOnNotifyRaw

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsSmsOnNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsSmsOnNotifyRawRequest();
    $request->authorization = 'accusamus';
    $request->requestBody = 'similique';
    $request->xHipId = 'tempora';

    $response = $sdk->cmFacing->postV05PatientsSmsOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsCmOnInit

This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsCmOnInitRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestReceipt;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestReceiptSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsCmOnInitRequest();
    $request->authorization = 'aspernatur';
    $request->hiuSubscriptionRequestReceipt = new HIUSubscriptionRequestReceipt();
    $request->hiuSubscriptionRequestReceipt->error = new Error();
    $request->hiuSubscriptionRequestReceipt->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuSubscriptionRequestReceipt->error->message = 'voluptas';
    $request->hiuSubscriptionRequestReceipt->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionRequestReceipt->resp = new RequestReference();
    $request->hiuSubscriptionRequestReceipt->resp->requestId = '55ba3c28-744e-4d53-b88f-3a8d8f5c0b2f';
    $request->hiuSubscriptionRequestReceipt->subscriptionRequest = new HIUSubscriptionRequestReceiptSubscriptionRequest();
    $request->hiuSubscriptionRequestReceipt->subscriptionRequest->id = 'f29f0e59-8388-4698-9fe6-05db67aeac46';
    $request->hiuSubscriptionRequestReceipt->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-03T01:02:56.740Z');
    $request->xHiuId = 'facilis';

    $response = $sdk->cmFacing->postV05SubscriptionRequestsCmOnInit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsHiuNotifyJson

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsHiuNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionApprovalNotification;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionApprovalNotificationNotification;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscription;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionContext;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPeriod;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsHiuNotifyJsonRequest();
    $request->authorization = 'voluptate';
    $request->subscriptionApprovalNotification = new SubscriptionApprovalNotification();
    $request->subscriptionApprovalNotification->notification = new SubscriptionApprovalNotificationNotification();
    $request->subscriptionApprovalNotification->notification->status = SubscriptionStatusEnum::DENIED;
    $request->subscriptionApprovalNotification->notification->subscription = new HIUSubscription();
    $request->subscriptionApprovalNotification->notification->subscription->hiu = new OrganizationRepresentation();
    $request->subscriptionApprovalNotification->notification->subscription->hiu->id = '194a276b-2691-46fe-9f08-f4294e3698f4';
    $request->subscriptionApprovalNotification->notification->subscription->id = 'subscription Id';
    $request->subscriptionApprovalNotification->notification->subscription->patient = new ConsentManagerPatientID();
    $request->subscriptionApprovalNotification->notification->subscription->patient->id = 'hinapatel79@ndhm';
    $request->subscriptionApprovalNotification->notification->subscription->sources = [
        new HIUSubscriptionContext(),
        new HIUSubscriptionContext(),
    ];
    $request->subscriptionApprovalNotification->notification->subscriptionRequestId = 'request id of the subscription';
    $request->subscriptionApprovalNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->subscriptionApprovalNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-11T22:08:32.388Z');
    $request->xHiuId = 'ex';

    $response = $sdk->cmFacing->postV05SubscriptionRequestsHiuNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsHiuNotifyRaw

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsHiuNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsHiuNotifyRawRequest();
    $request->authorization = 'sit';
    $request->requestBody = 'non';
    $request->xHiuId = 'officiis';

    $response = $sdk->cmFacing->postV05SubscriptionRequestsHiuNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionsHiuNotifyJson

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionsHiuNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotification;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotificationEvent;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionEventContent;
use \OpenAPI\OpenAPI\Models\Shared\EventCategoryDetail;
use \OpenAPI\OpenAPI\Models\Shared\CareContextDefinition;
use \OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionsHiuNotifyJsonRequest();
    $request->authorization = 'praesentium';
    $request->hiuSubscriptionNotification = new HIUSubscriptionNotification();
    $request->hiuSubscriptionNotification->event = new HIUSubscriptionNotificationEvent();
    $request->hiuSubscriptionNotification->event->category = SubscriptionCategoryEnum::LINK;
    $request->hiuSubscriptionNotification->event->content = new HIUSubscriptionEventContent();
    $request->hiuSubscriptionNotification->event->content->context = [
        new EventCategoryDetail(),
        new EventCategoryDetail(),
        new EventCategoryDetail(),
    ];
    $request->hiuSubscriptionNotification->event->content->hip = new OrganizationRepresentation();
    $request->hiuSubscriptionNotification->event->content->hip->id = '445e80ca-55ef-4d20-a457-e1858b6a89fb';
    $request->hiuSubscriptionNotification->event->content->patient = new ConsentManagerPatientID();
    $request->hiuSubscriptionNotification->event->content->patient->id = 'hinapatel79@ndhm';
    $request->hiuSubscriptionNotification->event->id = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuSubscriptionNotification->event->published = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-21T14:36:19.485Z');
    $request->hiuSubscriptionNotification->event->subscriptionId = 'subscription Id';
    $request->hiuSubscriptionNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-26T13:26:55.921Z');
    $request->xHiuId = 'officia';

    $response = $sdk->cmFacing->postV05SubscriptionsHiuNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionsHiuNotifyRaw

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionsHiuNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionsHiuNotifyRawRequest();
    $request->authorization = 'dolorum';
    $request->requestBody = 'corrupti';
    $request->xHiuId = 'accusamus';

    $response = $sdk->cmFacing->postV05SubscriptionsHiuNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthNotifyJson

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotification;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAuth;
use \OpenAPI\OpenAPI\Models\Shared\PatientDemographicResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAddress;
use \OpenAPI\OpenAPI\Models\Shared\PatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAuthStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenValidity;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequesterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthNotifyJsonRequest();
    $request->authorization = 'tempora';
    $request->patientAuthNotification = new PatientAuthNotification();
    $request->patientAuthNotification->auth = new PatientAuthNotificationAuth();
    $request->patientAuthNotification->auth->accessToken = 'atque';
    $request->patientAuthNotification->auth->patient = new PatientDemographicResponse();
    $request->patientAuthNotification->auth->patient->address = new PatientAddress();
    $request->patientAuthNotification->auth->patient->address->district = 'fugit';
    $request->patientAuthNotification->auth->patient->address->line = 'ut';
    $request->patientAuthNotification->auth->patient->address->pincode = 'fugiat';
    $request->patientAuthNotification->auth->patient->address->state = 'voluptatem';
    $request->patientAuthNotification->auth->patient->gender = PatientGenderEnum::O;
    $request->patientAuthNotification->auth->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientAuthNotification->auth->patient->identifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientAuthNotification->auth->patient->name = 'Hina Patel';
    $request->patientAuthNotification->auth->patient->yearOfBirth = 2000;
    $request->patientAuthNotification->auth->status = PatientAuthNotificationAuthStatusEnum::GRANTED;
    $request->patientAuthNotification->auth->transactionId = 'consequatur';
    $request->patientAuthNotification->auth->validity = new AccessTokenValidity();
    $request->patientAuthNotification->auth->validity->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T23:19:52.079Z');
    $request->patientAuthNotification->auth->validity->limit = 1;
    $request->patientAuthNotification->auth->validity->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthNotification->auth->validity->requester = new PatientAuthRequester();
    $request->patientAuthNotification->auth->validity->requester->id = '100005';
    $request->patientAuthNotification->auth->validity->requester->type = PatientAuthRequesterTypeEnum::HIU;
    $request->patientAuthNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-26T20:36:25.696Z');
    $request->xHipId = 'corporis';
    $request->xHiuId = 'et';

    $response = $sdk->cmFacing->postV05UsersAuthNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthNotifyRaw

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthNotifyRawRequest();
    $request->authorization = 'blanditiis';
    $request->requestBody = 'ex';
    $request->xHipId = 'sed';
    $request->xHiuId = 'sit';

    $response = $sdk->cmFacing->postV05UsersAuthNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnConfirmJson

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnConfirmJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthConfirmResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthConfirmResponseAuth;
use \OpenAPI\OpenAPI\Models\Shared\PatientDemographicResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAddress;
use \OpenAPI\OpenAPI\Models\Shared\PatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenValidity;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequesterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnConfirmJsonRequest();
    $request->authorization = 'vel';
    $request->patientAuthConfirmResponse = new PatientAuthConfirmResponse();
    $request->patientAuthConfirmResponse->auth = new PatientAuthConfirmResponseAuth();
    $request->patientAuthConfirmResponse->auth->accessToken = 'nostrum';
    $request->patientAuthConfirmResponse->auth->patient = new PatientDemographicResponse();
    $request->patientAuthConfirmResponse->auth->patient->address = new PatientAddress();
    $request->patientAuthConfirmResponse->auth->patient->address->district = 'saepe';
    $request->patientAuthConfirmResponse->auth->patient->address->line = 'error';
    $request->patientAuthConfirmResponse->auth->patient->address->pincode = 'consequatur';
    $request->patientAuthConfirmResponse->auth->patient->address->state = 'incidunt';
    $request->patientAuthConfirmResponse->auth->patient->gender = PatientGenderEnum::U;
    $request->patientAuthConfirmResponse->auth->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientAuthConfirmResponse->auth->patient->identifiers = [
        new Identifier(),
    ];
    $request->patientAuthConfirmResponse->auth->patient->name = 'Hina Patel';
    $request->patientAuthConfirmResponse->auth->patient->yearOfBirth = 2000;
    $request->patientAuthConfirmResponse->auth->validity = new AccessTokenValidity();
    $request->patientAuthConfirmResponse->auth->validity->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T12:52:44.610Z');
    $request->patientAuthConfirmResponse->auth->validity->limit = 1;
    $request->patientAuthConfirmResponse->auth->validity->purpose = PatientAuthPurposeEnum::LINK;
    $request->patientAuthConfirmResponse->auth->validity->requester = new PatientAuthRequester();
    $request->patientAuthConfirmResponse->auth->validity->requester->id = '100005';
    $request->patientAuthConfirmResponse->auth->validity->requester->type = PatientAuthRequesterTypeEnum::HIU;
    $request->patientAuthConfirmResponse->error = new Error();
    $request->patientAuthConfirmResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientAuthConfirmResponse->error->message = 'quidem';
    $request->patientAuthConfirmResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthConfirmResponse->resp = new RequestReference();
    $request->patientAuthConfirmResponse->resp->requestId = '8abf603a-79f9-4dfe-8ab7-da8a50ce187f';
    $request->patientAuthConfirmResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T08:02:14.031Z');
    $request->xHipId = 'quidem';
    $request->xHiuId = 'maxime';

    $response = $sdk->cmFacing->postV05UsersAuthOnConfirmJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnConfirmRaw

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnConfirmRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnConfirmRawRequest();
    $request->authorization = 'et';
    $request->requestBody = 'esse';
    $request->xHipId = 'amet';
    $request->xHiuId = 'assumenda';

    $response = $sdk->cmFacing->postV05UsersAuthOnConfirmRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnFetchModesJson

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnFetchModesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthModeQueryResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthModeQueryResponseAuth;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnFetchModesJsonRequest();
    $request->authorization = 'ea';
    $request->patientAuthModeQueryResponse = new PatientAuthModeQueryResponse();
    $request->patientAuthModeQueryResponse->auth = new PatientAuthModeQueryResponseAuth();
    $request->patientAuthModeQueryResponse->auth->modes = [
        AuthenticationModeEnum::DEMOGRAPHICS,
        AuthenticationModeEnum::AADHAAR_OTP,
        AuthenticationModeEnum::AADHAAR_OTP,
    ];
    $request->patientAuthModeQueryResponse->auth->purpose = PatientAuthPurposeEnum::KYC_AND_LINK;
    $request->patientAuthModeQueryResponse->error = new Error();
    $request->patientAuthModeQueryResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthModeQueryResponse->error->message = 'minima';
    $request->patientAuthModeQueryResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthModeQueryResponse->resp = new RequestReference();
    $request->patientAuthModeQueryResponse->resp->requestId = '26f8d986-e881-4ead-8f0e-1012563f94e2';
    $request->patientAuthModeQueryResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-24T23:56:32.062Z');
    $request->xHipId = 'perspiciatis';
    $request->xHiuId = 'in';

    $response = $sdk->cmFacing->postV05UsersAuthOnFetchModesJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnFetchModesRaw

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnFetchModesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnFetchModesRawRequest();
    $request->authorization = 'adipisci';
    $request->requestBody = 'eveniet';
    $request->xHipId = 'occaecati';
    $request->xHiuId = 'consequuntur';

    $response = $sdk->cmFacing->postV05UsersAuthOnFetchModesRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnInitJson

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthInitResponse;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthInitResponseAuth;
use \OpenAPI\OpenAPI\Models\Shared\AuthMeta;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnInitJsonRequest();
    $request->authorization = 'fugit';
    $request->patientAuthInitResponse = new PatientAuthInitResponse();
    $request->patientAuthInitResponse->auth = new PatientAuthInitResponseAuth();
    $request->patientAuthInitResponse->auth->meta = new AuthMeta();
    $request->patientAuthInitResponse->auth->meta->expiry = '2019-12-30T12:01:55Z';
    $request->patientAuthInitResponse->auth->meta->hint = 'id';
    $request->patientAuthInitResponse->auth->mode = AuthenticationModeEnum::DIRECT;
    $request->patientAuthInitResponse->auth->transactionId = 'reprehenderit';
    $request->patientAuthInitResponse->error = new Error();
    $request->patientAuthInitResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthInitResponse->error->message = 'illo';
    $request->patientAuthInitResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthInitResponse->resp = new RequestReference();
    $request->patientAuthInitResponse->resp->requestId = '5be3e060-807e-42b6-a3ab-8845f0597a60';
    $request->patientAuthInitResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-03T14:34:15.560Z');
    $request->xHipId = 'dolores';
    $request->xHiuId = 'id';

    $response = $sdk->cmFacing->postV05UsersAuthOnInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnInitRaw

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnInitRawRequest();
    $request->authorization = 'minima';
    $request->requestBody = 'dolore';
    $request->xHipId = 'dolorum';
    $request->xHiuId = 'nesciunt';

    $response = $sdk->cmFacing->postV05UsersAuthOnInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
