# thermostat

## Overview

Thermostat specific methods

### Available Operations

* [createnewschedule](#createnewschedule) - The method createnewschedule creates a new schedule stored in the backup list.
* [getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getthermostatsdata](#getthermostatsdata) - The method getthermostatsdata returns information about user's thermostats such as their last measurements.
* [setthermpoint](#setthermpoint) - The method setthermpoint changes the Thermostat manual temperature setpoint.
* [switchschedule](#switchschedule) - The method switchschedule switches the Thermostat's schedule to another existing schedule.
* [syncschedule](#syncschedule) - The method syncschedule changes the Thermostat weekly schedule.

## createnewschedule

The method createnewschedule creates a new schedule stored in the backup list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatenewscheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatenewscheduleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatenewscheduleRequest();
    $request->requestBody = 'esse';
    $request->deviceId = 'totam';
    $request->moduleId = 'porro';

    $requestSecurity = new CreatenewscheduleSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->thermostat->createnewschedule($request, $requestSecurity);

    if ($response->naNewScheduleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getmeasure

The method getmeasure returns the measurements of a device or a module.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetmeasureRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetmeasureScaleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetmeasureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetmeasureSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetmeasureRequest();
    $request->dateBegin = 678880;
    $request->dateEnd = 'dicta';
    $request->deviceId = 'nam';
    $request->limit = 639921;
    $request->moduleId = 'occaecati';
    $request->optimize = false;
    $request->realTime = false;
    $request->scale = GetmeasureScaleEnum::THIRTYMIN;
    $request->type = [
        GetmeasureTypeEnum::SUM_BOILER_ON,
        GetmeasureTypeEnum::DATE_MIN_NOISE,
        GetmeasureTypeEnum::DATE_MIN_HUM,
    ];

    $requestSecurity = new GetmeasureSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->thermostat->getmeasure($request, $requestSecurity);

    if ($response->naMeasureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getthermostatsdata

The method getthermostatsdata returns information about user's thermostats such as their last measurements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetthermostatsdataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetthermostatsdataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetthermostatsdataRequest();
    $request->deviceId = 'beatae';

    $requestSecurity = new GetthermostatsdataSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->thermostat->getthermostatsdata($request, $requestSecurity);

    if ($response->naThermostatDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setthermpoint

The method setthermpoint changes the Thermostat manual temperature setpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetthermpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetthermpointSetpointModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetthermpointSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetthermpointRequest();
    $request->deviceId = 'commodi';
    $request->moduleId = 'molestiae';
    $request->setpointEndtime = 264555;
    $request->setpointMode = SetthermpointSetpointModeEnum::AWAY;
    $request->setpointTemp = 7742.34;

    $requestSecurity = new SetthermpointSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->thermostat->setthermpoint($request, $requestSecurity);

    if ($response->naOkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## switchschedule

The method switchschedule switches the Thermostat's schedule to another existing schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SwitchscheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\SwitchscheduleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchscheduleRequest();
    $request->deviceId = 'cum';
    $request->moduleId = 'esse';
    $request->scheduleId = 'ipsum';

    $requestSecurity = new SwitchscheduleSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->thermostat->switchschedule($request, $requestSecurity);

    if ($response->naOkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## syncschedule

The method syncschedule changes the Thermostat weekly schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SyncscheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\SyncscheduleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SyncscheduleRequest();
    $request->requestBody = 'excepturi';
    $request->deviceId = 'aspernatur';
    $request->moduleId = 'perferendis';

    $requestSecurity = new SyncscheduleSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->thermostat->syncschedule($request, $requestSecurity);

    if ($response->naOkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
