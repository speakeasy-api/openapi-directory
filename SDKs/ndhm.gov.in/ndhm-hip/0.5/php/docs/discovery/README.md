# discovery

### Available Operations

* [postV05CareContextsDiscoverJson](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts

## postV05CareContextsDiscoverJson

Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
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
use \OpenAPI\OpenAPI\Models\Shared\PatientDiscoveryRequestPatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05CareContextsDiscoverJsonRequest();
    $request->authorization = 'quisquam';
    $request->patientDiscoveryRequest = new PatientDiscoveryRequest();
    $request->patientDiscoveryRequest->patient = new PatientDiscoveryRequestPatient();
    $request->patientDiscoveryRequest->patient->gender = PatientDiscoveryRequestPatientGenderEnum::M;
    $request->patientDiscoveryRequest->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientDiscoveryRequest->patient->name = 'chandler bing';
    $request->patientDiscoveryRequest->patient->unverifiedIdentifiers = [
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->verifiedIdentifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->yearOfBirth = 2000;
    $request->patientDiscoveryRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->patientDiscoveryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-03T04:27:44.236Z');
    $request->patientDiscoveryRequest->transactionId = 'cdca4251-904e-4523-87e0-bc7178e4796f';
    $request->xHipId = 'dolores';

    $response = $sdk->discovery->postV05CareContextsDiscoverJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05CareContextsDiscoverRaw

Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
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
    $request->authorization = 'deserunt';
    $request->requestBody = 'molestiae';
    $request->xHipId = 'accusantium';

    $response = $sdk->discovery->postV05CareContextsDiscoverRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
