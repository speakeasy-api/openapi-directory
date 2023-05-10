# warehouses

## Overview

warehouses


### Available Operations

* [createWarehouse](#createwarehouse) - Create Warehouse
* [deleteWarehouse](#deletewarehouse) - Delete Warehouse By ID
* [getWarehouseById](#getwarehousebyid) - Get Warehouse By Id
* [listWarehouses](#listwarehouses) - List Warehouses
* [updateWarehouse](#updatewarehouse) - Update Warehouse By Id
* [updateWarehouseSettings](#updatewarehousesettings) - Update Warehouse Settings

## createWarehouse

Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.
If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateWarehouseRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressAddressResidentialIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWarehouseRequestBodyInput();
    $request->isDefault = false;
    $request->name = 'Zero Cool HQ';
    $request->originAddress = new Address();
    $request->originAddress->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->originAddress->addressLine2 = 'Unit 408';
    $request->originAddress->addressLine3 = 'Building #7';
    $request->originAddress->addressResidentialIndicator = AddressAddressResidentialIndicatorEnum::NO;
    $request->originAddress->cityLocality = 'Winnipeg';
    $request->originAddress->companyName = 'The Home Depot';
    $request->originAddress->countryCode = 'CA';
    $request->originAddress->email = 'example@example.com';
    $request->originAddress->name = 'John Doe';
    $request->originAddress->phone = '+1 204-253-9411 ext. 123';
    $request->originAddress->postalCode = '78756-3717';
    $request->originAddress->stateProvince = 'Manitoba';
    $request->returnAddress = new Address();
    $request->returnAddress->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->returnAddress->addressLine2 = 'Unit 408';
    $request->returnAddress->addressLine3 = 'Building #7';
    $request->returnAddress->addressResidentialIndicator = AddressAddressResidentialIndicatorEnum::NO;
    $request->returnAddress->cityLocality = 'Winnipeg';
    $request->returnAddress->companyName = 'The Home Depot';
    $request->returnAddress->countryCode = 'CA';
    $request->returnAddress->email = 'example@example.com';
    $request->returnAddress->name = 'John Doe';
    $request->returnAddress->phone = '+1 204-253-9411 ext. 123';
    $request->returnAddress->postalCode = '78756-3717';
    $request->returnAddress->stateProvince = 'Manitoba';

    $response = $sdk->warehouses->createWarehouse($request);

    if ($response->createWarehouseResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWarehouse

Delete a warehouse by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWarehouseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWarehouseRequest();
    $request->warehouseId = 'se-28529731';

    $response = $sdk->warehouses->deleteWarehouse($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWarehouseById

Retrieve warehouse data based on the warehouse ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWarehouseByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWarehouseByIdRequest();
    $request->warehouseId = 'se-28529731';

    $response = $sdk->warehouses->getWarehouseById($request);

    if ($response->getWarehouseByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWarehouses

Retrieve a list of warehouses associated with this account.

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
    $response = $sdk->warehouses->listWarehouses();

    if ($response->listWarehousesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWarehouse

Update Warehouse object information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWarehouseRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWarehouseRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressAddressResidentialIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWarehouseRequest();
    $request->updateWarehouseRequestBodyInput = new UpdateWarehouseRequestBodyInput();
    $request->updateWarehouseRequestBodyInput->isDefault = false;
    $request->updateWarehouseRequestBodyInput->name = 'Zero Cool HQ';
    $request->updateWarehouseRequestBodyInput->originAddress = new Address();
    $request->updateWarehouseRequestBodyInput->originAddress->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->updateWarehouseRequestBodyInput->originAddress->addressLine2 = 'Unit 408';
    $request->updateWarehouseRequestBodyInput->originAddress->addressLine3 = 'Building #7';
    $request->updateWarehouseRequestBodyInput->originAddress->addressResidentialIndicator = AddressAddressResidentialIndicatorEnum::NO;
    $request->updateWarehouseRequestBodyInput->originAddress->cityLocality = 'Winnipeg';
    $request->updateWarehouseRequestBodyInput->originAddress->companyName = 'The Home Depot';
    $request->updateWarehouseRequestBodyInput->originAddress->countryCode = 'CA';
    $request->updateWarehouseRequestBodyInput->originAddress->email = 'example@example.com';
    $request->updateWarehouseRequestBodyInput->originAddress->name = 'John Doe';
    $request->updateWarehouseRequestBodyInput->originAddress->phone = '+1 204-253-9411 ext. 123';
    $request->updateWarehouseRequestBodyInput->originAddress->postalCode = '78756-3717';
    $request->updateWarehouseRequestBodyInput->originAddress->stateProvince = 'Manitoba';
    $request->updateWarehouseRequestBodyInput->returnAddress = new Address();
    $request->updateWarehouseRequestBodyInput->returnAddress->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->updateWarehouseRequestBodyInput->returnAddress->addressLine2 = 'Unit 408';
    $request->updateWarehouseRequestBodyInput->returnAddress->addressLine3 = 'Building #7';
    $request->updateWarehouseRequestBodyInput->returnAddress->addressResidentialIndicator = AddressAddressResidentialIndicatorEnum::NO;
    $request->updateWarehouseRequestBodyInput->returnAddress->cityLocality = 'Winnipeg';
    $request->updateWarehouseRequestBodyInput->returnAddress->companyName = 'The Home Depot';
    $request->updateWarehouseRequestBodyInput->returnAddress->countryCode = 'CA';
    $request->updateWarehouseRequestBodyInput->returnAddress->email = 'example@example.com';
    $request->updateWarehouseRequestBodyInput->returnAddress->name = 'John Doe';
    $request->updateWarehouseRequestBodyInput->returnAddress->phone = '+1 204-253-9411 ext. 123';
    $request->updateWarehouseRequestBodyInput->returnAddress->postalCode = '78756-3717';
    $request->updateWarehouseRequestBodyInput->returnAddress->stateProvince = 'Manitoba';
    $request->warehouseId = 'se-28529731';

    $response = $sdk->warehouses->updateWarehouse($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWarehouseSettings

Update Warehouse settings object information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWarehouseSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWarehouseSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWarehouseSettingsRequest();
    $request->updateWarehouseSettingsRequestBody = new UpdateWarehouseSettingsRequestBody();
    $request->updateWarehouseSettingsRequestBody->isDefault = true;
    $request->warehouseId = 'se-28529731';

    $response = $sdk->warehouses->updateWarehouseSettings($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
