# byUtilization

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
    $request->organizationId = 'explicabo';
    $request->t0 = 'corporis';
    $request->t1 = 'error';
    $request->timespan = 9371.17;

    $response = $sdk->byUtilization->getOrganizationSummaryTopAppliancesByUtilization($request);

    if ($response->getOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
