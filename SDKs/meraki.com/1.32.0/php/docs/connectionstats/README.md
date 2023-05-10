# connectionStats

### Available Operations

* [getDeviceWirelessConnectionStats](#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessConnectionStats](#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [getNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node

## getDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessConnectionStatsRequest();
    $request->apTag = 'exercitationem';
    $request->band = GetDeviceWirelessConnectionStatsBandEnum::SIX;
    $request->serial = 'ea';
    $request->ssid = 477222;
    $request->t0 = 'vitae';
    $request->t1 = 'excepturi';
    $request->timespan = 5280.85;
    $request->vlan = 610873;

    $response = $sdk->connectionStats->getDeviceWirelessConnectionStats($request);

    if ($response->getDeviceWirelessConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientConnectionStatsRequest();
    $request->apTag = 'eaque';
    $request->band = GetNetworkWirelessClientConnectionStatsBandEnum::SIX;
    $request->clientId = 'magnam';
    $request->networkId = 'consequuntur';
    $request->ssid = 667449;
    $request->t0 = 'tempora';
    $request->t1 = 'nobis';
    $request->timespan = 7095.91;
    $request->vlan = 267839;

    $response = $sdk->connectionStats->getNetworkWirelessClientConnectionStats($request);

    if ($response->getNetworkWirelessClientConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientsConnectionStatsRequest();
    $request->apTag = 'adipisci';
    $request->band = GetNetworkWirelessClientsConnectionStatsBandEnum::FIVE;
    $request->networkId = 'at';
    $request->ssid = 523607;
    $request->t0 = 'exercitationem';
    $request->t1 = 'tempore';
    $request->timespan = 1808.39;
    $request->vlan = 389585;

    $response = $sdk->connectionStats->getNetworkWirelessClientsConnectionStats($request);

    if ($response->getNetworkWirelessClientsConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessConnectionStats

Aggregated connectivity info for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessConnectionStatsRequest();
    $request->apTag = 'aperiam';
    $request->band = GetNetworkWirelessConnectionStatsBandEnum::TWO4;
    $request->networkId = 'perspiciatis';
    $request->ssid = 119543;
    $request->t0 = 'assumenda';
    $request->t1 = 'reprehenderit';
    $request->timespan = 2737.93;
    $request->vlan = 320442;

    $response = $sdk->connectionStats->getNetworkWirelessConnectionStats($request);

    if ($response->getNetworkWirelessConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDevicesConnectionStatsRequest();
    $request->apTag = 'voluptates';
    $request->band = GetNetworkWirelessDevicesConnectionStatsBandEnum::TWO4;
    $request->networkId = 'eligendi';
    $request->ssid = 162977;
    $request->t0 = 'quae';
    $request->t1 = 'veniam';
    $request->timespan = 5726.33;
    $request->vlan = 791517;

    $response = $sdk->connectionStats->getNetworkWirelessDevicesConnectionStats($request);

    if ($response->getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
