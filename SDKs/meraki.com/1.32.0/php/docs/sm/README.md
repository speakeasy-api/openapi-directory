# sm

### Available Operations

* [checkinNetworkSmDevices](#checkinnetworksmdevices) - Force check-in a set of devices
* [createNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [createNetworkSmTargetGroup](#createnetworksmtargetgroup) - Add a target group
* [deleteNetworkSmTargetGroup](#deletenetworksmtargetgroup) - Delete a target group from a network
* [deleteNetworkSmUserAccessDevice](#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [getNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
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
* [getNetworkSmProfiles](#getnetworksmprofiles) - List all profiles in a network
* [getNetworkSmTargetGroup](#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](#getnetworksmtargetgroups) - List the target groups in this network
* [getNetworkSmTrustedAccessConfigs](#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [getNetworkSmUserAccessDevices](#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [getOrganizationSmApnsCert](#getorganizationsmapnscert) - Get the organization's APNS certificate
* [getOrganizationSmVppAccount](#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [getOrganizationSmVppAccounts](#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [lockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [modifyNetworkSmDevicesTags](#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [moveNetworkSmDevices](#movenetworksmdevices) - Move a set of devices to a new network
* [refreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [unenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [updateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device
* [updateNetworkSmTargetGroup](#updatenetworksmtargetgroup) - Update a target group
* [wipeNetworkSmDevices](#wipenetworksmdevices) - Wipe a device

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
        'quos',
        'optio',
    ];
    $request->requestBody->scope = [
        'libero',
    ];
    $request->requestBody->serials = [
        'in',
        'tempore',
        'ut',
    ];
    $request->requestBody->wifiMacs = [
        'eaque',
        'tempora',
    ];
    $request->networkId = 'aut';

    $response = $sdk->sm->checkinNetworkSmDevices($request);

    if ($response->checkinNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmBypassActivationLockAttemptRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmBypassActivationLockAttemptRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSmBypassActivationLockAttemptRequest();
    $request->requestBody = new CreateNetworkSmBypassActivationLockAttemptRequestBody();
    $request->requestBody->ids = [
        'aut',
        'assumenda',
        'excepturi',
        'quos',
    ];
    $request->networkId = 'necessitatibus';

    $response = $sdk->sm->createNetworkSmBypassActivationLockAttempt($request);

    if ($response->createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSmTargetGroup

Add a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmTargetGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSmTargetGroupRequest();
    $request->requestBody = new CreateNetworkSmTargetGroupRequestBody();
    $request->requestBody->name = 'Laurence Langworth';
    $request->requestBody->scope = 'nostrum';
    $request->networkId = 'officiis';

    $response = $sdk->sm->createNetworkSmTargetGroup($request);

    if ($response->createNetworkSmTargetGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSmTargetGroup

Delete a target group from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSmTargetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSmTargetGroupRequest();
    $request->networkId = 'adipisci';
    $request->targetGroupId = 'alias';

    $response = $sdk->sm->deleteNetworkSmTargetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSmUserAccessDevice

Delete a User Access Device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSmUserAccessDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSmUserAccessDeviceRequest();
    $request->networkId = 'nisi';
    $request->userAccessDeviceId = 'voluptatibus';

    $response = $sdk->sm->deleteNetworkSmUserAccessDevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmBypassActivationLockAttemptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmBypassActivationLockAttemptRequest();
    $request->attemptId = 'corporis';
    $request->networkId = 'nostrum';

    $response = $sdk->sm->getNetworkSmBypassActivationLockAttempt($request);

    if ($response->getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject !== null) {
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
    $request->deviceId = 'molestiae';
    $request->networkId = 'aliquid';

    $response = $sdk->sm->getNetworkSmDeviceCellularUsageHistory($request);

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
    $request->deviceId = 'maiores';
    $request->networkId = 'nemo';

    $response = $sdk->sm->getNetworkSmDeviceCerts($request);

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
    $request->deviceId = 'quisquam';
    $request->endingBefore = 'quibusdam';
    $request->networkId = 'voluptates';
    $request->perPage = 736793;
    $request->startingAfter = 'consequatur';

    $response = $sdk->sm->getNetworkSmDeviceConnectivity($request);

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
    $request->deviceId = 'eos';
    $request->endingBefore = 'totam';
    $request->networkId = 'ea';
    $request->perPage = 865272;
    $request->startingAfter = 'alias';

    $response = $sdk->sm->getNetworkSmDeviceDesktopLogs($request);

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
    $request->deviceId = 'distinctio';
    $request->endingBefore = 'maxime';
    $request->networkId = 'aliquam';
    $request->perPage = 236280;
    $request->startingAfter = 'harum';

    $response = $sdk->sm->getNetworkSmDeviceDeviceCommandLogs($request);

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
    $request->deviceId = 'veritatis';
    $request->networkId = 'quas';

    $response = $sdk->sm->getNetworkSmDeviceDeviceProfiles($request);

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
    $request->deviceId = 'id';
    $request->networkId = 'expedita';

    $response = $sdk->sm->getNetworkSmDeviceNetworkAdapters($request);

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
    $request->deviceId = 'ipsum';
    $request->endingBefore = 'molestiae';
    $request->networkId = 'corrupti';
    $request->perPage = 958048;
    $request->startingAfter = 'consequuntur';

    $response = $sdk->sm->getNetworkSmDevicePerformanceHistory($request);

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
    $request->deviceId = 'asperiores';
    $request->networkId = 'quisquam';

    $response = $sdk->sm->getNetworkSmDeviceRestrictions($request);

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
    $request->deviceId = 'maiores';
    $request->networkId = 'maiores';

    $response = $sdk->sm->getNetworkSmDeviceSecurityCenters($request);

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
    $request->deviceId = 'laudantium';
    $request->networkId = 'beatae';

    $response = $sdk->sm->getNetworkSmDeviceSoftwares($request);

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
    $request->deviceId = 'assumenda';
    $request->networkId = 'quibusdam';

    $response = $sdk->sm->getNetworkSmDeviceWlanLists($request);

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
    $request->endingBefore = 'hic';
    $request->fields = [
        'vero',
        'eaque',
    ];
    $request->ids = [
        'totam',
        'repellat',
        'iusto',
    ];
    $request->networkId = 'labore';
    $request->perPage = 891413;
    $request->scope = [
        'quis',
        'quaerat',
        'eligendi',
        'sint',
    ];
    $request->serials = [
        'ab',
    ];
    $request->startingAfter = 'laboriosam';
    $request->wifiMacs = [
        'atque',
        'unde',
        'qui',
        'aliquid',
    ];

    $response = $sdk->sm->getNetworkSmDevices($request);

    if ($response->getNetworkSmDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmProfiles

List all profiles in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmProfilesRequest();
    $request->networkId = 'sequi';

    $response = $sdk->sm->getNetworkSmProfiles($request);

    if ($response->getNetworkSmProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmTargetGroup

Return a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTargetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTargetGroupRequest();
    $request->networkId = 'quae';
    $request->targetGroupId = 'velit';
    $request->withDetails = false;

    $response = $sdk->sm->getNetworkSmTargetGroup($request);

    if ($response->getNetworkSmTargetGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmTargetGroups

List the target groups in this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTargetGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTargetGroupsRequest();
    $request->networkId = 'libero';
    $request->withDetails = false;

    $response = $sdk->sm->getNetworkSmTargetGroups($request);

    if ($response->getNetworkSmTargetGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmTrustedAccessConfigs

List Trusted Access Configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTrustedAccessConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTrustedAccessConfigsRequest();
    $request->endingBefore = 'soluta';
    $request->networkId = 'eum';
    $request->perPage = 943491;
    $request->startingAfter = 'quo';

    $response = $sdk->sm->getNetworkSmTrustedAccessConfigs($request);

    if ($response->getNetworkSmTrustedAccessConfigs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserAccessDevices

List User Access Devices and its Trusted Access Connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserAccessDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserAccessDevicesRequest();
    $request->endingBefore = 'explicabo';
    $request->networkId = 'quo';
    $request->perPage = 547940;
    $request->startingAfter = 'illum';

    $response = $sdk->sm->getNetworkSmUserAccessDevices($request);

    if ($response->getNetworkSmUserAccessDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserDeviceProfiles

Get the profiles associated with a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserDeviceProfilesRequest();
    $request->networkId = 'fugit';
    $request->userId = 'reprehenderit';

    $response = $sdk->sm->getNetworkSmUserDeviceProfiles($request);

    if ($response->getNetworkSmUserDeviceProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserSoftwares

Get a list of softwares associated with a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserSoftwaresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserSoftwaresRequest();
    $request->networkId = 'eaque';
    $request->userId = 'inventore';

    $response = $sdk->sm->getNetworkSmUserSoftwares($request);

    if ($response->getNetworkSmUserSoftwares200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUsers

List the owners in an SM network with various specified fields and filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUsersRequest();
    $request->emails = [
        'unde',
    ];
    $request->ids = [
        'quidem',
        'vel',
    ];
    $request->networkId = 'autem';
    $request->scope = [
        'fugiat',
        'laboriosam',
        'necessitatibus',
    ];
    $request->usernames = [
        'recusandae',
    ];

    $response = $sdk->sm->getNetworkSmUsers($request);

    if ($response->getNetworkSmUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSmApnsCert

Get the organization's APNS certificate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmApnsCertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmApnsCertRequest();
    $request->organizationId = 'quasi';

    $response = $sdk->sm->getOrganizationSmApnsCert($request);

    if ($response->getOrganizationSmApnsCert200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSmVppAccount

Get a hash containing the unparsed token of the VPP account with the given ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmVppAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmVppAccountRequest();
    $request->organizationId = 'pariatur';
    $request->vppAccountId = 'excepturi';

    $response = $sdk->sm->getOrganizationSmVppAccount($request);

    if ($response->getOrganizationSmVppAccount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSmVppAccounts

List the VPP accounts in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmVppAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmVppAccountsRequest();
    $request->organizationId = 'fugiat';

    $response = $sdk->sm->getOrganizationSmVppAccounts($request);

    if ($response->getOrganizationSmVppAccounts200ApplicationJSONObjects !== null) {
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
        'libero',
    ];
    $request->requestBody->pin = 377150;
    $request->requestBody->scope = [
        'perferendis',
        'nesciunt',
    ];
    $request->requestBody->serials = [
        'quaerat',
    ];
    $request->requestBody->wifiMacs = [
        'dicta',
        'sunt',
        'id',
    ];
    $request->networkId = 'id';

    $response = $sdk->sm->lockNetworkSmDevices($request);

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
        'nulla',
    ];
    $request->requestBody->scope = [
        'at',
        'magni',
    ];
    $request->requestBody->serials = [
        'modi',
    ];
    $request->requestBody->tags = [
        'assumenda',
        'debitis',
    ];
    $request->requestBody->updateAction = 'perspiciatis';
    $request->requestBody->wifiMacs = [
        'dolorem',
        'pariatur',
        'labore',
    ];
    $request->networkId = 'laboriosam';

    $response = $sdk->sm->modifyNetworkSmDevicesTags($request);

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
        'ducimus',
    ];
    $request->requestBody->newNetwork = 'eaque';
    $request->requestBody->scope = [
        'iusto',
        'eum',
        'quos',
        'est',
    ];
    $request->requestBody->serials = [
        'vel',
        'nobis',
        'facilis',
    ];
    $request->requestBody->wifiMacs = [
        'iste',
    ];
    $request->networkId = 'totam';

    $response = $sdk->sm->moveNetworkSmDevices($request);

    if ($response->moveNetworkSmDevices200ApplicationJSONObject !== null) {
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
    $request->deviceId = 'reprehenderit';
    $request->networkId = 'voluptatum';

    $response = $sdk->sm->refreshNetworkSmDeviceDetails($request);

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
    $request->deviceId = 'corrupti';
    $request->networkId = 'sequi';

    $response = $sdk->sm->unenrollNetworkSmDevice($request);

    if ($response->unenrollNetworkSmDevice200ApplicationJSONObject !== null) {
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
    $request->requestBody->deviceFields->name = 'Jordan Thiel';
    $request->requestBody->deviceFields->notes = 'architecto';
    $request->requestBody->id = 'bbf71433-56f6-4349-a164-249b211ce46b';
    $request->requestBody->serial = 'iste';
    $request->requestBody->wifiMac = 'nemo';
    $request->networkId = 'veritatis';

    $response = $sdk->sm->updateNetworkSmDevicesFields($request);

    if ($response->updateNetworkSmDevicesFields200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSmTargetGroup

Update a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmTargetGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSmTargetGroupRequest();
    $request->requestBody = new UpdateNetworkSmTargetGroupRequestBody();
    $request->requestBody->name = 'Erin Cassin II';
    $request->requestBody->scope = 'atque';
    $request->networkId = 'optio';
    $request->targetGroupId = 'culpa';

    $response = $sdk->sm->updateNetworkSmTargetGroup($request);

    if ($response->updateNetworkSmTargetGroup200ApplicationJSONObject !== null) {
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
    $request->requestBody->id = '9142f052-632b-431c-ad69-2ffc8745005e';
    $request->requestBody->pin = 612456;
    $request->requestBody->serial = 'pariatur';
    $request->requestBody->wifiMac = 'velit';
    $request->networkId = 'temporibus';

    $response = $sdk->sm->wipeNetworkSmDevices($request);

    if ($response->wipeNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
