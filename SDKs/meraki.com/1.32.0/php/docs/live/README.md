# live

### Available Operations

* [getDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones

## getDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsLiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsLiveRequest();
    $request->serial = 'quod';

    $response = $sdk->live->getDeviceCameraAnalyticsLive($request);

    if ($response->getDeviceCameraAnalyticsLive200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
