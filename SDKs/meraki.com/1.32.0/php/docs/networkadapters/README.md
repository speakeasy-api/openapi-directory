# networkAdapters

### Available Operations

* [getNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device

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
    $request->deviceId = 'incidunt';
    $request->networkId = 'totam';

    $response = $sdk->networkAdapters->getNetworkSmDeviceNetworkAdapters($request);

    if ($response->getNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
