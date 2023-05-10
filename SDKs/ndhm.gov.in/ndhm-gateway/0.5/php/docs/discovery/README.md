# discovery

### Available Operations

* [postV05CareContextsDiscoverJson](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [postV05CareContextsOnDiscoverJson](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

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
    $request->authorization = 'consectetur';
    $request->patientDiscoveryRequest = new PatientDiscoveryRequest();
    $request->patientDiscoveryRequest->patient = new PatientDiscoveryRequestPatient();
    $request->patientDiscoveryRequest->patient->gender = PatientGenderEnum::U;
    $request->patientDiscoveryRequest->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientDiscoveryRequest->patient->name = 'chandler bing';
    $request->patientDiscoveryRequest->patient->unverifiedIdentifiers = [
        new Identifier(),
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->verifiedIdentifiers = [
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->yearOfBirth = 2000;
    $request->patientDiscoveryRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->patientDiscoveryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-05T00:50:30.305Z');
    $request->patientDiscoveryRequest->transactionId = 'da3f2ced-a7e2-43f2-a574-11faf4b7544e';
    $request->xHipId = 'modi';

    $response = $sdk->discovery->postV05CareContextsDiscoverJson($request);

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
    $request->authorization = 'in';
    $request->requestBody = 'explicabo';
    $request->xHipId = 'accusamus';

    $response = $sdk->discovery->postV05CareContextsDiscoverRaw($request);

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
    $request->authorization = 'rem';
    $request->patientDiscoveryResult = new PatientDiscoveryResult();
    $request->patientDiscoveryResult->error = new Error();
    $request->patientDiscoveryResult->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientDiscoveryResult->error->message = 'odit';
    $request->patientDiscoveryResult->patient = new PatientRepresentation();
    $request->patientDiscoveryResult->patient->careContexts = [
        new CareContextRepresentation(),
        new CareContextRepresentation(),
        new CareContextRepresentation(),
    ];
    $request->patientDiscoveryResult->patient->display = 'enim';
    $request->patientDiscoveryResult->patient->matchedBy = [
        IdentifierTypeEnum::NDHM_HEALTH_NUMBER,
        IdentifierTypeEnum::MR,
    ];
    $request->patientDiscoveryResult->patient->referenceNumber = 'libero';
    $request->patientDiscoveryResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientDiscoveryResult->resp = new RequestReference();
    $request->patientDiscoveryResult->resp->requestId = '40463a7d-575f-4140-8e76-4ad7334ec1b7';
    $request->patientDiscoveryResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-26T00:55:24.466Z');
    $request->patientDiscoveryResult->transactionId = 'b36a0808-8d10-40ef-ada2-00ef0422eb21';
    $request->xCmId = 'aliquid';

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
    $request->authorization = 'modi';
    $request->requestBody = 'optio';
    $request->xCmId = 'voluptatibus';

    $response = $sdk->discovery->postV05CareContextsOnDiscoverRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
