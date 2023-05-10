# dataRateHistory

### Available Operations

* [getNetworkWirelessDataRateHistory](#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client

## getNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDataRateHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDataRateHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDataRateHistoryRequest();
    $request->apTag = 'perspiciatis';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessDataRateHistoryBandEnum::FIVE;
    $request->clientId = 'dolores';
    $request->deviceSerial = 'dicta';
    $request->networkId = 'molestiae';
    $request->resolution = 804685;
    $request->ssid = 173072;
    $request->t0 = 'molestias';
    $request->t1 = 'quam';
    $request->timespan = 4731.93;

    $response = $sdk->dataRateHistory->getNetworkWirelessDataRateHistory($request);

    if ($response->getNetworkWirelessDataRateHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
