# bluetoothClients

### Available Operations

* [getNetworkBluetoothClient](#getnetworkbluetoothclient) - Return a Bluetooth client
* [getNetworkBluetoothClients](#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network

## getNetworkBluetoothClient

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkBluetoothClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkBluetoothClientRequest();
    $request->bluetoothClientId = 'dolor';
    $request->connectivityHistoryTimespan = 616934;
    $request->includeConnectivityHistory = false;
    $request->networkId = 'laboriosam';

    $response = $sdk->bluetoothClients->getNetworkBluetoothClient($request);

    if ($response->getNetworkBluetoothClient200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkBluetoothClients

List the Bluetooth clients seen by APs in this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkBluetoothClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkBluetoothClientsRequest();
    $request->endingBefore = 'hic';
    $request->includeConnectivityHistory = false;
    $request->networkId = 'saepe';
    $request->perPage = 681820;
    $request->startingAfter = 'in';
    $request->t0 = 'corporis';
    $request->timespan = 6130.64;

    $response = $sdk->bluetoothClients->getNetworkBluetoothClients($request);

    if ($response->getNetworkBluetoothClients200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
