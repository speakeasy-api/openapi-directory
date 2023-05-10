# consent

### Available Operations

* [postV05ConsentRequestsInitJson](#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsStatusJson](#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHipOnNotifyJson](#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [postV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification

## postV05ConsentRequestsInitJson

Creates a consent request to get data about a patient by HIU user. CM should call Gateway - ***/v0.5/consent-requests/on-init*** API with the consent-request-id

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
    $request->authorization = 'ipsa';
    $request->consentRequest = new ConsentRequest();
    $request->consentRequest->consent = new ConsentRequestConsent();
    $request->consentRequest->consent->careContexts = [
        new CareContextDefinition(),
        new CareContextDefinition(),
        new CareContextDefinition(),
        new CareContextDefinition(),
    ];
    $request->consentRequest->consent->hiTypes = [
        HITypeEnumEnum::DISCHARGE_SUMMARY,
        HITypeEnumEnum::DISCHARGE_SUMMARY,
        HITypeEnumEnum::OP_CONSULTATION,
    ];
    $request->consentRequest->consent->hip = new ConsentRequestConsentHip();
    $request->consentRequest->consent->hip->id = '352c5955-907a-4ff1-a3a2-fa9467739251';
    $request->consentRequest->consent->hiu = new ConsentRequestConsentHiu();
    $request->consentRequest->consent->hiu->id = 'aa52c3f5-ad01-49da-9ffe-78f097b0074f';
    $request->consentRequest->consent->patient = new ConsentRequestConsentPatient();
    $request->consentRequest->consent->patient->id = 'hinapatel79@ndhm';
    $request->consentRequest->consent->permission = new Permission();
    $request->consentRequest->consent->permission->accessMode = PermissionAccessModeEnum::VIEW;
    $request->consentRequest->consent->permission->dataEraseAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T21:48:41.971Z');
    $request->consentRequest->consent->permission->dateRange = new PermissionDateRange();
    $request->consentRequest->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-18T15:56:41.921Z');
    $request->consentRequest->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-13T20:56:04.612Z');
    $request->consentRequest->consent->permission->frequency = new PermissionFrequency();
    $request->consentRequest->consent->permission->frequency->repeats = 880476;
    $request->consentRequest->consent->permission->frequency->unit = PermissionFrequencyUnitEnum::DAY;
    $request->consentRequest->consent->permission->frequency->value = 918236;
    $request->consentRequest->consent->purpose = new UsePurpose();
    $request->consentRequest->consent->purpose->code = 'quae';
    $request->consentRequest->consent->purpose->refUri = 'http://repentant-minnow.name';
    $request->consentRequest->consent->purpose->text = 'pariatur';
    $request->consentRequest->consent->requester = new Requester();
    $request->consentRequest->consent->requester->identifier = new RequesterIdentifier();
    $request->consentRequest->consent->requester->identifier->system = 'https://www.mciindia.org';
    $request->consentRequest->consent->requester->identifier->type = 'REGNO';
    $request->consentRequest->consent->requester->identifier->value = 'MH1001';
    $request->consentRequest->consent->requester->name = 'Dr. Manju';
    $request->consentRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->consentRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T05:25:54.356Z');

    $response = $sdk->consent->postV05ConsentRequestsInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsInitRaw

Creates a consent request to get data about a patient by HIU user. CM should call Gateway - ***/v0.5/consent-requests/on-init*** API with the consent-request-id

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
    $request->authorization = 'rem';
    $request->requestBody = 'voluptates';

    $response = $sdk->consent->postV05ConsentRequestsInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsStatusJson

Get status of consent request done previously. CM responds by calling Gateway API - ***/v0.5/consent-requests/on-status***

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
    $request->authorization = 'quasi';
    $request->consentRequestStatusRequest = new ConsentRequestStatusRequest();
    $request->consentRequestStatusRequest->consentRequestId = 'repudiandae';
    $request->consentRequestStatusRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentRequestStatusRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T07:52:08.326Z');

    $response = $sdk->consent->postV05ConsentRequestsStatusJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentRequestsStatusRaw

Get status of consent request done previously. CM responds by calling Gateway API - ***/v0.5/consent-requests/on-status***

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
    $request->authorization = 'itaque';
    $request->requestBody = 'incidunt';

    $response = $sdk->consent->postV05ConsentRequestsStatusRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsFetch

This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway ***/v0.5/consents/on-fetch***

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
    $request->authorization = 'enim';
    $request->consentFetchRequest = new ConsentFetchRequest();
    $request->consentFetchRequest->consentId = 'consequatur';
    $request->consentFetchRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->consentFetchRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-26T02:10:00.226Z');

    $response = $sdk->consent->postV05ConsentsFetch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHipOnNotifyJson

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - ***/v0.5/consents/hip/notify***. 


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
    $request->authorization = 'explicabo';
    $request->hipConsentNotificationResponse = new HIPConsentNotificationResponse();
    $request->hipConsentNotificationResponse->acknowledgement = new ConsentAcknowledgement();
    $request->hipConsentNotificationResponse->acknowledgement->consentId = '<consent-artefact-id>';
    $request->hipConsentNotificationResponse->acknowledgement->status = ConsentAcknowledgementStatusEnum::UNKNOWN;
    $request->hipConsentNotificationResponse->error = new Error();
    $request->hipConsentNotificationResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hipConsentNotificationResponse->error->message = 'quibusdam';
    $request->hipConsentNotificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipConsentNotificationResponse->resp = new RequestReference();
    $request->hipConsentNotificationResponse->resp->requestId = '44269802-d502-4a94-bb4f-63c969e9a3ef';
    $request->hipConsentNotificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T14:21:47.573Z');

    $response = $sdk->consent->postV05ConsentsHipOnNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHipOnNotifyRaw

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - ***/v0.5/consents/hip/notify***. 


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
    $request->authorization = 'in';
    $request->requestBody = 'illum';

    $response = $sdk->consent->postV05ConsentsHipOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05ConsentsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - ***/v0.5/consents/hiu/notify***.


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
    $request->authorization = 'maiores';
    $request->hiuConsentNotificationResponse = new HIUConsentNotificationResponse();
    $request->hiuConsentNotificationResponse->acknowledgement = [
        new ConsentAcknowledgement(),
        new ConsentAcknowledgement(),
        new ConsentAcknowledgement(),
    ];
    $request->hiuConsentNotificationResponse->error = new Error();
    $request->hiuConsentNotificationResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuConsentNotificationResponse->error->message = 'magnam';
    $request->hiuConsentNotificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuConsentNotificationResponse->resp = new RequestReference();
    $request->hiuConsentNotificationResponse->resp->requestId = 'cd66ae39-5efb-49ba-88f3-a66997074ba4';
    $request->hiuConsentNotificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T00:52:14.624Z');

    $response = $sdk->consent->postV05ConsentsHiuOnNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
