# devices

### Available Operations

* [claimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
* [cycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [getNetworkDevice](#getnetworkdevice) - Return a single device
* [getNetworkDeviceLossAndLatencyHistory](#getnetworkdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds for a wired network device.
* [getNetworkDevicePerformance](#getnetworkdeviceperformance) - Return the performance score for a single MX
* [getNetworkDeviceUplink](#getnetworkdeviceuplink) - Return the uplink information for a device.
* [getNetworkDevices](#getnetworkdevices) - List the devices in a network
* [getOrganizationDevices](#getorganizationdevices) - List the devices in an organization
* [rebootNetworkDevice](#rebootnetworkdevice) - Reboot a device
* [removeNetworkDevice](#removenetworkdevice) - Remove a single device
* [updateNetworkDevice](#updatenetworkdevice) - Update the attributes of a device

## claimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimNetworkDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimNetworkDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimNetworkDevicesRequest();
    $request->requestBody = new ClaimNetworkDevicesRequestBody();
    $request->requestBody->serial = 'hic';
    $request->requestBody->serials = [
        'nobis',
        'dolores',
        'quis',
    ];
    $request->networkId = 'totam';

    $response = $sdk->devices->claimNetworkDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cycleDeviceSwitchPorts

Cycle a set of switch ports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CycleDeviceSwitchPortsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CycleDeviceSwitchPortsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CycleDeviceSwitchPortsRequest();
    $request->requestBody = new CycleDeviceSwitchPortsRequestBody();
    $request->requestBody->ports = [
        'eaque',
        'quis',
    ];
    $request->serial = 'nesciunt';

    $response = $sdk->devices->cycleDeviceSwitchPorts($request);

    if ($response->cycleDeviceSwitchPorts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDevice

Return a single device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDeviceRequest();
    $request->networkId = 'eos';
    $request->serial = 'perferendis';

    $response = $sdk->devices->getNetworkDevice($request);

    if ($response->getNetworkDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds for a wired network device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceLossAndLatencyHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceLossAndLatencyHistoryUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDeviceLossAndLatencyHistoryRequest();
    $request->ip = 'dolores';
    $request->networkId = 'minus';
    $request->resolution = 463451;
    $request->serial = 'dolor';
    $request->t0 = 'vero';
    $request->t1 = 'nostrum';
    $request->timespan = 9441.2;
    $request->uplink = GetNetworkDeviceLossAndLatencyHistoryUplinkEnum::WAN2;

    $response = $sdk->devices->getNetworkDeviceLossAndLatencyHistory($request);

    if ($response->getNetworkDeviceLossAndLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDevicePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDevicePerformanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDevicePerformanceRequest();
    $request->networkId = 'omnis';
    $request->serial = 'facilis';

    $response = $sdk->devices->getNetworkDevicePerformance($request);

    if ($response->getNetworkDevicePerformance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDeviceUplink

Return the uplink information for a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceUplinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDeviceUplinkRequest();
    $request->networkId = 'perspiciatis';
    $request->serial = 'voluptatem';

    $response = $sdk->devices->getNetworkDeviceUplink($request);

    if ($response->getNetworkDeviceUplink200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDevices

List the devices in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDevicesRequest();
    $request->networkId = 'porro';

    $response = $sdk->devices->getNetworkDevices($request);

    if ($response->getNetworkDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevices

List the devices in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesRequest();
    $request->configurationUpdatedAfter = 'consequuntur';
    $request->endingBefore = 'blanditiis';
    $request->organizationId = 'error';
    $request->perPage = 50370;
    $request->startingAfter = 'occaecati';

    $response = $sdk->devices->getOrganizationDevices($request);

    if ($response->getOrganizationDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootNetworkDevice

Reboot a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootNetworkDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootNetworkDeviceRequest();
    $request->networkId = 'rerum';
    $request->serial = 'adipisci';

    $response = $sdk->devices->rebootNetworkDevice($request);

    if ($response->rebootNetworkDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNetworkDevice

Remove a single device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveNetworkDeviceRequest();
    $request->networkId = 'asperiores';
    $request->serial = 'earum';

    $response = $sdk->devices->removeNetworkDevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkDevice

Update the attributes of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkDeviceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkDeviceRequest();
    $request->requestBody = new UpdateNetworkDeviceRequestBody();
    $request->requestBody->address = '66585 Renner Walk';
    $request->requestBody->floorPlanId = 'quaerat';
    $request->requestBody->lat = 5542.42;
    $request->requestBody->lng = 3982.21;
    $request->requestBody->moveMapMarker = false;
    $request->requestBody->name = 'Dawn Fadel';
    $request->requestBody->notes = 'hic';
    $request->requestBody->switchProfileId = 'excepturi';
    $request->requestBody->tags = 'cum';
    $request->networkId = 'voluptate';
    $request->serial = 'dignissimos';

    $response = $sdk->devices->updateNetworkDevice($request);

    if ($response->updateNetworkDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
