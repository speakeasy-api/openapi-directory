# deprecated

## Overview

These methods are no longer maintained nor supported

### Available Operations

* [~~devicelist~~](#devicelist) - The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.
 :warning: **Deprecated**
* [~~getthermstate~~](#getthermstate) - The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint. :warning: **Deprecated**
* [~~getuser~~](#getuser) - The method getuser returns information about a user such as prefered language, prefered units, and list of devices.
 :warning: **Deprecated**

## ~~devicelist~~

The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistAppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicelistRequest();
    $request->appType = DevicelistAppTypeEnum::APP_STATION;
    $request->deviceId = 'quibusdam';
    $request->getFavorites = false;

    $requestSecurity = new DevicelistSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deprecated->devicelist($request, $requestSecurity);

    if ($response->naDeviceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getthermstate~~

The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetthermstateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetthermstateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetthermstateRequest();
    $request->deviceId = 'unde';
    $request->moduleId = 'nulla';

    $requestSecurity = new GetthermstateSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deprecated->getthermstate($request, $requestSecurity);

    if ($response->naThermStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getuser~~

The method getuser returns information about a user such as prefered language, prefered units, and list of devices.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetuserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetuserSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deprecated->getuser($requestSecurity);

    if ($response->naUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
