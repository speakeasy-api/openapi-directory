# byMetric

### Available Operations

* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric

## getNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsCurrentOverviewByMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsCurrentOverviewByMetricRequest();
    $request->networkId = 'libero';

    $response = $sdk->byMetric->getNetworkSensorAlertsCurrentOverviewByMetric($request);

    if ($response->getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsOverviewByMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsOverviewByMetricRequest();
    $request->interval = 854460;
    $request->networkId = 'officia';
    $request->t0 = 'quos';
    $request->t1 = 'placeat';
    $request->timespan = 257.56;

    $response = $sdk->byMetric->getNetworkSensorAlertsOverviewByMetric($request);

    if ($response->getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
