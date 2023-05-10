# airMarshal

### Available Operations

* [getNetworkWirelessAirMarshal](#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network

## getNetworkWirelessAirMarshal

List Air Marshal scan results from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessAirMarshalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessAirMarshalRequest();
    $request->networkId = 'ut';
    $request->t0 = 'facilis';
    $request->timespan = 5864.1;

    $response = $sdk->airMarshal->getNetworkWirelessAirMarshal($request);

    if ($response->getNetworkWirelessAirMarshal200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
