# certs

### Available Operations

* [getNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device

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
    $request->deviceId = 'provident';
    $request->networkId = 'laudantium';

    $response = $sdk->certs->getNetworkSmDeviceCerts($request);

    if ($response->getNetworkSmDeviceCerts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
