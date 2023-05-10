# uplinksLossAndLatency

### Available Operations

* [getOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

## getOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksLossAndLatencyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesUplinksLossAndLatencyRequest();
    $request->ip = 'maiores';
    $request->organizationId = 'esse';
    $request->t0 = 'sit';
    $request->t1 = 'adipisci';
    $request->timespan = 3097.25;
    $request->uplink = GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum::CELLULAR;

    $response = $sdk->uplinksLossAndLatency->getOrganizationDevicesUplinksLossAndLatency($request);

    if ($response->getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
