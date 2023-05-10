# deviceProfiles

### Available Operations

* [getNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user

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
    $request->deviceId = 'itaque';
    $request->networkId = 'at';

    $response = $sdk->deviceProfiles->getNetworkSmDeviceDeviceProfiles($request);

    if ($response->getNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'nam';
    $request->userId = 'id';

    $response = $sdk->deviceProfiles->getNetworkSmUserDeviceProfiles($request);

    if ($response->getNetworkSmUserDeviceProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
