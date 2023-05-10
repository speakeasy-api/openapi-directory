# channelUtilization

### Available Operations

* [getNetworkNetworkHealthChannelUtilization](#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.

## getNetworkNetworkHealthChannelUtilization

Get the channel utilization over each radio for all APs in a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkNetworkHealthChannelUtilizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkNetworkHealthChannelUtilizationRequest();
    $request->endingBefore = 'repudiandae';
    $request->networkId = 'consequatur';
    $request->perPage = 805264;
    $request->resolution = 136357;
    $request->startingAfter = 'nam';
    $request->t0 = 'expedita';
    $request->t1 = 'quas';
    $request->timespan = 5908.58;

    $response = $sdk->channelUtilization->getNetworkNetworkHealthChannelUtilization($request);

    if ($response->getNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
