# switches

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
    $request->organizationId = 'laudantium';
    $request->t0 = 'voluptatibus';
    $request->t1 = 'quos';
    $request->timespan = 7010.54;

    $response = $sdk->switches->getOrganizationSummaryTopSwitchesByEnergyUsage($request);

    if ($response->getOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
