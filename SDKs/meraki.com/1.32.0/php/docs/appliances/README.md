# appliances

### Available Operations

* [getOrganizationSummaryTopAppliancesByUtilization](#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.

## getOrganizationSummaryTopAppliancesByUtilization

Return the top 10 appliances sorted by utilization over given time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopAppliancesByUtilizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopAppliancesByUtilizationRequest();
    $request->organizationId = 'esse';
    $request->t0 = 'praesentium';
    $request->t1 = 'maiores';
    $request->timespan = 9672.6;

    $response = $sdk->appliances->getOrganizationSummaryTopAppliancesByUtilization($request);

    if ($response->getOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
