# lossAndLatencyHistory

### Available Operations

* [getDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

## getDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLossAndLatencyHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLossAndLatencyHistoryUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLossAndLatencyHistoryRequest();
    $request->ip = 'repellat';
    $request->resolution = 840994;
    $request->serial = 'accusamus';
    $request->t0 = 'illum';
    $request->t1 = 'blanditiis';
    $request->timespan = 2707.36;
    $request->uplink = GetDeviceLossAndLatencyHistoryUplinkEnum::WAN1;

    $response = $sdk->lossAndLatencyHistory->getDeviceLossAndLatencyHistory($request);

    if ($response->getDeviceLossAndLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
