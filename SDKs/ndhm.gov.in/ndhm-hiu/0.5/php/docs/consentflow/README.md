# consentFlow

### Available Operations

* [postV05ConsentRequestsOnInitJson](#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [postV05ConsentsOnFetchJson](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

## postV05ConsentRequestsOnInitJson

Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
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
    $request->authorization = 'voluptatibus';
    $request->consentRequestInitResponse = new ConsentRequestInitResponse();
    $request->consentRequestInitResponse->consentRequest = new ConsentRequestInitResponseConsentRequest();
    $request->consentRequestInitResponse->consentRequest->id = 'f29f0e59-8388-4698-9fe6-05db67aeac46';
    $request->consentRequestInitResponse->error = new Error();
    $request->consentRequestInitResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->consentRequestInitResponse->error->message = 'natus';
    $request->consentRequestInitResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentRequestInitResponse->resp = new RequestReference();
    $request->consentRequestInitResponse->resp->requestId = '280d1ba7-7a89-4ebf-b37a-e4203ce5e6a9';
    $request->consentRequestInitResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-03T16:00:55.670Z');
    $request->xHiuId = 'totam';

    $response = $sdk->consentFlow->postV05ConsentRequestsOnInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsOnInitRaw

Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
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
    $request->authorization = 'similique';
    $request->requestBody = 'alias';
    $request->xHiuId = 'at';

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
    $request->authorization = 'quaerat';
    $request->hiuConsentRequestStatus = new HIUConsentRequestStatus();
    $request->hiuConsentRequestStatus->consentRequest = new HIUConsentRequestStatusConsentRequest();
    $request->hiuConsentRequestStatus->consentRequest->consentArtefacts = [
        new ConsentArtefactReference(),
        new ConsentArtefactReference(),
    ];
    $request->hiuConsentRequestStatus->consentRequest->id = '<consent-request-id>';
    $request->hiuConsentRequestStatus->consentRequest->status = ConsentStatusEnum::DENIED;
    $request->hiuConsentRequestStatus->error = new Error();
    $request->hiuConsentRequestStatus->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuConsentRequestStatus->error->message = 'officiis';
    $request->hiuConsentRequestStatus->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentRequestStatus->resp = new RequestReference();
    $request->hiuConsentRequestStatus->resp->requestId = '2af7a73c-f3be-4453-b870-b326b5a73429';
    $request->hiuConsentRequestStatus->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-30T01:52:29.137Z');
    $request->xHiuId = 'soluta';

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
    $request->authorization = 'dicta';
    $request->requestBody = 'laborum';
    $request->xHiuId = 'totam';

    $response = $sdk->consentFlow->postV05ConsentRequestsOnStatusRaw($request);

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
    $request->authorization = 'incidunt';
    $request->hiuConsentNotificationEvent = new HIUConsentNotificationEvent();
    $request->hiuConsentNotificationEvent->notification = new HIUConsentNotificationEventNotification();
    $request->hiuConsentNotificationEvent->notification->consentArtefacts = [
        new ConsentArtefactReference(),
    ];
    $request->hiuConsentNotificationEvent->notification->consentRequestId = '<consent-request-id>';
    $request->hiuConsentNotificationEvent->notification->status = ConsentStatusEnum::GRANTED;
    $request->hiuConsentNotificationEvent->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentNotificationEvent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-04T17:36:39.068Z');
    $request->xHiuId = 'aliquid';

    $response = $sdk->consentFlow->postV05ConsentsHiuNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsOnFetchJson

Must contain either consent or error. Possible reason of errors are 
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
    $request->authorization = 'quam';
    $request->consentArtefactResponse = new ConsentArtefactResponse();
    $request->consentArtefactResponse->consent = new ConsentArtefactResponseConsent();
    $request->consentArtefactResponse->consent->consentDetail = new ConsentArtefactResponseConsentConsentDetail();
    $request->consentArtefactResponse->consent->consentDetail->careContexts = [
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
        new ConsentArtefactResponseConsentConsentDetailCareContexts(),
    ];
    $request->consentArtefactResponse->consent->consentDetail->consentId = 'd2322715-bf0c-4bb1-a31b-8b90f3443a11';
    $request->consentArtefactResponse->consent->consentDetail->consentManager = new ConsentArtefactResponseConsentConsentDetailConsentManager();
    $request->consentArtefactResponse->consent->consentDetail->consentManager->id = '08e0adcf-4b92-4187-9fce-953f73ef7fbc';
    $request->consentArtefactResponse->consent->consentDetail->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-15T21:16:33.535Z');
    $request->consentArtefactResponse->consent->consentDetail->hiTypes = [
        HITypeEnumEnum::DIAGNOSTIC_REPORT,
        HITypeEnumEnum::PRESCRIPTION,
        HITypeEnumEnum::PRESCRIPTION,
    ];
    $request->consentArtefactResponse->consent->consentDetail->hip = new ConsentArtefactResponseConsentConsentDetailHip();
    $request->consentArtefactResponse->consent->consentDetail->hip->id = 'dd39c0f5-d2cf-4f7c-b0a4-5626d436813f';
    $request->consentArtefactResponse->consent->consentDetail->hiu = new ConsentArtefactResponseConsentConsentDetailHiu();
    $request->consentArtefactResponse->consent->consentDetail->hiu->id = '16d9f5fc-e6c5-4561-86c3-e250fb008c42';
    $request->consentArtefactResponse->consent->consentDetail->patient = new ConsentManagerPatientID();
    $request->consentArtefactResponse->consent->consentDetail->patient->id = 'hinapatel@ndhm';
    $request->consentArtefactResponse->consent->consentDetail->permission = new Permission();
    $request->consentArtefactResponse->consent->consentDetail->permission->accessMode = PermissionAccessModeEnum::STREAM;
    $request->consentArtefactResponse->consent->consentDetail->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T12:32:41.161Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange = new PermissionDateRange();
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T17:52:20.381Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-19T09:22:11.289Z');
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency = new PermissionFrequency();
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->repeats = 245367;
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->unit = PermissionFrequencyUnitEnum::DAY;
    $request->consentArtefactResponse->consent->consentDetail->permission->frequency->value = 420539;
    $request->consentArtefactResponse->consent->consentDetail->purpose = new UsePurpose();
    $request->consentArtefactResponse->consent->consentDetail->purpose->code = 'nobis';
    $request->consentArtefactResponse->consent->consentDetail->purpose->refUri = 'https://sweaty-stripe.info';
    $request->consentArtefactResponse->consent->consentDetail->purpose->text = 'libero';
    $request->consentArtefactResponse->consent->consentDetail->requester = new Requester();
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier = new RequesterIdentifier();
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->system = 'https://www.mciindia.org';
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->type = 'REGNO';
    $request->consentArtefactResponse->consent->consentDetail->requester->identifier->value = 'MH1001';
    $request->consentArtefactResponse->consent->consentDetail->requester->name = 'Dr. Manju';
    $request->consentArtefactResponse->consent->consentDetail->schemaVersion = 'quasi';
    $request->consentArtefactResponse->consent->signature = 'Signature of CM as defined in W3C standards; Base64 encoded';
    $request->consentArtefactResponse->consent->status = ConsentStatusEnum::EXPIRED;
    $request->consentArtefactResponse->error = new Error();
    $request->consentArtefactResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->consentArtefactResponse->error->message = 'explicabo';
    $request->consentArtefactResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentArtefactResponse->resp = new RequestReference();
    $request->consentArtefactResponse->resp->requestId = '90747477-8a7b-4d46-ad28-c10ab3cdca42';
    $request->consentArtefactResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-06T12:02:05.098Z');
    $request->xHiuId = 'cupiditate';

    $response = $sdk->consentFlow->postV05ConsentsOnFetchJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsOnFetchRaw

Must contain either consent or error. Possible reason of errors are 
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
    $request->authorization = 'consequatur';
    $request->requestBody = 'tempora';
    $request->xHiuId = 'debitis';

    $response = $sdk->consentFlow->postV05ConsentsOnFetchRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
