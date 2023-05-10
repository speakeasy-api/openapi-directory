# devices

### Available Operations

* [blinkDeviceLeds](#blinkdeviceleds) - Blink the LEDs on a device
* [checkinNetworkSmDevices](#checkinnetworksmdevices) - Force check-in a set of devices
* [claimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [cloneOrganizationSwitchDevices](#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [createDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [createDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [getDevice](#getdevice) - Return a single device
* [getDeviceCellularSims](#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [getDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job
* [getDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job
* [getDeviceLldpCdp](#getdevicelldpcdp) - List LLDP and CDP information for a device
* [getDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [getDeviceManagementInterface](#getdevicemanagementinterface) - Return the management interface settings for a device
* [getNetworkDevices](#getnetworkdevices) - List the devices in a network
* [getNetworkSmDeviceCellularUsageHistory](#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device
* [getNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceDeviceCommandLogs](#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [getNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device
* [getNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [getNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [getNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getOrganizationDevices](#getorganizationdevices) - List the devices in an organization
* [getOrganizationDevicesAvailabilities](#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationInventoryDevice](#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [lockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [modifyNetworkSmDevicesTags](#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [moveNetworkSmDevices](#movenetworksmdevices) - Move a set of devices to a new network
* [rebootDevice](#rebootdevice) - Reboot a device
* [refreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [removeNetworkDevices](#removenetworkdevices) - Remove a single device
* [unenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [updateDevice](#updatedevice) - Update the attributes of a device
* [updateDeviceCellularSims](#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [updateDeviceManagementInterface](#updatedevicemanagementinterface) - Update the management interface settings for a device
* [updateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device
* [vmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [wipeNetworkSmDevices](#wipenetworksmdevices) - Wipe a device

## blinkDeviceLeds

Blink the LEDs on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BlinkDeviceLedsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BlinkDeviceLedsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BlinkDeviceLedsRequest();
    $request->requestBody = new BlinkDeviceLedsRequestBody();
    $request->requestBody->duration = 223001;
    $request->requestBody->duty = 577731;
    $request->requestBody->period = 351328;
    $request->serial = 'unde';

    $response = $sdk->devices->blinkDeviceLeds($request);

    if ($response->blinkDeviceLeds202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkinNetworkSmDevices

Force check-in a set of devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckinNetworkSmDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckinNetworkSmDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckinNetworkSmDevicesRequest();
    $request->requestBody = new CheckinNetworkSmDevicesRequestBody();
    $request->requestBody->ids = [
        'pariatur',
        'vel',
    ];
    $request->requestBody->scope = [
        'soluta',
        'minus',
    ];
    $request->requestBody->serials = [
        'mollitia',
    ];
    $request->requestBody->wifiMacs = [
        'aliquam',
        'quas',
        'aut',
        'autem',
    ];
    $request->networkId = 'dolorem';

    $response = $sdk->devices->checkinNetworkSmDevices($request);

    if ($response->checkinNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

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
    $request->requestBody->serials = [
        'rerum',
    ];
    $request->networkId = 'iste';

    $response = $sdk->devices->claimNetworkDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloneOrganizationSwitchDevices

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationSwitchDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationSwitchDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloneOrganizationSwitchDevicesRequest();
    $request->requestBody = new CloneOrganizationSwitchDevicesRequestBody();
    $request->requestBody->sourceSerial = 'occaecati';
    $request->requestBody->targetSerials = [
        'tempora',
        'libero',
    ];
    $request->organizationId = 'iure';

    $response = $sdk->devices->cloneOrganizationSwitchDevices($request);

    if ($response->cloneOrganizationSwitchDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceLiveToolsPing

Enqueue a job to ping a target host from the device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceLiveToolsPingRequest();
    $request->requestBody = new CreateDeviceLiveToolsPingRequestBody();
    $request->requestBody->count = 976231;
    $request->requestBody->target = 'id';
    $request->serial = 'qui';

    $response = $sdk->devices->createDeviceLiveToolsPing($request);

    if ($response->createDeviceLiveToolsPing201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceLiveToolsPingDevice

Enqueue a job to check connectivity status to the device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceLiveToolsPingDeviceRequest();
    $request->requestBody = new CreateDeviceLiveToolsPingDeviceRequestBody();
    $request->requestBody->count = 127086;
    $request->serial = 'accusantium';

    $response = $sdk->devices->createDeviceLiveToolsPingDevice($request);

    if ($response->createDeviceLiveToolsPingDevice201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevice

Return a single device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceRequest();
    $request->serial = 'eum';

    $response = $sdk->devices->getDevice($request);

    if ($response->getDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCellularSims

Return the SIM and APN configurations for a cellular device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularSimsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularSimsRequest();
    $request->serial = 'nesciunt';

    $response = $sdk->devices->getDeviceCellularSims($request);

    if ($response->getDeviceCellularSims200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceClientsRequest();
    $request->serial = 'commodi';
    $request->t0 = 'molestias';
    $request->timespan = 5426.01;

    $response = $sdk->devices->getDeviceClients($request);

    if ($response->getDeviceClients200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLiveToolsPing

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLiveToolsPingRequest();
    $request->id = '28553cb1-0006-4bef-8921-ec2053b74936';
    $request->serial = 'aliquid';

    $response = $sdk->devices->getDeviceLiveToolsPing($request);

    if ($response->getDeviceLiveToolsPing200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLiveToolsPingDevice

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLiveToolsPingDeviceRequest();
    $request->id = 'ac8ee0f2-bf19-4588-940d-03f3deba297b';
    $request->serial = 'earum';

    $response = $sdk->devices->getDeviceLiveToolsPingDevice($request);

    if ($response->getDeviceLiveToolsPingDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLldpCdp

List LLDP and CDP information for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLldpCdpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLldpCdpRequest();
    $request->serial = 'ipsum';

    $response = $sdk->devices->getDeviceLldpCdp($request);

    if ($response->getDeviceLldpCdp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLossAndLatencyHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLossAndLatencyHistoryUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLossAndLatencyHistoryRequest();
    $request->ip = 'itaque';
    $request->resolution = 586366;
    $request->serial = 'consequatur';
    $request->t0 = 'harum';
    $request->t1 = 'nobis';
    $request->timespan = 2563.25;
    $request->uplink = GetDeviceLossAndLatencyHistoryUplinkEnum::CELLULAR;

    $response = $sdk->devices->getDeviceLossAndLatencyHistory($request);

    if ($response->getDeviceLossAndLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceManagementInterface

Return the management interface settings for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceManagementInterfaceRequest();
    $request->serial = 'temporibus';

    $response = $sdk->devices->getDeviceManagementInterface($request);

    if ($response->getDeviceManagementInterface200ApplicationJSONObject !== null) {
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
    $request->networkId = 'doloribus';

    $response = $sdk->devices->getNetworkDevices($request);

    if ($response->getNetworkDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceCellularUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceCellularUsageHistoryRequest();
    $request->deviceId = 'quos';
    $request->networkId = 'commodi';

    $response = $sdk->devices->getNetworkSmDeviceCellularUsageHistory($request);

    if ($response->getNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceCerts

List the certs on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceCertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceCertsRequest();
    $request->deviceId = 'blanditiis';
    $request->networkId = 'voluptatibus';

    $response = $sdk->devices->getNetworkSmDeviceCerts($request);

    if ($response->getNetworkSmDeviceCerts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceConnectivityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceConnectivityRequest();
    $request->deviceId = 'nulla';
    $request->endingBefore = 'nemo';
    $request->networkId = 'ratione';
    $request->perPage = 293187;
    $request->startingAfter = 'perferendis';

    $response = $sdk->devices->getNetworkSmDeviceConnectivity($request);

    if ($response->getNetworkSmDeviceConnectivity200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDesktopLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceDesktopLogsRequest();
    $request->deviceId = 'enim';
    $request->endingBefore = 'impedit';
    $request->networkId = 'libero';
    $request->perPage = 221392;
    $request->startingAfter = 'nesciunt';

    $response = $sdk->devices->getNetworkSmDeviceDesktopLogs($request);

    if ($response->getNetworkSmDeviceDesktopLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceCommandLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceDeviceCommandLogsRequest();
    $request->deviceId = 'vitae';
    $request->endingBefore = 'pariatur';
    $request->networkId = 'numquam';
    $request->perPage = 590573;
    $request->startingAfter = 'quia';

    $response = $sdk->devices->getNetworkSmDeviceDeviceCommandLogs($request);

    if ($response->getNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceDeviceProfiles

Get the installed profiles associated with a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceDeviceProfilesRequest();
    $request->deviceId = 'reiciendis';
    $request->networkId = 'modi';

    $response = $sdk->devices->getNetworkSmDeviceDeviceProfiles($request);

    if ($response->getNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceNetworkAdapters

List the network adapters of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceNetworkAdaptersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceNetworkAdaptersRequest();
    $request->deviceId = 'doloribus';
    $request->networkId = 'et';

    $response = $sdk->devices->getNetworkSmDeviceNetworkAdapters($request);

    if ($response->getNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDevicePerformanceHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDevicePerformanceHistoryRequest();
    $request->deviceId = 'qui';
    $request->endingBefore = 'iusto';
    $request->networkId = 'a';
    $request->perPage = 694148;
    $request->startingAfter = 'aperiam';

    $response = $sdk->devices->getNetworkSmDevicePerformanceHistory($request);

    if ($response->getNetworkSmDevicePerformanceHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceRestrictions

List the restrictions on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceRestrictionsRequest();
    $request->deviceId = 'saepe';
    $request->networkId = 'voluptatem';

    $response = $sdk->devices->getNetworkSmDeviceRestrictions($request);

    if ($response->getNetworkSmDeviceRestrictions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceSecurityCenters

List the security centers on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceSecurityCentersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceSecurityCentersRequest();
    $request->deviceId = 'soluta';
    $request->networkId = 'hic';

    $response = $sdk->devices->getNetworkSmDeviceSecurityCenters($request);

    if ($response->getNetworkSmDeviceSecurityCenters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceSoftwares

Get a list of softwares associated with a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceSoftwaresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceSoftwaresRequest();
    $request->deviceId = 'beatae';
    $request->networkId = 'delectus';

    $response = $sdk->devices->getNetworkSmDeviceSoftwares($request);

    if ($response->getNetworkSmDeviceSoftwares200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceWlanLists

List the saved SSID names on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceWlanListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceWlanListsRequest();
    $request->deviceId = 'deleniti';
    $request->networkId = 'fugit';

    $response = $sdk->devices->getNetworkSmDeviceWlanLists($request);

    if ($response->getNetworkSmDeviceWlanLists200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDevices

List the devices enrolled in an SM network with various specified fields and filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDevicesRequest();
    $request->endingBefore = 'inventore';
    $request->fields = [
        'sint',
        'dignissimos',
    ];
    $request->ids = [
        'nulla',
        'consequatur',
        'similique',
    ];
    $request->networkId = 'eligendi';
    $request->perPage = 774567;
    $request->scope = [
        'odio',
        'voluptate',
        'mollitia',
    ];
    $request->serials = [
        'tempore',
        'voluptate',
        'cum',
        'esse',
    ];
    $request->startingAfter = 'alias';
    $request->wifiMacs = [
        'architecto',
    ];

    $response = $sdk->devices->getNetworkSmDevices($request);

    if ($response->getNetworkSmDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDevicesConnectionStatsRequest();
    $request->apTag = 'est';
    $request->band = GetNetworkWirelessDevicesConnectionStatsBandEnum::FIVE;
    $request->networkId = 'magni';
    $request->ssid = 61197;
    $request->t0 = 'quaerat';
    $request->t1 = 'suscipit';
    $request->timespan = 6991.91;
    $request->vlan = 389567;

    $response = $sdk->devices->getNetworkWirelessDevicesConnectionStats($request);

    if ($response->getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDevicesLatencyStatsRequest();
    $request->apTag = 'aliquam';
    $request->band = GetNetworkWirelessDevicesLatencyStatsBandEnum::SIX;
    $request->fields = 'unde';
    $request->networkId = 'excepturi';
    $request->ssid = 976712;
    $request->t0 = 'facilis';
    $request->t1 = 'doloremque';
    $request->timespan = 8871.99;
    $request->vlan = 394208;

    $response = $sdk->devices->getNetworkWirelessDevicesLatencyStats($request);

    if ($response->getNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesProductTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesRequest();
    $request->configurationUpdatedAfter = 'reprehenderit';
    $request->endingBefore = 'necessitatibus';
    $request->mac = 'alias';
    $request->macs = [
        'ut',
        'hic',
        'facere',
    ];
    $request->model = 'tenetur';
    $request->models = [
        'assumenda',
        'exercitationem',
        'exercitationem',
        'dolore',
    ];
    $request->name = 'Sophie Wilkinson';
    $request->networkIds = [
        'velit',
        'ut',
        'est',
    ];
    $request->organizationId = 'quasi';
    $request->perPage = 702183;
    $request->productTypes = [
        GetOrganizationDevicesProductTypesEnum::WIRELESS,
        GetOrganizationDevicesProductTypesEnum::WIRELESS,
        GetOrganizationDevicesProductTypesEnum::SWITCH,
    ];
    $request->sensorAlertProfileIds = [
        'reprehenderit',
        'dolorem',
        'sunt',
    ];
    $request->sensorMetrics = [
        'nulla',
        'cumque',
        'aperiam',
    ];
    $request->serial = 'ad';
    $request->serials = [
        'quas',
        'quis',
        'fuga',
        'eveniet',
    ];
    $request->startingAfter = 'consequuntur';
    $request->tags = [
        'delectus',
        'rerum',
        'voluptate',
        'perferendis',
    ];
    $request->tagsFilterType = GetOrganizationDevicesTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->devices->getOrganizationDevices($request);

    if ($response->getOrganizationDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesAvailabilitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesAvailabilitiesRequest();
    $request->endingBefore = 'harum';
    $request->networkIds = [
        'molestias',
    ];
    $request->organizationId = 'odio';
    $request->perPage = 252183;
    $request->productTypes = [
        'sint',
    ];
    $request->serials = [
        'illum',
    ];
    $request->startingAfter = 'adipisci';
    $request->tags = [
        'ex',
    ];
    $request->tagsFilterType = GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->devices->getOrganizationDevicesAvailabilities($request);

    if ($response->getOrganizationDevicesAvailabilities200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesPowerModulesStatusesByDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest();
    $request->endingBefore = 'eum';
    $request->networkIds = [
        'officiis',
    ];
    $request->organizationId = 'quo';
    $request->perPage = 635677;
    $request->productTypes = [
        'iure',
    ];
    $request->serials = [
        'doloribus',
        'praesentium',
        'iste',
        'tempora',
    ];
    $request->startingAfter = 'ad';
    $request->tags = [
        'harum',
    ];
    $request->tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->devices->getOrganizationDevicesPowerModulesStatusesByDevice($request);

    if ($response->getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesStatuses

List the status of every Meraki device in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesProductTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesStatusesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesStatusesRequest();
    $request->endingBefore = 'ducimus';
    $request->models = [
        'accusamus',
        'officiis',
    ];
    $request->networkIds = [
        'nam',
        'nemo',
        'veritatis',
        'molestias',
    ];
    $request->organizationId = 'impedit';
    $request->perPage = 265773;
    $request->productTypes = [
        GetOrganizationDevicesStatusesProductTypesEnum::SWITCH,
        GetOrganizationDevicesStatusesProductTypesEnum::APPLIANCE,
        GetOrganizationDevicesStatusesProductTypesEnum::WIRELESS,
        GetOrganizationDevicesStatusesProductTypesEnum::SWITCH,
    ];
    $request->serials = [
        'dolor',
        'nemo',
        'quis',
        'quasi',
    ];
    $request->startingAfter = 'odit';
    $request->statuses = [
        GetOrganizationDevicesStatusesStatusesEnum::ALERTING,
        GetOrganizationDevicesStatusesStatusesEnum::DORMANT,
        GetOrganizationDevicesStatusesStatusesEnum::ONLINE,
        GetOrganizationDevicesStatusesStatusesEnum::DORMANT,
    ];
    $request->tags = [
        'enim',
        'nam',
        'dignissimos',
        'consequuntur',
    ];
    $request->tagsFilterType = GetOrganizationDevicesStatusesTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->devices->getOrganizationDevicesStatuses($request);

    if ($response->getOrganizationDevicesStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesStatusesOverview

Return an overview of current device statuses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesOverviewProductTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesStatusesOverviewRequest();
    $request->networkIds = [
        'doloribus',
    ];
    $request->organizationId = 'nemo';
    $request->productTypes = [
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::SENSOR,
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::CELLULAR_GATEWAY,
    ];

    $response = $sdk->devices->getOrganizationDevicesStatusesOverview($request);

    if ($response->getOrganizationDevicesStatusesOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksAddressesByDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesUplinksAddressesByDeviceRequest();
    $request->endingBefore = 'commodi';
    $request->networkIds = [
        'est',
        'consequatur',
        'incidunt',
    ];
    $request->organizationId = 'dolores';
    $request->perPage = 289952;
    $request->productTypes = [
        'consequatur',
        'voluptatem',
        'officia',
        'architecto',
    ];
    $request->serials = [
        'autem',
        'voluptates',
        'tempore',
        'cupiditate',
    ];
    $request->startingAfter = 'modi';
    $request->tags = [
        'aliquam',
    ];
    $request->tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->devices->getOrganizationDevicesUplinksAddressesByDevice($request);

    if ($response->getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksLossAndLatencyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesUplinksLossAndLatencyRequest();
    $request->ip = 'aliquam';
    $request->organizationId = 'corporis';
    $request->t0 = 'at';
    $request->t1 = 'ipsa';
    $request->timespan = 2260.97;
    $request->uplink = GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum::CELLULAR;

    $response = $sdk->devices->getOrganizationDevicesUplinksLossAndLatency($request);

    if ($response->getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryDevice

Return a single device from the inventory of an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryDeviceRequest();
    $request->organizationId = 'molestias';
    $request->serial = 'quaerat';

    $response = $sdk->devices->getOrganizationInventoryDevice($request);

    if ($response->getOrganizationInventoryDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryDevices

Return the device inventory for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesProductTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesTagsFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesUsedStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryDevicesRequest();
    $request->endingBefore = 'repellat';
    $request->macs = [
        'libero',
        'mollitia',
        'quis',
    ];
    $request->models = [
        'cumque',
        'vero',
        'a',
        'tenetur',
    ];
    $request->networkIds = [
        'quod',
        'facilis',
    ];
    $request->orderNumbers = [
        'illo',
    ];
    $request->organizationId = 'reiciendis';
    $request->perPage = 895297;
    $request->productTypes = [
        GetOrganizationInventoryDevicesProductTypesEnum::APPLIANCE,
        GetOrganizationInventoryDevicesProductTypesEnum::WIRELESS,
    ];
    $request->search = 'ipsam';
    $request->serials = [
        'atque',
    ];
    $request->startingAfter = 'animi';
    $request->tags = [
        'ad',
        'mollitia',
    ];
    $request->tagsFilterType = GetOrganizationInventoryDevicesTagsFilterTypeEnum::WITH_ANY_TAGS;
    $request->usedState = GetOrganizationInventoryDevicesUsedStateEnum::USED;

    $response = $sdk->devices->getOrganizationInventoryDevices($request);

    if ($response->getOrganizationInventoryDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopDevicesByUsage

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopDevicesByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopDevicesByUsageRequest();
    $request->organizationId = 'explicabo';
    $request->t0 = 'distinctio';
    $request->t1 = 'praesentium';
    $request->timespan = 3541.39;

    $response = $sdk->devices->getOrganizationSummaryTopDevicesByUsage($request);

    if ($response->getOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopDevicesModelsByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopDevicesModelsByUsageRequest();
    $request->organizationId = 'maiores';
    $request->t0 = 'corrupti';
    $request->t1 = 'libero';
    $request->timespan = 8121.86;

    $response = $sdk->devices->getOrganizationSummaryTopDevicesModelsByUsage($request);

    if ($response->getOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWirelessDevicesEthernetStatusesRequest();
    $request->endingBefore = 'explicabo';
    $request->networkIds = [
        'animi',
        'expedita',
        'laborum',
        'atque',
    ];
    $request->organizationId = 'assumenda';
    $request->perPage = 673261;
    $request->startingAfter = 'magnam';

    $response = $sdk->devices->getOrganizationWirelessDevicesEthernetStatuses($request);

    if ($response->getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lockNetworkSmDevices

Lock a set of devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LockNetworkSmDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\LockNetworkSmDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LockNetworkSmDevicesRequest();
    $request->requestBody = new LockNetworkSmDevicesRequestBody();
    $request->requestBody->ids = [
        'fugit',
    ];
    $request->requestBody->pin = 471317;
    $request->requestBody->scope = [
        'nulla',
        'nemo',
        'omnis',
        'iure',
    ];
    $request->requestBody->serials = [
        'sapiente',
        'eius',
        'esse',
        'quasi',
    ];
    $request->requestBody->wifiMacs = [
        'similique',
    ];
    $request->networkId = 'id';

    $response = $sdk->devices->lockNetworkSmDevices($request);

    if ($response->lockNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyNetworkSmDevicesTags

Add, delete, or update the tags of a set of devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyNetworkSmDevicesTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ModifyNetworkSmDevicesTagsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyNetworkSmDevicesTagsRequest();
    $request->requestBody = new ModifyNetworkSmDevicesTagsRequestBody();
    $request->requestBody->ids = [
        'distinctio',
    ];
    $request->requestBody->scope = [
        'nihil',
        'numquam',
        'rerum',
        'atque',
    ];
    $request->requestBody->serials = [
        'placeat',
        'necessitatibus',
    ];
    $request->requestBody->tags = [
        'impedit',
        'ducimus',
        'incidunt',
        'voluptatibus',
    ];
    $request->requestBody->updateAction = 'nihil';
    $request->requestBody->wifiMacs = [
        'nam',
        'incidunt',
    ];
    $request->networkId = 'deleniti';

    $response = $sdk->devices->modifyNetworkSmDevicesTags($request);

    if ($response->modifyNetworkSmDevicesTags200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveNetworkSmDevices

Move a set of devices to a new network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveNetworkSmDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\MoveNetworkSmDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveNetworkSmDevicesRequest();
    $request->requestBody = new MoveNetworkSmDevicesRequestBody();
    $request->requestBody->ids = [
        'totam',
        'soluta',
    ];
    $request->requestBody->newNetwork = 'quibusdam';
    $request->requestBody->scope = [
        'mollitia',
        'autem',
    ];
    $request->requestBody->serials = [
        'perferendis',
        'tempora',
        'aliquam',
        'architecto',
    ];
    $request->requestBody->wifiMacs = [
        'qui',
        'maxime',
        'ratione',
        'soluta',
    ];
    $request->networkId = 'quos';

    $response = $sdk->devices->moveNetworkSmDevices($request);

    if ($response->moveNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootDevice

Reboot a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootDeviceRequest();
    $request->serial = 'sit';

    $response = $sdk->devices->rebootDevice($request);

    if ($response->rebootDevice202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshNetworkSmDeviceDetails

Refresh the details of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RefreshNetworkSmDeviceDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshNetworkSmDeviceDetailsRequest();
    $request->deviceId = 'laudantium';
    $request->networkId = 'sit';

    $response = $sdk->devices->refreshNetworkSmDeviceDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNetworkDevices

Remove a single device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveNetworkDevicesRequest();
    $request->requestBody = new RemoveNetworkDevicesRequestBody();
    $request->requestBody->serial = 'perspiciatis';
    $request->networkId = 'quaerat';

    $response = $sdk->devices->removeNetworkDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unenrollNetworkSmDevice

Unenroll a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnenrollNetworkSmDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnenrollNetworkSmDeviceRequest();
    $request->deviceId = 'nesciunt';
    $request->networkId = 'molestiae';

    $response = $sdk->devices->unenrollNetworkSmDevice($request);

    if ($response->unenrollNetworkSmDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDevice

Update the attributes of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceRequest();
    $request->requestBody = new UpdateDeviceRequestBody();
    $request->requestBody->address = '90302 Khalil Roads';
    $request->requestBody->floorPlanId = 'voluptates';
    $request->requestBody->lat = 7001.12;
    $request->requestBody->lng = 7386.39;
    $request->requestBody->moveMapMarker = false;
    $request->requestBody->name = 'Ismael Bahringer';
    $request->requestBody->notes = 'sunt';
    $request->requestBody->switchProfileId = 'quis';
    $request->requestBody->tags = [
        'iure',
        'quidem',
        'quod',
    ];
    $request->serial = 'a';

    $response = $sdk->devices->updateDevice($request);

    if ($response->updateDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularSims

Updates the SIM and APN configurations for a cellular device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimFailover;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySims;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsSlotEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularSimsRequest();
    $request->requestBody = new UpdateDeviceCellularSimsRequestBody();
    $request->requestBody->simFailover = new UpdateDeviceCellularSimsRequestBodySimFailover();
    $request->requestBody->simFailover->enabled = false;
    $request->requestBody->sims = [
        new UpdateDeviceCellularSimsRequestBodySims(),
    ];
    $request->serial = 'ipsam';

    $response = $sdk->devices->updateDeviceCellularSims($request);

    if ($response->updateDeviceCellularSims200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceManagementInterface

Update the management interface settings for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceManagementInterfaceRequest();
    $request->requestBody = new UpdateDeviceManagementInterfaceRequestBody();
    $request->requestBody->wan1 = new UpdateDeviceManagementInterfaceRequestBodyWan1();
    $request->requestBody->wan1->staticDns = [
        'exercitationem',
    ];
    $request->requestBody->wan1->staticGatewayIp = 'minima';
    $request->requestBody->wan1->staticIp = 'laudantium';
    $request->requestBody->wan1->staticSubnetMask = 'quibusdam';
    $request->requestBody->wan1->usingStaticIp = false;
    $request->requestBody->wan1->vlan = 684938;
    $request->requestBody->wan1->wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum::NOT_CONFIGURED;
    $request->requestBody->wan2 = new UpdateDeviceManagementInterfaceRequestBodyWan2();
    $request->requestBody->wan2->staticDns = [
        'corporis',
        'nam',
        'itaque',
    ];
    $request->requestBody->wan2->staticGatewayIp = 'suscipit';
    $request->requestBody->wan2->staticIp = 'porro';
    $request->requestBody->wan2->staticSubnetMask = 'nulla';
    $request->requestBody->wan2->usingStaticIp = false;
    $request->requestBody->wan2->vlan = 10447;
    $request->requestBody->wan2->wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum::DISABLED;
    $request->serial = 'in';

    $response = $sdk->devices->updateDeviceManagementInterface($request);

    if ($response->updateDeviceManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSmDevicesFields

Modify the fields of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSmDevicesFieldsRequest();
    $request->requestBody = new UpdateNetworkSmDevicesFieldsRequestBody();
    $request->requestBody->deviceFields = new UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields();
    $request->requestBody->deviceFields->name = 'Gina Rutherford';
    $request->requestBody->deviceFields->notes = 'ut';
    $request->requestBody->id = 'aa432b47-e176-43c5-a08c-23e9802d82f0';
    $request->requestBody->serial = 'repellendus';
    $request->requestBody->wifiMac = 'magnam';
    $request->networkId = 'quis';

    $response = $sdk->devices->updateNetworkSmDevicesFields($request);

    if ($response->updateNetworkSmDevicesFields200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequest;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequestBodySizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmxNetworkDevicesClaimRequest();
    $request->requestBody = new VmxNetworkDevicesClaimRequestBody();
    $request->requestBody->size = VmxNetworkDevicesClaimRequestBodySizeEnum::SMALL;
    $request->networkId = 'soluta';

    $response = $sdk->devices->vmxNetworkDevicesClaim($request);

    if ($response->vmxNetworkDevicesClaim200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## wipeNetworkSmDevices

Wipe a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WipeNetworkSmDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\WipeNetworkSmDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WipeNetworkSmDevicesRequest();
    $request->requestBody = new WipeNetworkSmDevicesRequestBody();
    $request->requestBody->id = '4a8b674e-e5cf-4c18-adc7-f787e32e04b3';
    $request->requestBody->pin = 863492;
    $request->requestBody->serial = 'velit';
    $request->requestBody->wifiMac = 'necessitatibus';
    $request->networkId = 'facere';

    $response = $sdk->devices->wipeNetworkSmDevices($request);

    if ($response->wipeNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
