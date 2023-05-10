# signalQualityHistory

### Available Operations

* [getNetworkWirelessSignalQualityHistory](#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client

## getNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSignalQualityHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSignalQualityHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSignalQualityHistoryRequest();
    $request->apTag = 'atque';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessSignalQualityHistoryBandEnum::SIX;
    $request->clientId = 'possimus';
    $request->deviceSerial = 'in';
    $request->networkId = 'qui';
    $request->resolution = 675534;
    $request->ssid = 129904;
    $request->t0 = 'repellendus';
    $request->t1 = 'eius';
    $request->timespan = 6669.98;

    $response = $sdk->signalQualityHistory->getNetworkWirelessSignalQualityHistory($request);

    if ($response->getNetworkWirelessSignalQualityHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
