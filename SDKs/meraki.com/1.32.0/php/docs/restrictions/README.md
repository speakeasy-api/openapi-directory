# restrictions

### Available Operations

* [getNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device

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
    $request->deviceId = 'harum';
    $request->networkId = 'quae';

    $response = $sdk->restrictions->getNetworkSmDeviceRestrictions($request);

    if ($response->getNetworkSmDeviceRestrictions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
