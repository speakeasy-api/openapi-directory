# fastSendDeviceValues

### Available Operations

* [fastSendDeviceValuesGet](#fastsenddevicevaluesget) - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

## fastSendDeviceValuesGet

Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FastSendDeviceValuesGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FastSendDeviceValuesGetRequest();
    $request->id = 'bf486333-23f9-4b77-b3a4-100674ebf692';

    $response = $sdk->fastSendDeviceValues->fastSendDeviceValuesGet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
