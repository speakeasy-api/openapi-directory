# failedConnections

### Available Operations

* [getNetworkWirelessFailedConnections](#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range

## getNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessFailedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessFailedConnectionsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessFailedConnectionsRequest();
    $request->apTag = 'iste';
    $request->band = GetNetworkWirelessFailedConnectionsBandEnum::TWO4;
    $request->clientId = 'adipisci';
    $request->networkId = 'quis';
    $request->serial = 'quis';
    $request->ssid = 554165;
    $request->t0 = 'ea';
    $request->t1 = 'fugiat';
    $request->timespan = 1161.94;
    $request->vlan = 555988;

    $response = $sdk->failedConnections->getNetworkWirelessFailedConnections($request);

    if ($response->getNetworkWirelessFailedConnections200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
