# consentFlow

### Available Operations

* [postV05ConsentRequestsInitJson](#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsOnInitJson](#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentRequestsStatusJson](#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHipNotifyJson](#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification
* [postV05ConsentsHipOnNotifyJson](#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [postV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [postV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification
* [postV05ConsentsOnFetchJson](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

## postV05ConsentRequestsInitJson

Creates a consent request to get data about a patient by HIU user.

### Example Usage

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
    $request->authorization = 'quae';
    $request->consentRequest = new ConsentRequest();
    $request->consentRequest->consent = new ConsentRequestConsent();
    $request->consentRequest->consent->careContexts = [
        new CareContextDefinition(),
        new CareContextDefinition(),
        new CareContextDefinition(),
        new CareContextDefinition(),
    ];
    $request->consentRequest->consent->hiTypes = [
        HITypeEnumEnum::PRESCRIPTION,
        HITypeEnumEnum::PRESCRIPTION,
        HITypeEnumEnum::PRESCRIPTION,
    ];
    $request->consentRequest->consent->hip = new ConsentRequestConsentHip();
    $request->consentRequest->consent->hip->id = '4a3e865e-7956-4f92-91a5-a9da660ff57b';
    $request->consentRequest->consent->hiu = new ConsentRequestConsentHiu();
    $request->consentRequest->consent->hiu->id = 'faad4f9e-fc1b-4451-ac10-32648dc2f615';
    $request->consentRequest->consent->patient = new ConsentRequestConsentPatient();
    $request->consentRequest->consent->patient->id = 'hinapatel79@ndhm';
    $request->consentRequest->consent->permission = new Permission();
    $request->consentRequest->consent->permission->accessMode = PermissionAccessModeEnum::VIEW;
    $request->consentRequest->consent->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-27T12:32:54.445Z');
    $request->consentRequest->consent->permission->dateRange = new PermissionDateRange();
    $request->consentRequest->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-06T18:56:18.922Z');
    $request->consentRequest->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-16T06:36:28.349Z');
    $request->consentRequest->consent->permission->frequency = new PermissionFrequency();
    $request->consentRequest->consent->permission->frequency->repeats = 52508;
    $request->consentRequest->consent->permission->frequency->unit = PermissionFrequencyUnitEnum::YEAR;
    $request->consentRequest->consent->permission->frequency->value = 596211;
    $request->consentRequest->consent->purpose = new UsePurpose();
    $request->consentRequest->consent->purpose->code = 'maiores';
    $request->consentRequest->consent->purpose->refUri = 'https://icky-seal.info';
    $request->consentRequest->consent->purpose->text = 'dolorem';
    $request->consentRequest->consent->requester = new Requester();
    $request->consentRequest->consent->requester->identifier = new RequesterIdentifier();
    $request->consentRequest->consent->requester->identifier->system = 'https://www.mciindia.org';
    $request->consentRequest->consent->requester->identifier->type = 'REGNO';
    $request->consentRequest->consent->requester->identifier->value = 'MH1001';
    $request->consentRequest->consent->requester->name = 'Dr. Manju';
    $request->consentRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->consentRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T18:38:54.968Z');
    $request->xCmId = 'fuga';

    $response = $sdk->consentFlow->postV05ConsentRequestsInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsInitRaw

Creates a consent request to get data about a patient by HIU user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsInitRawRequest();
    $request->authorization = 'ratione';
    $request->requestBody = 'animi';
    $request->xCmId = 'necessitatibus';

    $response = $sdk->consentFlow->postV05ConsentRequestsInitRaw($request);

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
    $request->authorization = 'nulla';
    $request->consentRequestInitResponse = new ConsentRequestInitResponse();
    $request->consentRequestInitResponse->consentRequest = new ConsentRequestInitResponseConsentRequest();
    $request->consentRequestInitResponse->consentRequest->id = 'f29f0e59-8388-4698-9fe6-05db67aeac46';
    $request->consentRequestInitResponse->error = new Error();
    $request->consentRequestInitResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->consentRequestInitResponse->error->message = 'quasi';
    $request->consentRequestInitResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentRequestInitResponse->resp = new RequestReference();
    $request->consentRequestInitResponse->resp->requestId = '17996312-fde0-4477-9778-ff61d0174763';
    $request->consentRequestInitResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-10T12:17:45.772Z');
    $request->xHiuId = 'laborum';

    $response = $sdk->consentFlow->postV05ConsentRequestsOnInitJson($request);

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
    $request->authorization = 'sunt';
    $request->requestBody = 'nostrum';
    $request->xHiuId = 'fugiat';

    $response = $sdk->consentFlow->postV05ConsentRequestsOnInitRaw($request);

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
    $request->authorization = 'expedita';
    $request->hiuConsentRequestStatus = new HIUConsentRequestStatus();
    $request->hiuConsentRequestStatus->consentRequest = new HIUConsentRequestStatusConsentRequest();
    $request->hiuConsentRequestStatus->consentRequest->consentArtefacts = [
        new ConsentArtefactReference(),
        new ConsentArtefactReference(),
    ];
    $request->hiuConsentRequestStatus->consentRequest->id = '<consent-request-id>';
    $request->hiuConsentRequestStatus->consentRequest->status = ConsentStatusEnum::REQUESTED;
    $request->hiuConsentRequestStatus->error = new Error();
    $request->hiuConsentRequestStatus->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuConsentRequestStatus->error->message = 'aliquid';
    $request->hiuConsentRequestStatus->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentRequestStatus->resp = new RequestReference();
    $request->hiuConsentRequestStatus->resp->requestId = '0659a1ad-eaab-4585-9d6c-645b08b61891';
    $request->hiuConsentRequestStatus->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-02T01:19:33.894Z');
    $request->xHiuId = 'culpa';

    $response = $sdk->consentFlow->postV05ConsentRequestsOnStatusJson($request);

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
    $request->authorization = 'voluptatem';
    $request->requestBody = 'sapiente';
    $request->xHiuId = 'officiis';

    $response = $sdk->consentFlow->postV05ConsentRequestsOnStatusRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsStatusJson

Get status of consent request done previously

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsStatusJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsStatusJsonRequest();
    $request->authorization = 'architecto';
    $request->consentRequestStatusRequest = new ConsentRequestStatusRequest();
    $request->consentRequestStatusRequest->consentRequestId = 'fuga';
    $request->consentRequestStatusRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentRequestStatusRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-30T00:15:31.727Z');
    $request->xCmId = 'voluptatem';

    $response = $sdk->consentFlow->postV05ConsentRequestsStatusJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsStatusRaw

Get status of consent request done previously

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentRequestsStatusRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentRequestsStatusRawRequest();
    $request->authorization = 'alias';
    $request->requestBody = 'deleniti';
    $request->xCmId = 'earum';

    $response = $sdk->consentFlow->postV05ConsentRequestsStatusRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsFetch

Get consent artefact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsFetchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsentFetchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsFetchRequest();
    $request->authorization = 'ex';
    $request->consentFetchRequest = new ConsentFetchRequest();
    $request->consentFetchRequest->consentId = 'sapiente';
    $request->consentFetchRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentFetchRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-29T16:29:01.765Z');
    $request->xCmId = 'nemo';

    $response = $sdk->consentFlow->postV05ConsentsFetch($request);

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
    $request->authorization = 'asperiores';
    $request->hipConsentNotification = new HIPConsentNotification();
    $request->hipConsentNotification->notification = new HIPConsentNotificationNotification();
    $request->hipConsentNotification->notification->consentDetail = new HIPConsentNotificationNotificationConsentDetail();
    $request->hipConsentNotification->notification->consentDetail->careContexts = [
        new HIPConsentNotificationNotificationConsentDetailCareContexts(),
    ];
    $request->hipConsentNotification->notification->consentDetail->consentId = '50d8cdb5-a341-4814-b010-421813d5208e';
    $request->hipConsentNotification->notification->consentDetail->consentManager = new HIPConsentNotificationNotificationConsentDetailConsentManager();
    $request->hipConsentNotification->notification->consentDetail->consentManager->id = 'ce7e253b-6684-451c-ac6e-205e16deab3f';
    $request->hipConsentNotification->notification->consentDetail->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-21T14:03:25.932Z');
    $request->hipConsentNotification->notification->consentDetail->hiTypes = [
        HITypeEnumEnum::PRESCRIPTION,
        HITypeEnumEnum::PRESCRIPTION,
        HITypeEnumEnum::DISCHARGE_SUMMARY,
    ];
    $request->hipConsentNotification->notification->consentDetail->hip = new HIPConsentNotificationNotificationConsentDetailHIP();
    $request->hipConsentNotification->notification->consentDetail->hip->id = 'a6458427-3a84-418d-9623-09fb0929921a';
    $request->hipConsentNotification->notification->consentDetail->patient = new ConsentManagerPatientID();
    $request->hipConsentNotification->notification->consentDetail->patient->id = 'hinapatel79@ndhm';
    $request->hipConsentNotification->notification->consentDetail->permission = new Permission();
    $request->hipConsentNotification->notification->consentDetail->permission->accessMode = PermissionAccessModeEnum::STREAM;
    $request->hipConsentNotification->notification->consentDetail->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-04T00:22:56.189Z');
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange = new PermissionDateRange();
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-25T12:50:51.842Z');
    $request->hipConsentNotification->notification->consentDetail->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T17:06:44.946Z');
    $request->hipConsentNotification->notification->consentDetail->permission->frequency = new PermissionFrequency();
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->repeats = 802692;
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->unit = PermissionFrequencyUnitEnum::WEEK;
    $request->hipConsentNotification->notification->consentDetail->permission->frequency->value = 836364;
    $request->hipConsentNotification->notification->consentDetail->purpose = new UsePurpose();
    $request->hipConsentNotification->notification->consentDetail->purpose->code = 'quos';
    $request->hipConsentNotification->notification->consentDetail->purpose->refUri = 'http://vigilant-harvest.name';
    $request->hipConsentNotification->notification->consentDetail->purpose->text = 'earum';
    $request->hipConsentNotification->notification->consentDetail->schemaVersion = 'modi';
    $request->hipConsentNotification->notification->consentId = 'be056013-f59d-4a75-ba59-ecfef66ef1ca';
    $request->hipConsentNotification->notification->signature = 'Signature of CM as defined in W3C standards; Base64 encoded';
    $request->hipConsentNotification->notification->status = ConsentStatusEnum::REQUESTED;
    $request->hipConsentNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipConsentNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T14:46:04.624Z');
    $request->xHipId = 'atque';

    $response = $sdk->consentFlow->postV05ConsentsHipNotifyJson($request);

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
    $request->authorization = 'ipsum';
    $request->requestBody = 'impedit';
    $request->xHipId = 'magni';

    $response = $sdk->consentFlow->postV05ConsentsHipNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHipOnNotifyJson

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHipOnNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPConsentNotificationResponse;
use \OpenAPI\OpenAPI\Models\Shared\ConsentAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\ConsentAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHipOnNotifyJsonRequest();
    $request->authorization = 'soluta';
    $request->hipConsentNotificationResponse = new HIPConsentNotificationResponse();
    $request->hipConsentNotificationResponse->acknowledgement = new ConsentAcknowledgement();
    $request->hipConsentNotificationResponse->acknowledgement->consentId = '<consent-artefact-id>';
    $request->hipConsentNotificationResponse->acknowledgement->status = ConsentAcknowledgementStatusEnum::UNKNOWN;
    $request->hipConsentNotificationResponse->error = new Error();
    $request->hipConsentNotificationResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hipConsentNotificationResponse->error->message = 'dolore';
    $request->hipConsentNotificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipConsentNotificationResponse->resp = new RequestReference();
    $request->hipConsentNotificationResponse->resp->requestId = '77373c8d-72f6-44d1-9b1f-2c4310661e96';
    $request->hipConsentNotificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-19T07:24:19.034Z');
    $request->xCmId = 'perspiciatis';

    $response = $sdk->consentFlow->postV05ConsentsHipOnNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHipOnNotifyRaw

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHipOnNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHipOnNotifyRawRequest();
    $request->authorization = 'earum';
    $request->requestBody = 'dicta';
    $request->xCmId = 'impedit';

    $response = $sdk->consentFlow->postV05ConsentsHipOnNotifyRaw($request);

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
    $request->authorization = 'voluptatibus';
    $request->hiuConsentNotificationEvent = new HIUConsentNotificationEvent();
    $request->hiuConsentNotificationEvent->notification = new HIUConsentNotificationEventNotification();
    $request->hiuConsentNotificationEvent->notification->consentArtefacts = [
        new ConsentArtefactReference(),
        new ConsentArtefactReference(),
        new ConsentArtefactReference(),
    ];
    $request->hiuConsentNotificationEvent->notification->consentRequestId = '<consent-request-id>';
    $request->hiuConsentNotificationEvent->notification->status = ConsentStatusEnum::REVOKED;
    $request->hiuConsentNotificationEvent->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentNotificationEvent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T23:51:31.143Z');
    $request->xHiuId = 'itaque';

    $response = $sdk->consentFlow->postV05ConsentsHiuNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05ConsentsHiuOnNotifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUConsentNotificationResponse;
use \OpenAPI\OpenAPI\Models\Shared\ConsentAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\ConsentAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05ConsentsHiuOnNotifyRequest();
    $request->authorization = 'velit';
    $request->hiuConsentNotificationResponse = new HIUConsentNotificationResponse();
    $request->hiuConsentNotificationResponse->acknowledgement = [
        new ConsentAcknowledgement(),
        new ConsentAcknowledgement(),
        new ConsentAcknowledgement(),
    ];
    $request->hiuConsentNotificationResponse->error = new Error();
    $request->hiuConsentNotificationResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuConsentNotificationResponse->error->message = 'dolor';
    $request->hiuConsentNotificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentNotificationResponse->resp = new RequestReference();
    $request->hiuConsentNotificationResponse->resp->requestId = '7000ae6b-6bc9-4b8f-b59e-ac55a9741d31';
    $request->hiuConsentNotificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T11:04:29.234Z');
    $request->xCmId = 'ad';

    $response = $sdk->consentFlow->postV05ConsentsHiuOnNotify($request);

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
    $request->authorization = 'qui';
    $request->consentArtefactResponse = new ConsentArtefactResponse();
    $request->consentArtefactResponse->consent = new ConsentArtefactResponseConsent();
    $request->consentArtefactResponse->consent->consentDetail = new ConsentArtefactResponseConsentConsentDetail();
    $request->consentArtefactResponse->consent->consentDetail->careContexts = [
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
    ];
    $request->consentArtefactResponse->consent->consentDetail->consentId = '65bb8a72-0261-4143-9e13-9dbc2259b1ab';
    $request->consentArtefactResponse->consent->consentDetail->consentManager = new ConsentArtefactResponseConsentConsentDetailConsentManager();
    $request->consentArtefactResponse->consent->consentDetail->consentManager->id = 'da8c070e-1084-4cb0-a72d-1ad879eeb966';
    $request->consentArtefactResponse->consent->consentDetail->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T10:08:34.555Z');
    $request->consentArtefactResponse->consent->consentDetail->hiTypes = [
        HITypeEnumEnum::PRESCRIPTION,
        HITypeEnumEnum::DIAGNOSTIC_REPORT,
        HITypeEnumEnum::DIAGNOSTIC_REPORT,
    ];
    $request->consentArtefactResponse->consent->consentDetail->hip = new ConsentArtefactResponseConsentConsentDetailHip();
    $request->consentArtefactResponse->consent->consentDetail->hip->id = 'bd02bae0-be2d-4782-a59e-3ea4b5197f92';
    $request->consentArtefactResponse->consent->consentDetail->hiu = new ConsentArtefactResponseConsentConsentDetailHiu();
    $request->consentArtefactResponse->consent->consentDetail->hiu->id = '443da7ce-52b8-495c-937c-6454efb0b348';
    $request->consentArtefactResponse->consent->consentDetail->patient = new ConsentManagerPatientID();
    $request->consentArtefactResponse->consent->consentDetail->patient->id = 'hinapatel79@ndhm';
    $request->consentArtefactResponse->consent->consentDetail->permission = new Permission();
    $request->consentArtefactResponse->consent->consentDetail->permission->accessMode = PermissionAccessModeEnum::QUERY;
    $request->consentArtefactResponse->consent->consentDetail->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T14:23:17.198Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange = new PermissionDateRange();
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T14:37:42.020Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T11:49:33.998Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency = new PermissionFrequency();
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->repeats = 669237;
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->unit = PermissionFrequencyUnitEnum::MONTH;
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->value = 963741;
    $request->consentArtefactResponse->consent->consentDetail->purpose = new UsePurpose();
    $request->consentArtefactResponse->consent->consentDetail->purpose->code = 'tempore';
    $request->consentArtefactResponse->consent->consentDetail->purpose->refUri = 'https://conventional-yurt.org';
    $request->consentArtefactResponse->consent->consentDetail->purpose->text = 'nemo';
    $request->consentArtefactResponse->consent->consentDetail->requester = new Requester();
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier = new RequesterIdentifier();
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->system = 'https://www.mciindia.org';
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->type = 'REGNO';
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->value = 'MH1001';
    $request->consentArtefactResponse->consent->consentDetail->requester->name = 'Dr. Manju';
    $request->consentArtefactResponse->consent->consentDetail->schemaVersion = 'reprehenderit';
    $request->consentArtefactResponse->consent->signature = 'Signature of CM as defined in W3C standards; Base64 encoded';
    $request->consentArtefactResponse->consent->status = ConsentStatusEnum::GRANTED;
    $request->consentArtefactResponse->error = new Error();
    $request->consentArtefactResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->consentArtefactResponse->error->message = 'minima';
    $request->consentArtefactResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentArtefactResponse->resp = new RequestReference();
    $request->consentArtefactResponse->resp->requestId = '77929177-deac-4646-acb5-73409e3eb1e5';
    $request->consentArtefactResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-25T23:28:51.951Z');
    $request->xHiuId = 'nam';

    $response = $sdk->consentFlow->postV05ConsentsOnFetchJson($request);

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
    $request->authorization = 'dicta';
    $request->requestBody = 'consequuntur';
    $request->xHiuId = 'necessitatibus';

    $response = $sdk->consentFlow->postV05ConsentsOnFetchRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
