# packageTypes

## Overview

custom package types


### Available Operations

* [createPackageType](#createpackagetype) - Create Custom Package Type
* [deletePackageType](#deletepackagetype) - Delete A Custom Package By ID
* [getPackageTypeById](#getpackagetypebyid) - Get Custom Package Type By ID
* [listPackageTypes](#listpackagetypes) - List Custom Package Types
* [updatePackageType](#updatepackagetype) - Update Custom Package Type By ID

## createPackageType

Create a custom package type to better assist in getting accurate rate estimates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreatePackageTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\DimensionsDimensionUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePackageTypeRequestBody();
    $request->description = 'Packaging for laptops';
    $request->dimensions = new Dimensions();
    $request->dimensions->height = 8413.86;
    $request->dimensions->length = 2894.06;
    $request->dimensions->unit = DimensionsDimensionUnitEnum::INCH;
    $request->dimensions->width = 1831.91;
    $request->name = 'laptop_box';
    $request->packageCode = 'small_flat_rate_box';
    $request->packageId = 'se-28529731';

    $response = $sdk->packageTypes->createPackageType($request);

    if ($response->createPackageTypeResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePackageType

Delete a custom package using the ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePackageTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePackageTypeRequest();
    $request->packageId = 'se-28529731';

    $response = $sdk->packageTypes->deletePackageType($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPackageTypeById

Get Custom Package Type by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPackageTypeByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPackageTypeByIdRequest();
    $request->packageId = 'se-28529731';

    $response = $sdk->packageTypes->getPackageTypeById($request);

    if ($response->getPackageTypeByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPackageTypes

List the custom package types associated with the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->packageTypes->listPackageTypes();

    if ($response->listPackageTypesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePackageType

Update the custom package type object by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePackageTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePackageTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\DimensionsDimensionUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePackageTypeRequest();
    $request->packageId = 'se-28529731';
    $request->updatePackageTypeRequestBody = new UpdatePackageTypeRequestBody();
    $request->updatePackageTypeRequestBody->description = 'Packaging for laptops';
    $request->updatePackageTypeRequestBody->dimensions = new Dimensions();
    $request->updatePackageTypeRequestBody->dimensions->height = 3978.21;
    $request->updatePackageTypeRequestBody->dimensions->length = 5865.13;
    $request->updatePackageTypeRequestBody->dimensions->unit = DimensionsDimensionUnitEnum::CENTIMETER;
    $request->updatePackageTypeRequestBody->dimensions->width = 201.07;
    $request->updatePackageTypeRequestBody->name = 'laptop_box';
    $request->updatePackageTypeRequestBody->packageCode = 'small_flat_rate_box';
    $request->updatePackageTypeRequestBody->packageId = 'se-28529731';

    $response = $sdk->packageTypes->updatePackageType($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
