# connectivity

### Available Operations

* [getNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

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
    $request->deviceId = 'excepturi';
    $request->endingBefore = 'porro';
    $request->networkId = 'nesciunt';
    $request->perPage = 978631;
    $request->startingAfter = 'veniam';

    $response = $sdk->connectivity->getNetworkSmDeviceConnectivity($request);

    if ($response->getNetworkSmDeviceConnectivity200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
