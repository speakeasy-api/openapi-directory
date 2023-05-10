# sm

### Available Operations

* [createNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [getNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [getNetworkSmCellularUsageHistory](#getnetworksmcellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmCerts](#getnetworksmcerts) - List the certs on a device
* [getNetworkSmConnectivity](#getnetworksmconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDesktopLogs](#getnetworksmdesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceCommandLogs](#getnetworksmdevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDeviceProfiles](#getnetworksmdeviceprofiles) - Get the profiles associated with a device
* [getNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkSmNetworkAdapters](#getnetworksmnetworkadapters) - List the network adapters of a device
* [getNetworkSmPerformanceHistory](#getnetworksmperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSmProfiles](#getnetworksmprofiles) - List all the profiles in the network
* [getNetworkSmRestrictions](#getnetworksmrestrictions) - List the restrictions on a device
* [getNetworkSmSecurityCenters](#getnetworksmsecuritycenters) - List the security centers on a device
* [getNetworkSmSoftwares](#getnetworksmsoftwares) - Get a list of softwares associated with a device
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [getNetworkSmWlanLists](#getnetworksmwlanlists) - List the saved SSID names on a device
* [lockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [refreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [unenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [updateNetworkSmDeviceFields](#updatenetworksmdevicefields) - Modify the fields of a device
* [updateNetworkSmDevicesTags](#updatenetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [wipeNetworkSmDevice](#wipenetworksmdevice) - Wipe a device

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
        'aperiam',
        'ea',
        'quaerat',
        'consequuntur',
    ];
    $request->networkId = 'repellendus';

    $response = $sdk->sm->createNetworkSmBypassActivationLockAttempt($request);

    if ($response->createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject !== null) {
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
    $request->attemptId = 'officia';
    $request->networkId = 'maxime';

    $response = $sdk->sm->getNetworkSmBypassActivationLockAttempt($request);

    if ($response->getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmCellularUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmCellularUsageHistoryRequest();
    $request->deviceId = 'dignissimos';
    $request->networkId = 'officia';

    $response = $sdk->sm->getNetworkSmCellularUsageHistory($request);

    if ($response->getNetworkSmCellularUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmCerts

List the certs on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmCertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmCertsRequest();
    $request->deviceId = 'asperiores';
    $request->networkId = 'nemo';

    $response = $sdk->sm->getNetworkSmCerts($request);

    if ($response->getNetworkSmCerts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmConnectivityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmConnectivityRequest();
    $request->endingBefore = 'quae';
    $request->id = '5cc413aa-63aa-4e8d-a786-4dbb675fd5e6';
    $request->networkId = 'aperiam';
    $request->perPage = 738683;
    $request->startingAfter = 'consectetur';

    $response = $sdk->sm->getNetworkSmConnectivity($request);

    if ($response->getNetworkSmConnectivity200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDesktopLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDesktopLogsRequest();
    $request->endingBefore = 'in';
    $request->id = '5ed4f6fb-ee41-4f33-b17f-e35b60eb1ea4';
    $request->networkId = 'aspernatur';
    $request->perPage = 379057;
    $request->startingAfter = 'voluptas';

    $response = $sdk->sm->getNetworkSmDesktopLogs($request);

    if ($response->getNetworkSmDesktopLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceCommandLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceCommandLogsRequest();
    $request->endingBefore = 'voluptas';
    $request->id = '5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2';
    $request->networkId = 'asperiores';
    $request->perPage = 707918;
    $request->startingAfter = 'voluptate';

    $response = $sdk->sm->getNetworkSmDeviceCommandLogs($request);

    if ($response->getNetworkSmDeviceCommandLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceProfiles

Get the profiles associated with a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceProfilesRequest();
    $request->deviceId = 'expedita';
    $request->networkId = 'ab';

    $response = $sdk->sm->getNetworkSmDeviceProfiles($request);

    if ($response->getNetworkSmDeviceProfiles200ApplicationJSONObjects !== null) {
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
    $request->batchSize = 611749;
    $request->batchToken = 'dolore';
    $request->fields = 'laborum';
    $request->ids = 'sed';
    $request->networkId = 'in';
    $request->scope = 'commodi';
    $request->serials = 'quidem';
    $request->wifiMacs = 'explicabo';

    $response = $sdk->sm->getNetworkSmDevices($request);

    if ($response->getNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmNetworkAdapters

List the network adapters of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmNetworkAdaptersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmNetworkAdaptersRequest();
    $request->deviceId = 'voluptas';
    $request->networkId = 'unde';

    $response = $sdk->sm->getNetworkSmNetworkAdapters($request);

    if ($response->getNetworkSmNetworkAdapters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmPerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmPerformanceHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmPerformanceHistoryRequest();
    $request->endingBefore = 'architecto';
    $request->id = '6fe1f08f-4294-4e36-98f4-47f603e8b445';
    $request->networkId = 'debitis';
    $request->perPage = 524970;
    $request->startingAfter = 'sit';

    $response = $sdk->sm->getNetworkSmPerformanceHistory($request);

    if ($response->getNetworkSmPerformanceHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmProfiles

List all the profiles in the network

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
    $request->networkId = 'nobis';

    $response = $sdk->sm->getNetworkSmProfiles($request);

    if ($response->getNetworkSmProfiles200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmRestrictions

List the restrictions on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmRestrictionsRequest();
    $request->deviceId = 'error';
    $request->networkId = 'veniam';

    $response = $sdk->sm->getNetworkSmRestrictions($request);

    if ($response->getNetworkSmRestrictions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmSecurityCenters

List the security centers on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmSecurityCentersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmSecurityCentersRequest();
    $request->deviceId = 'minima';
    $request->networkId = 'recusandae';

    $response = $sdk->sm->getNetworkSmSecurityCenters($request);

    if ($response->getNetworkSmSecurityCenters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmSoftwares

Get a list of softwares associated with a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmSoftwaresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmSoftwaresRequest();
    $request->deviceId = 'reiciendis';
    $request->networkId = 'nulla';

    $response = $sdk->sm->getNetworkSmSoftwares($request);

    if ($response->getNetworkSmSoftwares200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'magni';
    $request->userId = 'aperiam';

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
    $request->networkId = 'saepe';
    $request->userId = 'numquam';

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
    $request->emails = 'veniam';
    $request->ids = 'in';
    $request->networkId = 'officiis';
    $request->scope = 'beatae';
    $request->usernames = 'laudantium';

    $response = $sdk->sm->getNetworkSmUsers($request);

    if ($response->getNetworkSmUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmWlanLists

List the saved SSID names on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmWlanListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmWlanListsRequest();
    $request->deviceId = 'exercitationem';
    $request->networkId = 'praesentium';

    $response = $sdk->sm->getNetworkSmWlanLists($request);

    if ($response->getNetworkSmWlanLists200ApplicationJSONObjects !== null) {
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
    $request->requestBody->ids = 'cum';
    $request->requestBody->pin = 386827;
    $request->requestBody->scope = 'dolorum';
    $request->requestBody->serials = 'voluptatum';
    $request->requestBody->wifiMacs = 'error';
    $request->networkId = 'hic';

    $response = $sdk->sm->lockNetworkSmDevices($request);

    if ($response->lockNetworkSmDevices200ApplicationJSONObject !== null) {
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
    $request->deviceId = 'expedita';
    $request->networkId = 'debitis';

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
    $request->deviceId = 'neque';
    $request->networkId = 'dolorum';

    $response = $sdk->sm->unenrollNetworkSmDevice($request);

    if ($response->unenrollNetworkSmDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSmDeviceFields

Modify the fields of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDeviceFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDeviceFieldsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDeviceFieldsRequestBodyDeviceFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSmDeviceFieldsRequest();
    $request->requestBody = new UpdateNetworkSmDeviceFieldsRequestBody();
    $request->requestBody->deviceFields = new UpdateNetworkSmDeviceFieldsRequestBodyDeviceFields();
    $request->requestBody->deviceFields->name = 'Brandi Padberg';
    $request->requestBody->deviceFields->notes = 'tempora';
    $request->requestBody->id = '824d0ab4-0750-488e-9186-2065e904f3b1';
    $request->requestBody->serial = 'architecto';
    $request->requestBody->wifiMac = 'occaecati';
    $request->networkId = 'labore';

    $response = $sdk->sm->updateNetworkSmDeviceFields($request);

    if ($response->updateNetworkSmDeviceFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSmDevicesTags

Add, delete, or update the tags of a set of devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesTagsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSmDevicesTagsRequest();
    $request->requestBody = new UpdateNetworkSmDevicesTagsRequestBody();
    $request->requestBody->ids = 'quidem';
    $request->requestBody->scope = 'atque';
    $request->requestBody->serials = 'laborum';
    $request->requestBody->tags = 'nam';
    $request->requestBody->updateAction = 'tenetur';
    $request->requestBody->wifiMacs = 'laboriosam';
    $request->networkId = 'alias';

    $response = $sdk->sm->updateNetworkSmDevicesTags($request);

    if ($response->updateNetworkSmDevicesTags200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## wipeNetworkSmDevice

Wipe a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WipeNetworkSmDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\WipeNetworkSmDeviceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WipeNetworkSmDeviceRequest();
    $request->requestBody = new WipeNetworkSmDeviceRequestBody();
    $request->requestBody->id = '3a79f9df-e0ab-47da-8a50-ce187f86bc17';
    $request->requestBody->pin = 227759;
    $request->requestBody->serial = 'assumenda';
    $request->requestBody->wifiMac = 'ea';
    $request->networkId = 'atque';

    $response = $sdk->sm->wipeNetworkSmDevice($request);

    if ($response->wipeNetworkSmDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
