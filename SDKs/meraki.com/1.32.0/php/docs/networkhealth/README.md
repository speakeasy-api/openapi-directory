# networkHealth

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
    $request->endingBefore = 'iusto';
    $request->networkId = 'mollitia';
    $request->perPage = 784287;
    $request->resolution = 377895;
    $request->startingAfter = 'provident';
    $request->t0 = 'neque';
    $request->t1 = 'expedita';
    $request->timespan = 5693.06;

    $response = $sdk->networkHealth->getNetworkNetworkHealthChannelUtilization($request);

    if ($response->getNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
