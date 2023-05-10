# latencyHistory

### Available Operations

* [getNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessLatencyHistory](#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client

## getNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientLatencyHistoryRequest();
    $request->clientId = 'vitae';
    $request->networkId = 'magnam';
    $request->resolution = 503247;
    $request->t0 = 'nulla';
    $request->t1 = 'eum';
    $request->timespan = 8451.64;

    $response = $sdk->latencyHistory->getNetworkWirelessClientLatencyHistory($request);

    if ($response->getNetworkWirelessClientLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessLatencyHistoryRequest();
    $request->accessCategory = GetNetworkWirelessLatencyHistoryAccessCategoryEnum::BEST_EFFORT_TRAFFIC;
    $request->apTag = 'ut';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessLatencyHistoryBandEnum::FIVE;
    $request->clientId = 'debitis';
    $request->deviceSerial = 'minima';
    $request->networkId = 'vel';
    $request->resolution = 235556;
    $request->ssid = 345057;
    $request->t0 = 'tempore';
    $request->t1 = 'ipsum';
    $request->timespan = 2133.71;

    $response = $sdk->latencyHistory->getNetworkWirelessLatencyHistory($request);

    if ($response->getNetworkWirelessLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
