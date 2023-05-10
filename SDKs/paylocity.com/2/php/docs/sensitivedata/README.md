# sensitiveData

### Available Operations

* [addOrUpdateSensitiveData](#addorupdatesensitivedata) - Add/update sensitive data
* [getSensitiveData](#getsensitivedata) - Get sensitive data

## addOrUpdateSensitiveData

Sends new or updated employee sensitive data information directly to Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateSensitiveDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveData;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveDataDisability;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveDataDisabilityDisabilityClassifications;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveDataEthnicity;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveDataEthnicityEthnicRacialIdentities;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveDataGender;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveDataVeteran;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateSensitiveDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrUpdateSensitiveDataRequest();
    $request->companyId = 'fuga';
    $request->employeeId = 'reprehenderit';
    $request->sensitiveData = new SensitiveData();
    $request->sensitiveData->disability = new SensitiveDataDisability();
    $request->sensitiveData->disability->disability = 'quidem';
    $request->sensitiveData->disability->disabilityClassifications = [
        new SensitiveDataDisabilityDisabilityClassifications(),
        new SensitiveDataDisabilityDisabilityClassifications(),
        new SensitiveDataDisabilityDisabilityClassifications(),
        new SensitiveDataDisabilityDisabilityClassifications(),
    ];
    $request->sensitiveData->disability->hasDisability = 'ut';
    $request->sensitiveData->ethnicity = new SensitiveDataEthnicity();
    $request->sensitiveData->ethnicity->ethnicRacialIdentities = [
        new SensitiveDataEthnicityEthnicRacialIdentities(),
        new SensitiveDataEthnicityEthnicRacialIdentities(),
    ];
    $request->sensitiveData->ethnicity->ethnicity = 'suscipit';
    $request->sensitiveData->gender = new SensitiveDataGender();
    $request->sensitiveData->gender->displayPronouns = false;
    $request->sensitiveData->gender->genderIdentityDescription = 'assumenda';
    $request->sensitiveData->gender->identifyAsLegalGender = 'eos';
    $request->sensitiveData->gender->legalGender = 'praesentium';
    $request->sensitiveData->gender->pronouns = 'quisquam';
    $request->sensitiveData->gender->sexualOrientation = 'veritatis';
    $request->sensitiveData->veteran = new SensitiveDataVeteran();
    $request->sensitiveData->veteran->isVeteran = 'ipsa';
    $request->sensitiveData->veteran->veteran = 'id';

    $requestSecurity = new AddOrUpdateSensitiveDataSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sensitiveData->addOrUpdateSensitiveData($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSensitiveData

Gets employee sensitive data information directly from Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSensitiveDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSensitiveDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSensitiveDataRequest();
    $request->companyId = 'quidem';
    $request->employeeId = 'neque';

    $requestSecurity = new GetSensitiveDataSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sensitiveData->getSensitiveData($request, $requestSecurity);

    if ($response->sensitiveData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
