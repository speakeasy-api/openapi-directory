# wirelessHealth

### Available Operations

* [getNetworkClientConnectionStats](#getnetworkclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkClientLatencyStats](#getnetworkclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkClientsConnectionStats](#getnetworkclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkClientsLatencyStats](#getnetworkclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkConnectionStats](#getnetworkconnectionstats) - Aggregated connectivity info for this network
* [getNetworkDeviceConnectionStats](#getnetworkdeviceconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getNetworkDeviceLatencyStats](#getnetworkdevicelatencystats) - Aggregated latency info for a given AP on this network
* [getNetworkDevicesConnectionStats](#getnetworkdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkDevicesLatencyStats](#getnetworkdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkFailedConnections](#getnetworkfailedconnections) - List of all failed client connection events on this network in a given time range
* [getNetworkLatencyStats](#getnetworklatencystats) - Aggregated latency info for this network

## getNetworkClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientConnectionStatsRequest();
    $request->apTag = 'voluptatem';
    $request->band = GetNetworkClientConnectionStatsBandEnum::FIVE;
    $request->clientId = 'cum';
    $request->networkId = 'aliquid';
    $request->ssid = 109784;
    $request->t0 = 'voluptatum';
    $request->t1 = 'omnis';
    $request->timespan = 852.33;
    $request->vlan = 703218;

    $response = $sdk->wirelessHealth->getNetworkClientConnectionStats($request);

    if ($response->getNetworkClientConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientLatencyStatsRequest();
    $request->apTag = 'est';
    $request->band = GetNetworkClientLatencyStatsBandEnum::FIVE;
    $request->clientId = 'voluptatem';
    $request->fields = 'sapiente';
    $request->networkId = 'officiis';
    $request->ssid = 103298;
    $request->t0 = 'fuga';
    $request->t1 = 'pariatur';
    $request->timespan = 8913.15;
    $request->vlan = 29190;

    $response = $sdk->wirelessHealth->getNetworkClientLatencyStats($request);

    if ($response->getNetworkClientLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsConnectionStatsRequest();
    $request->apTag = 'alias';
    $request->band = GetNetworkClientsConnectionStatsBandEnum::FIVE;
    $request->networkId = 'earum';
    $request->ssid = 404244;
    $request->t0 = 'sapiente';
    $request->t1 = 'rem';
    $request->timespan = 7963.2;
    $request->vlan = 365100;

    $response = $sdk->wirelessHealth->getNetworkClientsConnectionStats($request);

    if ($response->getNetworkClientsConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsLatencyStats

Aggregated latency info for this network, grouped by clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsLatencyStatsRequest();
    $request->apTag = 'asperiores';
    $request->band = GetNetworkClientsLatencyStatsBandEnum::TWO4;
    $request->fields = 'ullam';
    $request->networkId = 'perferendis';
    $request->ssid = 848341;
    $request->t0 = 'totam';
    $request->t1 = 'impedit';
    $request->timespan = 8427.77;
    $request->vlan = 720528;

    $response = $sdk->wirelessHealth->getNetworkClientsLatencyStats($request);

    if ($response->getNetworkClientsLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkConnectionStats

Aggregated connectivity info for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkConnectionStatsRequest();
    $request->apTag = 'ipsam';
    $request->band = GetNetworkConnectionStatsBandEnum::FIVE;
    $request->networkId = 'dolor';
    $request->ssid = 307376;
    $request->t0 = 'inventore';
    $request->t1 = 'deleniti';
    $request->timespan = 853.11;
    $request->vlan = 274575;

    $response = $sdk->wirelessHealth->getNetworkConnectionStats($request);

    if ($response->getNetworkConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDeviceConnectionStats

Aggregated connectivity info for a given AP on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDeviceConnectionStatsRequest();
    $request->apTag = 'dolor';
    $request->band = GetNetworkDeviceConnectionStatsBandEnum::TWO4;
    $request->networkId = 'architecto';
    $request->serial = 'sit';
    $request->ssid = 265039;
    $request->t0 = 'fugit';
    $request->t1 = 'ab';
    $request->timespan = 5137.6;
    $request->vlan = 65604;

    $response = $sdk->wirelessHealth->getNetworkDeviceConnectionStats($request);

    if ($response->getNetworkDeviceConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDeviceLatencyStats

Aggregated latency info for a given AP on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDeviceLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDeviceLatencyStatsRequest();
    $request->apTag = 'dolor';
    $request->band = GetNetworkDeviceLatencyStatsBandEnum::FIVE;
    $request->fields = 'ipsam';
    $request->networkId = 'consequuntur';
    $request->serial = 'ipsa';
    $request->ssid = 559682;
    $request->t0 = 'eveniet';
    $request->t1 = 'impedit';
    $request->timespan = 8849.52;
    $request->vlan = 456410;

    $response = $sdk->wirelessHealth->getNetworkDeviceLatencyStats($request);

    if ($response->getNetworkDeviceLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDevicesConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDevicesConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDevicesConnectionStatsRequest();
    $request->apTag = 'necessitatibus';
    $request->band = GetNetworkDevicesConnectionStatsBandEnum::TWO4;
    $request->networkId = 'veniam';
    $request->ssid = 199596;
    $request->t0 = 'expedita';
    $request->t1 = 'eum';
    $request->timespan = 4269.43;
    $request->vlan = 528234;

    $response = $sdk->wirelessHealth->getNetworkDevicesConnectionStats($request);

    if ($response->getNetworkDevicesConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDevicesLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDevicesLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDevicesLatencyStatsRequest();
    $request->apTag = 'magnam';
    $request->band = GetNetworkDevicesLatencyStatsBandEnum::TWO4;
    $request->fields = 'ab';
    $request->networkId = 'porro';
    $request->ssid = 421844;
    $request->t0 = 'nobis';
    $request->t1 = 'laboriosam';
    $request->timespan = 9272.12;
    $request->vlan = 160393;

    $response = $sdk->wirelessHealth->getNetworkDevicesLatencyStats($request);

    if ($response->getNetworkDevicesLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFailedConnections

List of all failed client connection events on this network in a given time range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFailedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFailedConnectionsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFailedConnectionsRequest();
    $request->apTag = 'voluptatem';
    $request->band = GetNetworkFailedConnectionsBandEnum::TWO4;
    $request->clientId = 'necessitatibus';
    $request->networkId = 'quasi';
    $request->serial = 'nisi';
    $request->ssid = 871103;
    $request->t0 = 'vero';
    $request->t1 = 'est';
    $request->timespan = 6907.85;
    $request->vlan = 192718;

    $response = $sdk->wirelessHealth->getNetworkFailedConnections($request);

    if ($response->getNetworkFailedConnections200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkLatencyStats

Aggregated latency info for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkLatencyStatsRequest();
    $request->apTag = 'doloribus';
    $request->band = GetNetworkLatencyStatsBandEnum::FIVE;
    $request->fields = 'optio';
    $request->networkId = 'occaecati';
    $request->ssid = 364544;
    $request->t0 = 'voluptate';
    $request->t1 = 'blanditiis';
    $request->timespan = 6423.52;
    $request->vlan = 376389;

    $response = $sdk->wirelessHealth->getNetworkLatencyStats($request);

    if ($response->getNetworkLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
