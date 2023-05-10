<!-- Start SDK Example Usage -->
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
    $request->authorization = 'corrupti';
    $request->patientDiscoveryRequest = new PatientDiscoveryRequest();
    $request->patientDiscoveryRequest->patient = new PatientDiscoveryRequestPatient();
    $request->patientDiscoveryRequest->patient->gender = PatientGenderEnum::O;
    $request->patientDiscoveryRequest->patient->id = '<patient-id>@<consent-manager-id>';
    $request->patientDiscoveryRequest->patient->name = 'chandler bing';
    $request->patientDiscoveryRequest->patient->unverifiedIdentifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->verifiedIdentifiers = [
        new Identifier(),
        new Identifier(),
        new Identifier(),
        new Identifier(),
    ];
    $request->patientDiscoveryRequest->patient->yearOfBirth = 2000;
    $request->patientDiscoveryRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->patientDiscoveryRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T16:47:33.722Z');
    $request->patientDiscoveryRequest->transactionId = '8d69a674-e0f4-467c-8879-6ed151a05dfc';
    $request->xHipId = 'odit';

    $response = $sdk->cmFacing->postV05CareContextsDiscoverJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->