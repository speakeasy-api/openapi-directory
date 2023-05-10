# status

### Available Operations

* [getDeviceWirelessStatus](#getdevicewirelessstatus) - Return the SSID statuses of an access point

## getDeviceWirelessStatus

Return the SSID statuses of an access point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessStatusRequest();
    $request->serial = 'sint';

    $response = $sdk->status->getDeviceWirelessStatus($request);

    if ($response->getDeviceWirelessStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
