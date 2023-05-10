# drivers

## Overview

Drivers management

### Available Operations

* [deleteDriversId](#deletedriversid) - Delete a Driver
* [getDrivers](#getdrivers) - Fetch a list of Drivers
* [postDrivers](#postdrivers) - Create a Driver
* [putDriversId](#putdriversid) - Update a Driver

## deleteDriversId

Delete a Driver

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDriversIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDriversIdRequest();
    $request->id = 216822;

    $response = $sdk->drivers->deleteDriversId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDrivers

Without params, it returns a list of Drivers the user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDriversRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDriversRequest();
    $request->all = false;
    $request->deviceId = 692472;
    $request->groupId = 565189;
    $request->refresh = false;
    $request->userId = 566602;

    $response = $sdk->drivers->getDrivers($request);

    if ($response->drivers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDrivers

Create a Driver

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Driver;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Driver();
    $request->attributes = [
        'modi' => 'praesentium',
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->id = 929297;
    $request->name = 'Erin Altenwerth';
    $request->uniqueId = 'explicabo';

    $response = $sdk->drivers->postDrivers($request);

    if ($response->driver !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDriversId

Update a Driver

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDriversIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Driver;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDriversIdRequest();
    $request->driver = new Driver();
    $request->driver->attributes = [
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->driver->id = 586513;
    $request->driver->name = 'Christopher Cummerata';
    $request->driver->uniqueId = 'alias';
    $request->id = 146441;

    $response = $sdk->drivers->putDriversId($request);

    if ($response->driver !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
