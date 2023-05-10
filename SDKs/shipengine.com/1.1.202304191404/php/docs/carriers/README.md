# carriers

## Overview

carriers


### Available Operations

* [addFundsToCarrier](#addfundstocarrier) - Add Funds To Carrier
* [getCarrierById](#getcarrierbyid) - Get Carrier By ID
* [getCarrierOptions](#getcarrieroptions) - Get Carrier Options
* [listCarrierPackageTypes](#listcarrierpackagetypes) - List Carrier Package Types
* [listCarrierServices](#listcarrierservices) - List Carrier Services
* [listCarriers](#listcarriers) - List Carriers

## addFundsToCarrier

Add Funds To A Carrier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFundsToCarrierRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddFundsToCarrierRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFundsToCarrierRequest();
    $request->addFundsToCarrierRequestBody = new AddFundsToCarrierRequestBody();
    $request->addFundsToCarrierRequestBody->amount = 6169.34;
    $request->addFundsToCarrierRequestBody->currency = 'laboriosam';
    $request->carrierId = 'se-28529731';

    $response = $sdk->carriers->addFundsToCarrier($request);

    if ($response->addFundsToCarrierResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCarrierById

Retrive carrier info by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCarrierByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCarrierByIdRequest();
    $request->carrierId = 'se-28529731';

    $response = $sdk->carriers->getCarrierById($request);

    if ($response->getCarrierByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCarrierOptions

Get a list of the options available for the carrier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCarrierOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCarrierOptionsRequest();
    $request->carrierId = 'se-28529731';

    $response = $sdk->carriers->getCarrierOptions($request);

    if ($response->getCarrierOptionsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCarrierPackageTypes

List the package types associated with the carrier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCarrierPackageTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCarrierPackageTypesRequest();
    $request->carrierId = 'se-28529731';

    $response = $sdk->carriers->listCarrierPackageTypes($request);

    if ($response->listCarrierPackageTypesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCarrierServices

List the services associated with the carrier ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCarrierServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCarrierServicesRequest();
    $request->carrierId = 'se-28529731';

    $response = $sdk->carriers->listCarrierServices($request);

    if ($response->listCarrierServicesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCarriers

List all carriers that have been added to this account

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
    $response = $sdk->carriers->listCarriers();

    if ($response->getCarriersResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
