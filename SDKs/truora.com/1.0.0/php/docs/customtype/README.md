# customType

## Overview

The Custom Type API allows the creation of new products so only desired datasets are included in background checks.

## Score Configuration
The `ScoreConfig` object has `Rules` to apply to related *databases* which are summed up creating a `Score` which is associated to a *dataset* of a background `check`. All weights given to the configuration must sum up 1.


### Available Operations

* [deleteCustomType](#deletecustomtype) - Delete Custom Type
* [updateCustomType](#updatecustomtype) - Update Custom Type
* [createScoreConfig](#createscoreconfig) - Create Score Configurations
* [listScoreConfigs](#listscoreconfigs) - List Score Configurations

## deleteCustomType

Allows deleting a custom type. Person, vehicle, and company types cannot be deleted

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomTypeCountryEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomTypeRequest();
    $request->country = DeleteCustomTypeCountryEnum::ALL;
    $request->type = 'quidem';

    $requestSecurity = new DeleteCustomTypeSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customType->deleteCustomType($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomType

Allows updating a custom type. Person, vehicle, and company types are not modifiable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateConfigInputCountryEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigInput();
    $request->country = CreateConfigInputCountryEnum::ALL;
    $request->datasetAffiliationsAndInsurances = 602.25;
    $request->datasetAlertInMedia = 9698.1;
    $request->datasetBusinessBackground = 6667.67;
    $request->datasetCriminalRecord = 6531.4;
    $request->datasetDrivingLicenses = 6706.38;
    $request->datasetInternationalBackground = 1709.09;
    $request->datasetLegalBackground = 2103.82;
    $request->datasetPersonalIdentity = 3581.52;
    $request->datasetProfessionalBackground = 1289.26;
    $request->datasetTaxesAndFinances = 7506.86;
    $request->datasetTrafficFines = 3154.28;
    $request->datasetVehicleInformation = 6078.31;
    $request->datasetVehiclePermits = 3637.11;
    $request->type = 'minima';

    $requestSecurity = new UpdateCustomTypeSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customType->updateCustomType($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScoreConfig

Create a custom score configuration selecting the weight for each background check dataset and the country where it applies. Weights are numbers between 0 and 1 that represent how impactful the dataset is for the score. Keep in mind that the sum of all weights must equal 1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateConfigInputCountryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigInput();
    $request->country = CreateConfigInputCountryEnum::EC;
    $request->datasetAffiliationsAndInsurances = 384.25;
    $request->datasetAlertInMedia = 4386.01;
    $request->datasetBusinessBackground = 6342.74;
    $request->datasetCriminalRecord = 9883.74;
    $request->datasetDrivingLicenses = 9589.5;
    $request->datasetInternationalBackground = 1020.44;
    $request->datasetLegalBackground = 6527.9;
    $request->datasetPersonalIdentity = 2088.76;
    $request->datasetProfessionalBackground = 6350.59;
    $request->datasetTaxesAndFinances = 1613.09;
    $request->datasetTrafficFines = 9953;
    $request->datasetVehicleInformation = 6531.08;
    $request->datasetVehiclePermits = 5818.5;
    $request->type = 'numquam';

    $response = $sdk->customType->createScoreConfig($request);

    if ($response->scoreConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listScoreConfigs

Lists the custom score configurations of the associated account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListScoreConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScoreConfigsRequest();
    $request->startKey = 'commodi';

    $response = $sdk->customType->listScoreConfigs($request);

    if ($response->scoreConfigsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
