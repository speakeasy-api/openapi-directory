# recent

### Available Operations

* [getDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones

## getDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsRecentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsRecentObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsRecentRequest();
    $request->objectType = GetDeviceCameraAnalyticsRecentObjectTypeEnum::VEHICLE;
    $request->serial = 'voluptates';

    $response = $sdk->recent->getDeviceCameraAnalyticsRecent($request);

    if ($response->getDeviceCameraAnalyticsRecent200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
