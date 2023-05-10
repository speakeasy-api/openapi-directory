# identification

### Available Operations

* [postV05PatientsFindJson](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [postV05PatientsOnFindJson](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id

## postV05PatientsFindJson

This API is meant for identify to patient given her consent-manager-user-id


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
    $request->authorization = 'ex';
    $request->patientIdentificationRequest = new PatientIdentificationRequest();
    $request->patientIdentificationRequest->query = new PatientIdentificationRequestQuery();
    $request->patientIdentificationRequest->query->patient = new PatientIdentificationRequestQueryPatient();
    $request->patientIdentificationRequest->query->patient->id = 'hinapatel79@ndhm';
    $request->patientIdentificationRequest->query->requester = new PatientIdentificationRequestQueryRequester();
    $request->patientIdentificationRequest->query->requester->id = '100005';
    $request->patientIdentificationRequest->query->requester->type = PatientIdentificationRequestQueryRequesterTypeEnum::HIP;
    $request->patientIdentificationRequest->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientIdentificationRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T02:21:11.806Z');
    $request->xCmId = 'expedita';

    $response = $sdk->identification->postV05PatientsFindJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsFindRaw

This API is meant for identify to patient given her consent-manager-user-id


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
    $request->authorization = 'hic';
    $request->requestBody = 'excepturi';
    $request->xCmId = 'aliquid';

    $response = $sdk->identification->postV05PatientsFindRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authorization = 'sed';
    $request->patientIdentificationResponse = new PatientIdentificationResponse();
    $request->patientIdentificationResponse->error = new Error();
    $request->patientIdentificationResponse->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->patientIdentificationResponse->error->message = 'similique';
    $request->patientIdentificationResponse->patient = new PatientIdentificationResponsePatient();
    $request->patientIdentificationResponse->patient->id = 'hinapatel79@ndhm';
    $request->patientIdentificationResponse->patient->name = 'Hina Patel';
    $request->patientIdentificationResponse->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientIdentificationResponse->resp = new RequestReference();
    $request->patientIdentificationResponse->resp->requestId = '6a4f77a8-7ee3-4e4b-a752-c65b34418e3b';
    $request->patientIdentificationResponse->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-08T20:21:24.708Z');

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
    $request->authorization = 'illo';
    $request->requestBody = 'minus';

    $response = $sdk->identification->postV05PatientsOnFindRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
