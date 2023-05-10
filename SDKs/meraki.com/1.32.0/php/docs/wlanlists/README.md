# wlanLists

### Available Operations

* [getNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device

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
    $request->deviceId = 'aperiam';
    $request->networkId = 'corrupti';

    $response = $sdk->wlanLists->getNetworkSmDeviceWlanLists($request);

    if ($response->getNetworkSmDeviceWlanLists200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
