# packets

### Available Operations

* [getDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesPacketsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesPacketsRequest();
    $request->serial = 'officiis';
    $request->t0 = 'consectetur';
    $request->timespan = 5912.7;

    $response = $sdk->packets->getDeviceSwitchPortsStatusesPackets($request);

    if ($response->getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
