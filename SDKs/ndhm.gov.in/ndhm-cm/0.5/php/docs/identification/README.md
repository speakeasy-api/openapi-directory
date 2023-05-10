# identification

### Available Operations

* [postV05PatientsFindJson](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id

## postV05PatientsFindJson

This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsFindJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequestQuery;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequestQueryPatient;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequestQueryRequester;
use \OpenAPI\OpenAPI\Models\Shared\PatientIdentificationRequestQueryRequesterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsFindJsonRequest();
    $request->authorization = 'officia';
    $request->patientIdentificationRequest = new PatientIdentificationRequest();
    $request->patientIdentificationRequest->query = new PatientIdentificationRequestQuery();
    $request->patientIdentificationRequest->query->patient = new PatientIdentificationRequestQueryPatient();
    $request->patientIdentificationRequest->query->patient->id = 'hinapatel79@ndhm';
    $request->patientIdentificationRequest->query->requester = new PatientIdentificationRequestQueryRequester();
    $request->patientIdentificationRequest->query->requester->id = '100005';
    $request->patientIdentificationRequest->query->requester->type = PatientIdentificationRequestQueryRequesterTypeEnum::HIU;
    $request->patientIdentificationRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientIdentificationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-04T04:05:19.236Z');

    $response = $sdk->identification->postV05PatientsFindJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsFindRaw

This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsFindRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsFindRawRequest();
    $request->authorization = 'aspernatur';
    $request->requestBody = 'vel';

    $response = $sdk->identification->postV05PatientsFindRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
