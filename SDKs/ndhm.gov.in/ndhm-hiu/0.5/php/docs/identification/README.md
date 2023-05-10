# identification

### Available Operations

* [postV05PatientsOnFindJson](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id

## postV05PatientsOnFindJson

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsOnFindJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationResponse;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationResponsePatient;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsOnFindJsonRequest();
    $request->authorization = 'error';
    $request->patientIdentificationResponse = new PatientIdentificationResponse();
    $request->patientIdentificationResponse->error = new Error();
    $request->patientIdentificationResponse->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientIdentificationResponse->error->message = 'pariatur';
    $request->patientIdentificationResponse->patient = new PatientIdentificationResponsePatient();
    $request->patientIdentificationResponse->patient->id = 'hinapatel79@ndhm';
    $request->patientIdentificationResponse->patient->name = 'Hina Patel';
    $request->patientIdentificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientIdentificationResponse->resp = new RequestReference();
    $request->patientIdentificationResponse->resp->requestId = 'd2efd121-aa6f-41e6-b4bd-b04f15756082';
    $request->patientIdentificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-18T14:54:00.905Z');

    $response = $sdk->identification->postV05PatientsOnFindJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsOnFindRaw

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsOnFindRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsOnFindRawRequest();
    $request->authorization = 'deleniti';
    $request->requestBody = 'itaque';

    $response = $sdk->identification->postV05PatientsOnFindRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
