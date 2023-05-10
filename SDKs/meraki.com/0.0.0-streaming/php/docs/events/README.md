# events

### Available Operations

* [getNetworkEvents](#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description

## getNetworkEvents

List the events for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkEventsRequest();
    $request->clientIp = 'reiciendis';
    $request->clientMac = 'amet';
    $request->clientName = 'dolorum';
    $request->deviceMac = 'numquam';
    $request->deviceName = 'veritatis';
    $request->deviceSerial = 'ipsa';
    $request->endingBefore = 'ipsa';
    $request->excludedEventTypes = [
        'odio',
        'quaerat',
    ];
    $request->includedEventTypes = [
        'quidem',
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->networkId = 'eos';
    $request->perPage = 542499;
    $request->productType = 'sit';
    $request->smDeviceMac = 'fugiat';
    $request->smDeviceName = 'ab';
    $request->startingAfter = 'soluta';

    $response = $sdk->events->getNetworkEvents($request);

    if ($response->getNetworkEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkEventsEventTypes

List the event type to human-readable description

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsEventTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkEventsEventTypesRequest();
    $request->networkId = 'dolorum';

    $response = $sdk->events->getNetworkEventsEventTypes($request);

    if ($response->getNetworkEventsEventTypes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
