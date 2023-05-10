# desktopLogs

### Available Operations

* [getNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.

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
    $request->deviceId = 'inventore';
    $request->endingBefore = 'perspiciatis';
    $request->networkId = 'perferendis';
    $request->perPage = 358157;
    $request->startingAfter = 'ullam';

    $response = $sdk->desktopLogs->getNetworkSmDeviceDesktopLogs($request);

    if ($response->getNetworkSmDeviceDesktopLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
