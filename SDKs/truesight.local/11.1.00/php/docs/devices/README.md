# devices

## Overview

API operations to interact with the monitored Devices.

### Available Operations

* [getAgentDevices](#getagentdevices) - Gets a list of all the devices monitored by an Agent.
* [getDevice](#getdevice) - Gets detailed information about a specific device.
* [getDeviceAgent](#getdeviceagent) - Gets detailed information about an Agent.
* [getDeviceEnergyUsage](#getdeviceenergyusage) - Gets the energy usage for a specific device and a given period.
* [getDeviceMonitors](#getdevicemonitors) - Gets the Monitors for a specific device.
* [getDeviceParameterHistory](#getdeviceparameterhistory) - Gets data history for a parameter of a specific device over a given period.
* [getDevices](#getdevices) - Gets summarized information about all monitored devices.
* [getDevicesSummary](#getdevicessummary) - Gets overall information for all devices.
* [getHeatingMarginCoverage](#getheatingmargincoverage) - Gets the heating margin values for each monitored device, when available.
* [searchDevices](#searchdevices) - Searches devices by name, model, manufacturer or serial number.

## getAgentDevices

You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAgentDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAgentDevicesRequest();
    $request->deviceId = 925597;

    $response = $sdk->devices->getAgentDevices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevice

You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceRequest();
    $request->deviceId = 836079;

    $response = $sdk->devices->getDevice($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAgent

You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAgentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAgentRequest();
    $request->deviceId = 71036;

    $response = $sdk->devices->getDeviceAgent($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceEnergyUsage

You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceEnergyUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceEnergyUsageBasisEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceEnergyUsageRollPeriodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceEnergyUsageRequest();
    $request->basis = GetDeviceEnergyUsageBasisEnum::DAILY;
    $request->deviceId = 87129;
    $request->rollPeriod = GetDeviceEnergyUsageRollPeriodEnum::SIX_MONTHS;

    $response = $sdk->devices->getDeviceEnergyUsage($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceMonitors

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceMonitorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceMonitorsRequest();
    $request->deviceId = 20218;

    $response = $sdk->devices->getDeviceMonitors($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceParameterHistory

You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceParameterHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceParameterHistoryRequest();
    $request->deviceId = 368241;
    $request->from = 832620;
    $request->monitorSid = 'sapiente';
    $request->monitorType = 'quo';
    $request->parameterName = 'odit';
    $request->to = 870013;

    $response = $sdk->devices->getDeviceParameterHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevices

Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicesDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevicesRequest();
    $request->applicationId = 'at';
    $request->direction = GetDevicesDirectionEnum::DESC;
    $request->groupId = 'molestiae';
    $request->limit = 799159;
    $request->page = 'quod';
    $request->serviceId = 'esse';
    $request->sort = 'totam';

    $response = $sdk->devices->getDevices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevicesSummary

Lists the GlobalSummary instance for all the monitored devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->devices->getDevicesSummary();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHeatingMarginCoverage

If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHeatingMarginCoverageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHeatingMarginCoverageDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHeatingMarginCoverageRequest();
    $request->applicationId = 'porro';
    $request->covered = false;
    $request->direction = GetHeatingMarginCoverageDirectionEnum::DESC;
    $request->groupId = 'dicta';
    $request->limit = 720633;
    $request->page = 'officia';
    $request->serviceId = 'occaecati';
    $request->sort = 'fugit';

    $response = $sdk->devices->getHeatingMarginCoverage($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchDevices

Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchDevicesRequest();
    $request->applicationId = 'deleniti';
    $request->groupId = 'hic';
    $request->limit = 758616;
    $request->page = 'totam';
    $request->searchTerms = 'beatae';
    $request->serviceId = 'commodi';

    $response = $sdk->devices->searchDevices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
