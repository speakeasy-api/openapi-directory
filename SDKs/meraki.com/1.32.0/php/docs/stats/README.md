# stats

### Available Operations

* [getOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization

## getOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVpnStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVpnStatsRequest();
    $request->endingBefore = 'maiores';
    $request->networkIds = [
        'praesentium',
        'omnis',
        'incidunt',
    ];
    $request->organizationId = 'incidunt';
    $request->perPage = 110699;
    $request->startingAfter = 'incidunt';
    $request->t0 = 'nostrum';
    $request->t1 = 'explicabo';
    $request->timespan = 6340.79;

    $response = $sdk->stats->getOrganizationApplianceVpnStats($request);

    if ($response->getOrganizationApplianceVpnStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
