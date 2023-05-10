# discovery

### Available Operations

* [postV05CareContextsOnDiscoverJson](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

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
    $request->authorization = 'dolor';
    $request->patientDiscoveryResult = new PatientDiscoveryResult();
    $request->patientDiscoveryResult->error = new Error();
    $request->patientDiscoveryResult->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientDiscoveryResult->error->message = 'ipsum';
    $request->patientDiscoveryResult->patient = new PatientRepresentation();
    $request->patientDiscoveryResult->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientDiscoveryResult->patient->display = 'excepturi';
    $request->patientDiscoveryResult->patient->matchedBy = [
        IdentifierTypeEnum::MOBILE,
        IdentifierTypeEnum::MOBILE,
        IdentifierTypeEnum::MR,
    ];
    $request->patientDiscoveryResult->patient->referenceNumber = 'amet';
    $request->patientDiscoveryResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientDiscoveryResult->resp = new RequestReference();
    $request->patientDiscoveryResult->resp->requestId = 'a4100674-ebf6-4928-8d1b-a77a89ebf737';
    $request->patientDiscoveryResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-10T07:33:18.208Z');
    $request->patientDiscoveryResult->transactionId = '4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf';

    $response = $sdk->discovery->postV05CareContextsOnDiscoverJson($request);

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
    $request->authorization = 'amet';
    $request->requestBody = 'tempore';

    $response = $sdk->discovery->postV05CareContextsOnDiscoverRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
