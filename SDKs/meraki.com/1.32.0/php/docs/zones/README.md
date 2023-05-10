# zones

### Available Operations

* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

## getDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZoneHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsZoneHistoryRequest();
    $request->objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum::PERSON;
    $request->resolution = 858565;
    $request->serial = 'alias';
    $request->t0 = 'provident';
    $request->t1 = 'corporis';
    $request->timespan = 2127.11;
    $request->zoneId = 'placeat';

    $response = $sdk->zones->getDeviceCameraAnalyticsZoneHistory($request);

    if ($response->getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZonesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsZonesRequest();
    $request->serial = 'molestias';

    $response = $sdk->zones->getDeviceCameraAnalyticsZones($request);

    if ($response->getDeviceCameraAnalyticsZones200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
