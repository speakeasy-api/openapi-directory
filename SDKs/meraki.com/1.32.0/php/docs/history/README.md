# history

### Available Operations

* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [getOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp

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
    $request->resolution = 866638;
    $request->serial = 'quas';
    $request->t0 = 'sequi';
    $request->t1 = 'illo';
    $request->timespan = 8384.02;
    $request->zoneId = 'doloremque';

    $response = $sdk->history->getDeviceCameraAnalyticsZoneHistory($request);

    if ($response->getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAlertsHistory

Return the alert history for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAlertsHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAlertsHistoryRequest();
    $request->endingBefore = 'aperiam';
    $request->networkId = 'laudantium';
    $request->perPage = 69326;
    $request->startingAfter = 'voluptatem';

    $response = $sdk->history->getNetworkAlertsHistory($request);

    if ($response->getNetworkAlertsHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSensorReadingsHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSensorReadingsHistoryRequest();
    $request->endingBefore = 'provident';
    $request->metrics = [
        'delectus',
    ];
    $request->networkIds = [
        'nihil',
        'quae',
    ];
    $request->organizationId = 'voluptas';
    $request->perPage = 385470;
    $request->serials = [
        'adipisci',
        'doloribus',
    ];
    $request->startingAfter = 'ratione';
    $request->t0 = 'id';
    $request->t1 = 'ex';
    $request->timespan = 5495.09;

    $response = $sdk->history->getOrganizationSensorReadingsHistory($request);

    if ($response->getOrganizationSensorReadingsHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
