# traffic

### Available Operations

* [getNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network

## getNetworkTraffic

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficRequest();
    $request->deviceType = GetNetworkTrafficDeviceTypeEnum::SWITCH;
    $request->networkId = 'rem';
    $request->t0 = 'eaque';
    $request->timespan = 4660.15;

    $response = $sdk->traffic->getNetworkTraffic($request);

    if ($response->getNetworkTraffic200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
