# dataFlow

### Available Operations

* [postV05HealthInformationNotifyJson](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05HealthInformationOnRequestJson](#postv05healthinformationonrequestjson) - Health information data request acknowledgement from HIP
* [postV05HealthInformationOnRequestRaw](#postv05healthinformationonrequestraw) - Health information data request acknowledgement from HIP
* [postV05HealthInformationRequestJson](#postv05healthinformationrequestjson) - Health information data request from HIU
* [postV05HealthInformationRequestRaw](#postv05healthinformationrequestraw) - Health information data request from HIU

## postV05HealthInformationNotifyJson

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotification;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotification;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationNotifier;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationNotifierTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotification;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotificationStatusResponses;
use \OpenAPI\OpenAPI\Models\Shared\HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationNotifyJsonRequest();
    $request->authorization = 'natus';
    $request->healthInformationNotification = new HealthInformationNotification();
    $request->healthInformationNotification->notification = new HealthInformationNotificationNotification();
    $request->healthInformationNotification->notification->consentId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->notification->doneAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-21T23:58:20.071Z');
    $request->healthInformationNotification->notification->notifier = new HealthInformationNotificationNotificationNotifier();
    $request->healthInformationNotification->notification->notifier->id = '100005';
    $request->healthInformationNotification->notification->notifier->type = HealthInformationNotificationNotificationNotifierTypeEnum::HIP;
    $request->healthInformationNotification->notification->statusNotification = new HealthInformationNotificationNotificationStatusNotification();
    $request->healthInformationNotification->notification->statusNotification->hipId = 'max';
    $request->healthInformationNotification->notification->statusNotification->sessionStatus = HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum::TRANSFERRED;
    $request->healthInformationNotification->notification->statusNotification->statusResponses = [
        new HealthInformationNotificationNotificationStatusNotificationStatusResponses(),
    ];
    $request->healthInformationNotification->notification->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->healthInformationNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-28T06:48:16.205Z');

    $response = $sdk->dataFlow->postV05HealthInformationNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationNotifyRaw

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationNotifyRawRequest();
    $request->authorization = 'excepturi';
    $request->requestBody = 'ullam';

    $response = $sdk->dataFlow->postV05HealthInformationNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationOnRequestJson

This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationOnRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgementHiRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationOnRequestJsonRequest();
    $request->authorization = 'provident';
    $request->hipHealthInformationRequestAcknowledgement = new HIPHealthInformationRequestAcknowledgement();
    $request->hipHealthInformationRequestAcknowledgement->error = new Error();
    $request->hipHealthInformationRequestAcknowledgement->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hipHealthInformationRequestAcknowledgement->error->message = 'sint';
    $request->hipHealthInformationRequestAcknowledgement->hiRequest = new HIPHealthInformationRequestAcknowledgementHiRequest();
    $request->hipHealthInformationRequestAcknowledgement->hiRequest->sessionStatus = HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum::ACKNOWLEDGED;
    $request->hipHealthInformationRequestAcknowledgement->hiRequest->transactionId = '0afa563e-2516-4fe4-88b7-11e5b7fd2ed0';
    $request->hipHealthInformationRequestAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipHealthInformationRequestAcknowledgement->resp = new RequestReference();
    $request->hipHealthInformationRequestAcknowledgement->resp->requestId = '28921cdd-c692-4601-bb57-6b0d5f0d30c5';
    $request->hipHealthInformationRequestAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T15:50:52.666Z');

    $response = $sdk->dataFlow->postV05HealthInformationOnRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationOnRequestRaw

This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationOnRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationOnRequestRawRequest();
    $request->authorization = 'nobis';
    $request->requestBody = 'dolores';

    $response = $sdk->dataFlow->postV05HealthInformationOnRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationRequestJson

HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - ***/v0.5/health-information/cm/on-request***. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIRequestHIRequest;
use \OpenAPI\OpenAPI\Models\Shared\Consent;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\KeyMaterial;
use \OpenAPI\OpenAPI\Models\Shared\KeyObject;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationRequestJsonRequest();
    $request->authorization = 'quis';
    $request->hiRequest = new HIRequest();
    $request->hiRequest->hiRequest = new HIRequestHIRequest();
    $request->hiRequest->hiRequest->consent = new Consent();
    $request->hiRequest->hiRequest->consent->id = '87053202-c73d-45fe-9b90-c28909b3fe49';
    $request->hiRequest->hiRequest->dataPushUrl = 'dolorum';
    $request->hiRequest->hiRequest->dateRange = new DateRange();
    $request->hiRequest->hiRequest->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-10T01:47:20.724Z');
    $request->hiRequest->hiRequest->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-01T21:12:31.408Z');
    $request->hiRequest->hiRequest->keyMaterial = new KeyMaterial();
    $request->hiRequest->hiRequest->keyMaterial->cryptoAlg = 'ECDH';
    $request->hiRequest->hiRequest->keyMaterial->curve = 'Curve25519';
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey = new KeyObject();
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-26T22:08:21.462Z');
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->keyValue = 'quaerat';
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->parameters = 'Curve25519/32byte random key';
    $request->hiRequest->hiRequest->keyMaterial->nonce = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    $request->hiRequest->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T07:10:00.236Z');

    $response = $sdk->dataFlow->postV05HealthInformationRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationRequestRaw

HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - ***/v0.5/health-information/cm/on-request***. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationRequestRawRequest();
    $request->authorization = 'dolorem';
    $request->requestBody = 'dolorem';

    $response = $sdk->dataFlow->postV05HealthInformationRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
