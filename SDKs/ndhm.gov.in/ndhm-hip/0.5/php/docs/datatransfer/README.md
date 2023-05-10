# dataTransfer

### Available Operations

* [postV05HealthInformationTransferJson](#postv05healthinformationtransferjson) - health information transfer API
* [postV05HealthInformationTransferRaw](#postv05healthinformationtransferraw) - health information transfer API

## postV05HealthInformationTransferJson

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content 


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
    $request->authorization = 'impedit';
    $request->dataNotification = new DataNotification();
    $request->dataNotification->entries = [
        new EntryContent(),
        new EntryLink(),
    ];
    $request->dataNotification->keyMaterial = new KeyMaterial();
    $request->dataNotification->keyMaterial->cryptoAlg = 'ECDH';
    $request->dataNotification->keyMaterial->curve = 'Curve25519';
    $request->dataNotification->keyMaterial->dhPublicKey = new KeyObject();
    $request->dataNotification->keyMaterial->dhPublicKey->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T12:32:41.161Z');
    $request->dataNotification->keyMaterial->dhPublicKey->keyValue = 'et';
    $request->dataNotification->keyMaterial->dhPublicKey->parameters = 'Curve25519/32byte random key';
    $request->dataNotification->keyMaterial->nonce = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    $request->dataNotification->pageCount = 677412;
    $request->dataNotification->pageNumber = 672048;
    $request->dataNotification->transactionId = 'c366c8dd-6b14-4429-8747-4778a7bd466d';

    $response = $sdk->dataTransfer->postV05HealthInformationTransferJson($request);

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
  6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content 


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
    $request->authorization = 'eos';
    $request->requestBody = 'praesentium';

    $response = $sdk->dataTransfer->postV05HealthInformationTransferRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
