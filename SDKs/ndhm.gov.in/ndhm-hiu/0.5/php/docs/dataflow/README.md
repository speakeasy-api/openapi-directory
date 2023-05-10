# dataFlow

### Available Operations

* [postV05HealthInformationHiuOnRequestJson](#postv05healthinformationhiuonrequestjson) - Health information data request
* [postV05HealthInformationHiuOnRequestRaw](#postv05healthinformationhiuonrequestraw) - Health information data request
* [postV05HealthInformationTransferJson](#postv05healthinformationtransferjson) - health information transfer API
* [postV05HealthInformationTransferRaw](#postv05healthinformationtransferraw) - health information transfer API

## postV05HealthInformationHiuOnRequestJson

Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHiuOnRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUHealthInformationRequestResponse;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIUHealthInformationRequestResponseHiRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHiuOnRequestJsonRequest();
    $request->authorization = 'ipsam';
    $request->hiuHealthInformationRequestResponse = new HIUHealthInformationRequestResponse();
    $request->hiuHealthInformationRequestResponse->error = new Error();
    $request->hiuHealthInformationRequestResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuHealthInformationRequestResponse->error->message = 'sequi';
    $request->hiuHealthInformationRequestResponse->hiRequest = new HIUHealthInformationRequestResponseHiRequest();
    $request->hiuHealthInformationRequestResponse->hiRequest->sessionStatus = HIUHealthInformationRequestResponseHiRequestSessionStatusEnum::ACKNOWLEDGED;
    $request->hiuHealthInformationRequestResponse->hiRequest->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuHealthInformationRequestResponse->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuHealthInformationRequestResponse->resp = new RequestReference();
    $request->hiuHealthInformationRequestResponse->resp->requestId = '7e0bc717-8e47-496f-aa70-c688282aa482';
    $request->hiuHealthInformationRequestResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T16:09:39.108Z');
    $request->xHiuId = 'fugit';

    $response = $sdk->dataFlow->postV05HealthInformationHiuOnRequestJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationHiuOnRequestRaw

Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHiuOnRequestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHiuOnRequestRawRequest();
    $request->authorization = 'sapiente';
    $request->requestBody = 'consequuntur';
    $request->xHiuId = 'ratione';

    $response = $sdk->dataFlow->postV05HealthInformationHiuOnRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationTransferJson

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationTransferJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataNotification;
use \OpenAPI\OpenAPI\Models\Shared\KeyMaterial;
use \OpenAPI\OpenAPI\Models\Shared\KeyObject;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationTransferJsonRequest();
    $request->authorization = 'explicabo';
    $request->dataNotification = new DataNotification();
    $request->dataNotification->entries = [
        new EntryLink(),
        new EntryLink(),
        new EntryContent(),
        new EntryContent(),
    ];
    $request->dataNotification->keyMaterial = new KeyMaterial();
    $request->dataNotification->keyMaterial->cryptoAlg = 'ECDH';
    $request->dataNotification->keyMaterial->curve = 'Curve25519';
    $request->dataNotification->keyMaterial->dhPublicKey = new KeyObject();
    $request->dataNotification->keyMaterial->dhPublicKey->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-10T03:57:05.694Z');
    $request->dataNotification->keyMaterial->dhPublicKey->keyValue = 'veritatis';
    $request->dataNotification->keyMaterial->dhPublicKey->parameters = 'Curve25519/32byte random key';
    $request->dataNotification->keyMaterial->nonce = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    $request->dataNotification->pageCount = 458604;
    $request->dataNotification->pageNumber = 800379;
    $request->dataNotification->transactionId = 'be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87';

    $response = $sdk->dataFlow->postV05HealthInformationTransferJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05HealthInformationTransferRaw

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationTransferRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationTransferRawRequest();
    $request->authorization = 'quasi';
    $request->requestBody = 'a';

    $response = $sdk->dataFlow->postV05HealthInformationTransferRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
