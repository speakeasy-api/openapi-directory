# dataFlow

### Available Operations

* [postV05HealthInformationHipRequestJson](#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request

## postV05HealthInformationHipRequestJson

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05HealthInformationHipRequestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIPHealthInformationRequestHiRequest;
use \OpenAPI\OpenAPI\Models\Shared\Consent;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\KeyMaterial;
use \OpenAPI\OpenAPI\Models\Shared\KeyObject;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05HealthInformationHipRequestJsonRequest();
    $request->authorization = 'iusto';
    $request->hipHealthInformationRequest = new HIPHealthInformationRequest();
    $request->hipHealthInformationRequest->hiRequest = new HIPHealthInformationRequestHiRequest();
    $request->hipHealthInformationRequest->hiRequest->consent = new Consent();
    $request->hipHealthInformationRequest->hiRequest->consent->id = 'c70a4562-6d43-4681-bf16-d9f5fce6c556';
    $request->hipHealthInformationRequest->hiRequest->dataPushUrl = 'inventore';
    $request->hipHealthInformationRequest->hiRequest->dateRange = new DateRange();
    $request->hipHealthInformationRequest->hiRequest->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-05T08:34:01.942Z');
    $request->hipHealthInformationRequest->hiRequest->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T16:53:11.568Z');
    $request->hipHealthInformationRequest->hiRequest->keyMaterial = new KeyMaterial();
    $request->hipHealthInformationRequest->hiRequest->keyMaterial->cryptoAlg = 'ECDH';
    $request->hipHealthInformationRequest->hiRequest->keyMaterial->curve = 'Curve25519';
    $request->hipHealthInformationRequest->hiRequest->keyMaterial->dhPublicKey = new KeyObject();
    $request->hipHealthInformationRequest->hiRequest->keyMaterial->dhPublicKey->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T22:13:29.147Z');
    $request->hipHealthInformationRequest->hiRequest->keyMaterial->dhPublicKey->keyValue = 'minima';
    $request->hipHealthInformationRequest->hiRequest->keyMaterial->dhPublicKey->parameters = 'Curve25519/32byte random key';
    $request->hipHealthInformationRequest->hiRequest->keyMaterial->nonce = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    $request->hipHealthInformationRequest->requestId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hipHealthInformationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-18T04:51:10.466Z');
    $request->hipHealthInformationRequest->transactionId = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->xHipId = 'libero';

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
    $request->authorization = 'aut';
    $request->requestBody = 'aut';
    $request->xHipId = 'deleniti';

    $response = $sdk->dataFlow->postV05HealthInformationHipRequestRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
