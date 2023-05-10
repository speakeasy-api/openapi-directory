# profile

### Available Operations

* [postV05PatientsProfileShareJson](#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details

## postV05PatientsProfileShareJson

Request for sharing patient's profile details to HIP


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileShareJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileRequestPatient;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileRequestPatientUserDemographics;
use \OpenAPI\OpenAPI\Models\Shared\PatientAddress;
use \OpenAPI\OpenAPI\Models\Shared\PatientGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Identifier;
use \OpenAPI\OpenAPI\Models\Shared\IdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileShareJsonRequest();
    $request->authorization = 'doloribus';
    $request->shareProfileRequest = new ShareProfileRequest();
    $request->shareProfileRequest->patient = new ShareProfileRequestPatient();
    $request->shareProfileRequest->patient->hipCode = '12345 (CounterId)';
    $request->shareProfileRequest->patient->userDemographics = new ShareProfileRequestPatientUserDemographics();
    $request->shareProfileRequest->patient->userDemographics->address = new PatientAddress();
    $request->shareProfileRequest->patient->userDemographics->address->district = 'suscipit';
    $request->shareProfileRequest->patient->userDemographics->address->line = 'reiciendis';
    $request->shareProfileRequest->patient->userDemographics->address->pincode = 'quidem';
    $request->shareProfileRequest->patient->userDemographics->address->state = 'saepe';
    $request->shareProfileRequest->patient->userDemographics->dayOfBirth = 897071;
    $request->shareProfileRequest->patient->userDemographics->gender = PatientGenderEnum::F;
    $request->shareProfileRequest->patient->userDemographics->healthId = '<username>@<suffix>';
    $request->shareProfileRequest->patient->userDemographics->healthIdNumber = '1111-1111-1111-11';
    $request->shareProfileRequest->patient->userDemographics->identifiers = [
        new Identifier(),
    ];
    $request->shareProfileRequest->patient->userDemographics->monthOfBirth = 992012;
    $request->shareProfileRequest->patient->userDemographics->name = 'Jane Doe';
    $request->shareProfileRequest->patient->userDemographics->yearOfBirth = 2000;
    $request->shareProfileRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->shareProfileRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T23:04:48.771Z');
    $request->xHipId = 'amet';

    $response = $sdk->profile->postV05PatientsProfileShareJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsProfileShareRaw

Request for sharing patient's profile details to HIP


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileShareRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileShareRawRequest();
    $request->authorization = 'beatae';
    $request->requestBody = 'dignissimos';
    $request->xHipId = 'a';

    $response = $sdk->profile->postV05PatientsProfileShareRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
