# byEnergyUsage

### Available Operations

* [getOrganizationSummaryTopSwitchesByEnergyUsage](#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

## getOrganizationSummaryTopSwitchesByEnergyUsage

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopSwitchesByEnergyUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopSwitchesByEnergyUsageRequest();
    $request->organizationId = 'vel';
    $request->t0 = 'quae';
    $request->t1 = 'quae';
    $request->timespan = 2643.33;

    $response = $sdk->byEnergyUsage->getOrganizationSummaryTopSwitchesByEnergyUsage($request);

    if ($response->getOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
