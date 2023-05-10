# dataFlow

### Available Operations

* [postV05HealthInformationCmOnRequestJson](#postv05healthinformationcmonrequestjson) - Health information data request
* [postV05HealthInformationCmOnRequestRaw](#postv05healthinformationcmonrequestraw) - Health information data request
* [postV05HealthInformationCmRequestJson](#postv05healthinformationcmrequestjson) - Health information data request
* [postV05HealthInformationCmRequestRaw](#postv05healthinformationcmrequestraw) - Health information data request
* [postV05HealthInformationHipOnRequestJson](#postv05healthinformationhiponrequestjson) - Health information data request
* [postV05HealthInformationHipOnRequestRaw](#postv05healthinformationhiponrequestraw) - Health information data request
* [postV05HealthInformationHipRequestJson](#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow

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
    $request->authorization = 'nobis';
    $request->hiuHealthInformationRequestResponse = new HIUHealthInformationRequestResponse();
    $request->hiuHealthInformationRequestResponse->error = new Error();
    $request->hiuHealthInformationRequestResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuHealthInformationRequestResponse->error->message = 'ducimus';
    $request->hiuHealthInformationRequestResponse->hiRequest = new HIUHealthInformationRequestResponseHiRequest();
    $request->hiuHealthInformationRequestResponse->hiRequest->sessionStatus = HIUHealthInformationRequestResponseHiRequestSessionStatusEnum::ACKNOWLEDGED;
    $request->hiuHealthInformationRequestResponse->hiRequest->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuHealthInformationRequestResponse->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuHealthInformationRequestResponse->resp = new RequestReference();
    $request->hiuHealthInformationRequestResponse->resp->requestId = '116db995-45fc-495f-a889-70e189dbb30f';
    $request->hiuHealthInformationRequestResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-11T08:15:47.736Z');
    $request->xHiuId = 'ipsum';

    $response = $sdk->dataFlow->postV05HealthInformationCmOnRequestJson($request);

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
    $request->authorization = 'adipisci';
    $request->requestBody = 'saepe';
    $request->xHiuId = 'deserunt';

    $response = $sdk->dataFlow->postV05HealthInformationCmOnRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationCmRequestJson

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationCmRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIRequestHIRequest;
use \OpenAPI\OpenAPI\Models\Shared\Consent;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\KeyMaterial;
use \OpenAPI\OpenAPI\Models\Shared\KeyObject;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationCmRequestJsonRequest();
    $request->authorization = 'doloremque';
    $request->hiRequest = new HIRequest();
    $request->hiRequest->hiRequest = new HIRequestHIRequest();
    $request->hiRequest->hiRequest->consent = new Consent();
    $request->hiRequest->hiRequest->consent->id = '55b197cd-44e2-4f52-982d-3513bb6f48b6';
    $request->hiRequest->hiRequest->dataPushUrl = 'quis';
    $request->hiRequest->hiRequest->dateRange = new DateRange();
    $request->hiRequest->hiRequest->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T08:43:25.035Z');
    $request->hiRequest->hiRequest->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-22T08:33:35.766Z');
    $request->hiRequest->hiRequest->keyMaterial = new KeyMaterial();
    $request->hiRequest->hiRequest->keyMaterial->cryptoAlg = 'ECDH';
    $request->hiRequest->hiRequest->keyMaterial->curve = 'Curve25519';
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey = new KeyObject();
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T02:32:48.491Z');
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->keyValue = 'ad';
    $request->hiRequest->hiRequest->keyMaterial->dhPublicKey->parameters = 'Curve25519/32byte random key';
    $request->hiRequest->hiRequest->keyMaterial->nonce = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    $request->hiRequest->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-29T19:48:36.420Z');
    $request->xCmId = 'consequuntur';

    $response = $sdk->dataFlow->postV05HealthInformationCmRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationCmRequestRaw

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationCmRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationCmRequestRawRequest();
    $request->authorization = 'debitis';
    $request->requestBody = 'labore';
    $request->xCmId = 'rerum';

    $response = $sdk->dataFlow->postV05HealthInformationCmRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationHipOnRequestJson

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHipOnRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgementHiRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHipOnRequestJsonRequest();
    $request->authorization = 'eos';
    $request->hipHealthInformationRequestAcknowledgement = new HIPHealthInformationRequestAcknowledgement();
    $request->hipHealthInformationRequestAcknowledgement->error = new Error();
    $request->hipHealthInformationRequestAcknowledgement->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hipHealthInformationRequestAcknowledgement->error->message = 'nostrum';
    $request->hipHealthInformationRequestAcknowledgement->hiRequest = new HIPHealthInformationRequestAcknowledgementHiRequest();
    $request->hipHealthInformationRequestAcknowledgement->hiRequest->sessionStatus = HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum::ACKNOWLEDGED;
    $request->hipHealthInformationRequestAcknowledgement->hiRequest->transactionId = '37a8cd9e-7319-4c17-bd52-5f77b114eeb5';
    $request->hipHealthInformationRequestAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hipHealthInformationRequestAcknowledgement->resp = new RequestReference();
    $request->hipHealthInformationRequestAcknowledgement->resp->requestId = '2ff785fc-3781-44d4-898e-0c2bb89eb75d';
    $request->hipHealthInformationRequestAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-02T04:38:29.370Z');
    $request->xCmId = 'iure';

    $response = $sdk->dataFlow->postV05HealthInformationHipOnRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationHipOnRequestRaw

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHipOnRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHipOnRequestRawRequest();
    $request->authorization = 'dolorem';
    $request->requestBody = 'commodi';
    $request->xCmId = 'impedit';

    $response = $sdk->dataFlow->postV05HealthInformationHipOnRequestRaw($request);

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
    $request->authorization = 'commodi';
    $request->hiphiRequest = new HIPHIRequest();
    $request->hiphiRequest->hiRequest = new HIPHIRequestHiRequest();
    $request->hiphiRequest->hiRequest->consent = new Consent();
    $request->hiphiRequest->hiRequest->consent->id = '00503d8b-b311-480f-b39a-e9e057eb809e';
    $request->hiphiRequest->hiRequest->dataPushUrl = 'eos';
    $request->hiphiRequest->hiRequest->dateRange = new DateRange();
    $request->hiphiRequest->hiRequest->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T10:06:25.237Z');
    $request->hiphiRequest->hiRequest->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T19:15:55.395Z');
    $request->hiphiRequest->hiRequest->keyMaterial = new KeyMaterial();
    $request->hiphiRequest->hiRequest->keyMaterial->cryptoAlg = 'ECDH';
    $request->hiphiRequest->hiRequest->keyMaterial->curve = 'Curve25519';
    $request->hiphiRequest->hiRequest->keyMaterial->dhPublicKey = new KeyObject();
    $request->hiphiRequest->hiRequest->keyMaterial->dhPublicKey->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T15:13:44.571Z');
    $request->hiphiRequest->hiRequest->keyMaterial->dhPublicKey->keyValue = 'a';
    $request->hiphiRequest->hiRequest->keyMaterial->dhPublicKey->parameters = 'Curve25519/32byte random key';
    $request->hiphiRequest->hiRequest->keyMaterial->nonce = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    $request->hiphiRequest->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiphiRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-02T10:52:44.468Z');
    $request->hiphiRequest->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->xHipId = 'atque';

    $response = $sdk->dataFlow->postV05HealthInformationHipRequestJson($request);

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
    $request->authorization = 'beatae';
    $request->requestBody = 'at';
    $request->xHipId = 'labore';

    $response = $sdk->dataFlow->postV05HealthInformationHipRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authorization = 'minus';
    $request->healthInformationNotification = new HealthInformationNotification();
    $request->healthInformationNotification->notification = new HealthInformationNotificationNotification();
    $request->healthInformationNotification->notification->consentId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->notification->doneAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T04:33:32.836Z');
    $request->healthInformationNotification->notification->notifier = new HealthInformationNotificationNotificationNotifier();
    $request->healthInformationNotification->notification->notifier->id = 'tmh';
    $request->healthInformationNotification->notification->notifier->type = HealthInformationNotificationNotificationNotifierTypeEnum::HIU;
    $request->healthInformationNotification->notification->statusNotification = new HealthInformationNotificationNotificationStatusNotification();
    $request->healthInformationNotification->notification->statusNotification->hipId = 'max';
    $request->healthInformationNotification->notification->statusNotification->sessionStatus = HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum::FAILED;
    $request->healthInformationNotification->notification->statusNotification->statusResponses = [
        new HealthInformationNotificationNotificationStatusNotificationStatusResponses(),
        new HealthInformationNotificationNotificationStatusNotificationStatusResponses(),
    ];
    $request->healthInformationNotification->notification->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->healthInformationNotification->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->healthInformationNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T08:20:32.050Z');
    $request->xCmId = 'repellat';

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
    $request->authorization = 'velit';
    $request->requestBody = 'porro';
    $request->xCmId = 'provident';

    $response = $sdk->dataFlow->postV05HealthInformationNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
