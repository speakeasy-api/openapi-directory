# clientCountHistory

### Available Operations

* [getNetworkWirelessClientCountHistory](#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client

## getNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientCountHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientCountHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientCountHistoryRequest();
    $request->apTag = 'commodi';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessClientCountHistoryBandEnum::TWO4;
    $request->clientId = 'voluptatem';
    $request->deviceSerial = 'ad';
    $request->networkId = 'quae';
    $request->resolution = 229567;
    $request->ssid = 849320;
    $request->t0 = 'praesentium';
    $request->t1 = 'quidem';
    $request->timespan = 7368.53;

    $response = $sdk->clientCountHistory->getNetworkWirelessClientCountHistory($request);

    if ($response->getNetworkWirelessClientCountHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
