# devices

## Overview

Device management

### Available Operations

* [deleteDevicesId](#deletedevicesid) - Delete a Device
* [getDevices](#getdevices) - Fetch a list of Devices
* [postDevices](#postdevices) - Create a Device
* [putDevicesId](#putdevicesid) - Update a Device
* [putDevicesIdAccumulators](#putdevicesidaccumulators) - Update total distance and hours of the Device

## deleteDevicesId

Delete a Device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDevicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDevicesIdRequest();
    $request->id = 943749;

    $response = $sdk->devices->deleteDevicesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevices

Without any params, returns a list of the user's devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevicesRequest();
    $request->all = false;
    $request->id = 902599;
    $request->uniqueId = 'fuga';
    $request->userId = 449950;

    $response = $sdk->devices->getDevices($request);

    if ($response->devices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDevices

Create a Device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Device;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Device();
    $request->attributes = [
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->category = 'architecto';
    $request->contact = 'ipsa';
    $request->disabled = false;
    $request->geofenceIds = [
        666767,
        653140,
        670638,
        170909,
    ];
    $request->groupId = 210382;
    $request->id = 358152;
    $request->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T23:59:21.675Z');
    $request->model = 'enim';
    $request->name = 'Corey Hane III';
    $request->phone = '1-991-726-1965 x2444';
    $request->positionId = 244425;
    $request->status = 'error';
    $request->uniqueId = 'quia';

    $response = $sdk->devices->postDevices($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDevicesId

Update a Device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDevicesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Device;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDevicesIdRequest();
    $request->device = new Device();
    $request->device->attributes = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->device->category = 'odit';
    $request->device->contact = 'quo';
    $request->device->disabled = false;
    $request->device->geofenceIds = [
        949572,
    ];
    $request->device->groupId = 368725;
    $request->device->id = 662527;
    $request->device->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T03:20:13.120Z');
    $request->device->model = 'quasi';
    $request->device->name = 'Dr. Jake Pacocha';
    $request->device->phone = '1-559-264-7004 x29132';
    $request->device->positionId = 480894;
    $request->device->status = 'dicta';
    $request->device->uniqueId = 'harum';
    $request->id = 317983;

    $response = $sdk->devices->putDevicesId($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDevicesIdAccumulators

Update total distance and hours of the Device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDevicesIdAccumulatorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceAccumulators;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDevicesIdAccumulatorsRequest();
    $request->deviceAccumulators = new DeviceAccumulators();
    $request->deviceAccumulators->deviceId = 880476;
    $request->deviceAccumulators->hours = 4142.63;
    $request->deviceAccumulators->totalDistance = 9182.36;
    $request->id = 64147;

    $response = $sdk->devices->putDevicesIdAccumulators($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
