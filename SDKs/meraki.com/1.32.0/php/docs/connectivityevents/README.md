# connectivityEvents

### Available Operations

* [getNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.

## getNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsBandEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsSsidNumberEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientConnectivityEventsRequest();
    $request->band = GetNetworkWirelessClientConnectivityEventsBandEnum::FIVE;
    $request->clientId = 'esse';
    $request->deviceSerial = 'officiis';
    $request->endingBefore = 'aperiam';
    $request->includedSeverities = [
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::BAD,
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::GOOD,
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::BAD,
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::GOOD,
    ];
    $request->networkId = 'suscipit';
    $request->perPage = 339503;
    $request->ssidNumber = GetNetworkWirelessClientConnectivityEventsSsidNumberEnum::ELEVEN;
    $request->startingAfter = 'beatae';
    $request->t0 = 'repellendus';
    $request->t1 = 'ex';
    $request->timespan = 1628.49;
    $request->types = [
        GetNetworkWirelessClientConnectivityEventsTypesEnum::DNS,
        GetNetworkWirelessClientConnectivityEventsTypesEnum::ROAM,
        GetNetworkWirelessClientConnectivityEventsTypesEnum::DNS,
        GetNetworkWirelessClientConnectivityEventsTypesEnum::DNS,
    ];

    $response = $sdk->connectivityEvents->getNetworkWirelessClientConnectivityEvents($request);

    if ($response->getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
