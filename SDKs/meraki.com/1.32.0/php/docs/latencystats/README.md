# latencyStats

### Available Operations

* [getDeviceWirelessLatencyStats](#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [getNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkWirelessLatencyStats](#getnetworkwirelesslatencystats) - Aggregated latency info for this network

## getDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessLatencyStatsRequest();
    $request->apTag = 'expedita';
    $request->band = GetDeviceWirelessLatencyStatsBandEnum::SIX;
    $request->fields = 'voluptatem';
    $request->serial = 'maiores';
    $request->ssid = 600825;
    $request->t0 = 'reprehenderit';
    $request->t1 = 'voluptatem';
    $request->timespan = 8123.93;
    $request->vlan = 292327;

    $response = $sdk->latencyStats->getDeviceWirelessLatencyStats($request);

    if ($response->getDeviceWirelessLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientLatencyStatsRequest();
    $request->apTag = 'magni';
    $request->band = GetNetworkWirelessClientLatencyStatsBandEnum::SIX;
    $request->clientId = 'quod';
    $request->fields = 'provident';
    $request->networkId = 'delectus';
    $request->ssid = 293013;
    $request->t0 = 'totam';
    $request->t1 = 'labore';
    $request->timespan = 2557.2;
    $request->vlan = 125394;

    $response = $sdk->latencyStats->getNetworkWirelessClientLatencyStats($request);

    if ($response->getNetworkWirelessClientLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientsLatencyStatsRequest();
    $request->apTag = 'consequuntur';
    $request->band = GetNetworkWirelessClientsLatencyStatsBandEnum::TWO4;
    $request->fields = 'voluptates';
    $request->networkId = 'in';
    $request->ssid = 324572;
    $request->t0 = 'expedita';
    $request->t1 = 'ducimus';
    $request->timespan = 5666.49;
    $request->vlan = 433431;

    $response = $sdk->latencyStats->getNetworkWirelessClientsLatencyStats($request);

    if ($response->getNetworkWirelessClientsLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDevicesLatencyStatsRequest();
    $request->apTag = 'doloremque';
    $request->band = GetNetworkWirelessDevicesLatencyStatsBandEnum::FIVE;
    $request->fields = 'nostrum';
    $request->networkId = 'cumque';
    $request->ssid = 50998;
    $request->t0 = 'earum';
    $request->t1 = 'earum';
    $request->timespan = 6367.75;
    $request->vlan = 425484;

    $response = $sdk->latencyStats->getNetworkWirelessDevicesLatencyStats($request);

    if ($response->getNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessLatencyStats

Aggregated latency info for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessLatencyStatsRequest();
    $request->apTag = 'sapiente';
    $request->band = GetNetworkWirelessLatencyStatsBandEnum::FIVE;
    $request->fields = 'ratione';
    $request->networkId = 'libero';
    $request->ssid = 563937;
    $request->t0 = 'alias';
    $request->t1 = 'fuga';
    $request->timespan = 1056.16;
    $request->vlan = 714977;

    $response = $sdk->latencyStats->getNetworkWirelessLatencyStats($request);

    if ($response->getNetworkWirelessLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
