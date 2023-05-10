# bandwidthUsageHistory

### Available Operations

* [getNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getOrganizationClientsBandwidthUsageHistory](#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

## getNetworkClientsBandwidthUsageHistory

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsBandwidthUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsBandwidthUsageHistoryRequest();
    $request->endingBefore = 'culpa';
    $request->networkId = 'dolor';
    $request->perPage = 307376;
    $request->startingAfter = 'inventore';
    $request->t0 = 'deleniti';
    $request->t1 = 'veritatis';
    $request->timespan = 2745.75;

    $response = $sdk->bandwidthUsageHistory->getNetworkClientsBandwidthUsageHistory($request);

    if ($response->getNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationClientsBandwidthUsageHistory

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsBandwidthUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsBandwidthUsageHistoryRequest();
    $request->organizationId = 'dolor';
    $request->t0 = 'consequatur';
    $request->t1 = 'architecto';
    $request->timespan = 249.44;

    $response = $sdk->bandwidthUsageHistory->getOrganizationClientsBandwidthUsageHistory($request);

    if ($response->getOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
