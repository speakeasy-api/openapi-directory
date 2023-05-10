# analytics

### Available Operations

* [getDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

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
    $request->serial = 'adipisci';

    $response = $sdk->analytics->getDeviceCameraAnalyticsLive($request);

    if ($response->getDeviceCameraAnalyticsLive200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsOverviewObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsOverviewRequest();
    $request->objectType = GetDeviceCameraAnalyticsOverviewObjectTypeEnum::VEHICLE;
    $request->serial = 'temporibus';
    $request->t0 = 'accusantium';
    $request->t1 = 'rem';
    $request->timespan = 156.06;

    $response = $sdk->analytics->getDeviceCameraAnalyticsOverview($request);

    if ($response->getDeviceCameraAnalyticsOverview200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->serial = 'eum';

    $response = $sdk->analytics->getDeviceCameraAnalyticsRecent($request);

    if ($response->getDeviceCameraAnalyticsRecent200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum::VEHICLE;
    $request->resolution = 68074;
    $request->serial = 'corrupti';
    $request->t0 = 'non';
    $request->t1 = 'voluptatem';
    $request->timespan = 2211.61;
    $request->zoneId = 'occaecati';

    $response = $sdk->analytics->getDeviceCameraAnalyticsZoneHistory($request);

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
    $request->serial = 'numquam';

    $response = $sdk->analytics->getDeviceCameraAnalyticsZones($request);

    if ($response->getDeviceCameraAnalyticsZones200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
