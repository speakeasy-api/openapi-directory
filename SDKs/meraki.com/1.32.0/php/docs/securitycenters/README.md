# securityCenters

### Available Operations

* [getNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device

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
    $request->deviceId = 'earum';
    $request->networkId = 'illum';

    $response = $sdk->securityCenters->getNetworkSmDeviceSecurityCenters($request);

    if ($response->getNetworkSmDeviceSecurityCenters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
