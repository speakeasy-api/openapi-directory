# userAccessDevices

### Available Operations

* [deleteNetworkSmUserAccessDevice](#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [getNetworkSmUserAccessDevices](#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections

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
    $request->networkId = 'sint';
    $request->userAccessDeviceId = 'repellendus';

    $response = $sdk->userAccessDevices->deleteNetworkSmUserAccessDevice($request);

    if ($response->statusCode === 200) {
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
    $request->endingBefore = 'minima';
    $request->networkId = 'numquam';
    $request->perPage = 70077;
    $request->startingAfter = 'expedita';

    $response = $sdk->userAccessDevices->getNetworkSmUserAccessDevices($request);

    if ($response->getNetworkSmUserAccessDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
