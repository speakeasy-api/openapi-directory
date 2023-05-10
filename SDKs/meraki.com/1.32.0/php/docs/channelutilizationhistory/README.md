# channelUtilizationHistory

### Available Operations

* [getNetworkWirelessChannelUtilizationHistory](#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client

## getNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessChannelUtilizationHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessChannelUtilizationHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessChannelUtilizationHistoryRequest();
    $request->apTag = 'repudiandae';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessChannelUtilizationHistoryBandEnum::SIX;
    $request->clientId = 'dignissimos';
    $request->deviceSerial = 'corporis';
    $request->networkId = 'vero';
    $request->resolution = 629377;
    $request->t0 = 'repellendus';
    $request->t1 = 'iure';
    $request->timespan = 2138.35;

    $response = $sdk->channelUtilizationHistory->getNetworkWirelessChannelUtilizationHistory($request);

    if ($response->getNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
