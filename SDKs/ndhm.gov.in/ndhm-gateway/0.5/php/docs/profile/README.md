# profile

### Available Operations

* [postV05PatientsProfileOnShareJson](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [postV05PatientsProfileShareJson](#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details

## postV05PatientsProfileOnShareJson

Result of patient share profile request at HIP end.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileOnShareJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileResult;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\ShareProfileAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileOnShareJsonRequest();
    $request->authorization = 'expedita';
    $request->shareProfileResult = new ShareProfileResult();
    $request->shareProfileResult->acknowledgement = new ShareProfileAcknowledgement();
    $request->shareProfileResult->acknowledgement->healthId = '<username>@<suffix>';
    $request->shareProfileResult->acknowledgement->status = ShareProfileAcknowledgementStatusEnum::SUCCESS;
    $request->shareProfileResult->error = new Error();
    $request->shareProfileResult->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->shareProfileResult->error->message = 'possimus';
    $request->shareProfileResult->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->shareProfileResult->resp = new RequestReference();
    $request->shareProfileResult->resp->requestId = '20e56248-fff6-439a-910a-bdcab6267669';
    $request->shareProfileResult->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T05:28:14.380Z');
    $request->xCmId = 'ab';

    $response = $sdk->profile->postV05PatientsProfileOnShareJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05PatientsProfileOnShareRaw

Result of patient share profile request at HIP end.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05PatientsProfileOnShareRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05PatientsProfileOnShareRawRequest();
    $request->authorization = 'itaque';
    $request->requestBody = 'quisquam';
    $request->xCmId = 'eaque';

    $response = $sdk->profile->postV05PatientsProfileOnShareRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authorization = 'alias';
    $request->shareProfileRequest = new ShareProfileRequest();
    $request->shareProfileRequest->patient = new ShareProfileRequestPatient();
    $request->shareProfileRequest->patient->hipCode = '12345 (CounterId)';
    $request->shareProfileRequest->patient->userDemographics = new ShareProfileRequestPatientUserDemographics();
    $request->shareProfileRequest->patient->userDemographics->address = new PatientAddress();
    $request->shareProfileRequest->patient->userDemographics->address->district = 'qui';
    $request->shareProfileRequest->patient->userDemographics->address->line = 'consequuntur';
    $request->shareProfileRequest->patient->userDemographics->address->pincode = 'vitae';
    $request->shareProfileRequest->patient->userDemographics->address->state = 'quidem';
    $request->shareProfileRequest->patient->userDemographics->dayOfBirth = 193334;
    $request->shareProfileRequest->patient->userDemographics->gender = PatientGenderEnum::M;
    $request->shareProfileRequest->patient->userDemographics->healthId = '<username>@<suffix>';
    $request->shareProfileRequest->patient->userDemographics->healthIdNumber = '1111-1111-1111-11';
    $request->shareProfileRequest->patient->userDemographics->identifiers = [
        new Identifier(),
        new Identifier(),
    ];
    $request->shareProfileRequest->patient->userDemographics->monthOfBirth = 847018;
    $request->shareProfileRequest->patient->userDemographics->name = 'Jane Doe';
    $request->shareProfileRequest->patient->userDemographics->yearOfBirth = 2000;
    $request->shareProfileRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->shareProfileRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-18T19:31:06.005Z');
    $request->xHipId = 'similique';

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
    $request->authorization = 'eligendi';
    $request->requestBody = 'tempore';
    $request->xHipId = 'amet';

    $response = $sdk->profile->postV05PatientsProfileShareRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
