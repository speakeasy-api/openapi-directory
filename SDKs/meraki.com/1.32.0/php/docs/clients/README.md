# clients

### Available Operations

* [getDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [getNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [getNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [getNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients
* [getNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [getNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getOrganizationClientsBandwidthUsageHistory](#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [getOrganizationClientsOverview](#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationClientsSearch](#getorganizationclientssearch) - Return the client details in an organization
* [getOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [provisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [updateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## getDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceClientsRequest();
    $request->serial = 'amet';
    $request->t0 = 'quasi';
    $request->timespan = 1181.26;

    $response = $sdk->clients->getDeviceClients($request);

    if ($response->getDeviceClients200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceClientSecurityEventsRequest();
    $request->clientId = 'laudantium';
    $request->endingBefore = 'doloremque';
    $request->networkId = 'earum';
    $request->perPage = 479707;
    $request->sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum::ASCENDING;
    $request->startingAfter = 'provident';
    $request->t0 = 'dolorum';
    $request->t1 = 'necessitatibus';
    $request->timespan = 5928.8;

    $response = $sdk->clients->getNetworkApplianceClientSecurityEvents($request);

    if ($response->getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientRequest();
    $request->clientId = 'repudiandae';
    $request->networkId = 'consequatur';

    $response = $sdk->clients->getNetworkClient($request);

    if ($response->getNetworkClient200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientPolicyRequest();
    $request->clientId = 'nemo';
    $request->networkId = 'molestiae';

    $response = $sdk->clients->getNetworkClientPolicy($request);

    if ($response->getNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientSplashAuthorizationStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientSplashAuthorizationStatusRequest();
    $request->clientId = 'itaque';
    $request->networkId = 'facilis';

    $response = $sdk->clients->getNetworkClientSplashAuthorizationStatus($request);

    if ($response->getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientTrafficHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientTrafficHistoryRequest();
    $request->clientId = 'corrupti';
    $request->endingBefore = 'aperiam';
    $request->networkId = 'sint';
    $request->perPage = 879522;
    $request->startingAfter = 'eos';

    $response = $sdk->clients->getNetworkClientTrafficHistory($request);

    if ($response->getNetworkClientTrafficHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientUsageHistoryRequest();
    $request->clientId = 'totam';
    $request->networkId = 'dicta';

    $response = $sdk->clients->getNetworkClientUsageHistory($request);

    if ($response->getNetworkClientUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClients

List the clients that have used this network in the timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsRecentDeviceConnectionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsStatusesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsRequest();
    $request->description = 'voluptatem';
    $request->endingBefore = 'velit';
    $request->ip = 'dolor';
    $request->ip6 = 'sunt';
    $request->ip6Local = 'a';
    $request->mac = 'dolor';
    $request->networkId = 'occaecati';
    $request->os = 'atque';
    $request->perPage = 107472;
    $request->recentDeviceConnections = [
        GetNetworkClientsRecentDeviceConnectionsEnum::WIRED,
        GetNetworkClientsRecentDeviceConnectionsEnum::WIRELESS,
        GetNetworkClientsRecentDeviceConnectionsEnum::WIRED,
        GetNetworkClientsRecentDeviceConnectionsEnum::WIRED,
    ];
    $request->startingAfter = 'perferendis';
    $request->statuses = [
        GetNetworkClientsStatusesEnum::OFFLINE,
        GetNetworkClientsStatusesEnum::OFFLINE,
        GetNetworkClientsStatusesEnum::OFFLINE,
    ];
    $request->t0 = 'repellat';
    $request->timespan = 2436.78;
    $request->vlan = 'porro';

    $response = $sdk->clients->getNetworkClients($request);

    if ($response->getNetworkClients200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsApplicationUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsApplicationUsageSsidNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsApplicationUsageRequest();
    $request->clients = 'provident';
    $request->endingBefore = 'consectetur';
    $request->networkId = 'eligendi';
    $request->perPage = 490110;
    $request->ssidNumber = GetNetworkClientsApplicationUsageSsidNumberEnum::THREE;
    $request->startingAfter = 'soluta';
    $request->t0 = 'natus';
    $request->t1 = 'temporibus';
    $request->timespan = 6396.22;

    $response = $sdk->clients->getNetworkClientsApplicationUsage($request);

    if ($response->getNetworkClientsApplicationUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsBandwidthUsageHistory

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsBandwidthUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsBandwidthUsageHistoryRequest();
    $request->endingBefore = 'amet';
    $request->networkId = 'tenetur';
    $request->perPage = 133949;
    $request->startingAfter = 'quo';
    $request->t0 = 'itaque';
    $request->t1 = 'illum';
    $request->timespan = 6707.62;

    $response = $sdk->clients->getNetworkClientsBandwidthUsageHistory($request);

    if ($response->getNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsOverview

Return overview statistics for network clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsOverviewRequest();
    $request->networkId = 'dignissimos';
    $request->resolution = 876285;
    $request->t0 = 'qui';
    $request->t1 = 'consectetur';
    $request->timespan = 9958.16;

    $response = $sdk->clients->getNetworkClientsOverview($request);

    if ($response->getNetworkClientsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsUsageHistoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsUsageHistoriesSsidNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsUsageHistoriesRequest();
    $request->clients = 'explicabo';
    $request->endingBefore = 'explicabo';
    $request->networkId = 'exercitationem';
    $request->perPage = 471457;
    $request->ssidNumber = GetNetworkClientsUsageHistoriesSsidNumberEnum::THREE;
    $request->startingAfter = 'ab';
    $request->t0 = 'illo';
    $request->t1 = 'hic';
    $request->timespan = 6444.79;

    $response = $sdk->clients->getNetworkClientsUsageHistories($request);

    if ($response->getNetworkClientsUsageHistories200ApplicationJSONObjects !== null) {
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
    $request->apTag = 'delectus';
    $request->band = GetNetworkWirelessClientConnectionStatsBandEnum::TWO4;
    $request->clientId = 'distinctio';
    $request->networkId = 'in';
    $request->ssid = 349993;
    $request->t0 = 'labore';
    $request->t1 = 'numquam';
    $request->timespan = 9211.93;
    $request->vlan = 265303;

    $response = $sdk->clients->getNetworkWirelessClientConnectionStats($request);

    if ($response->getNetworkWirelessClientConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->clientId = 'explicabo';
    $request->deviceSerial = 'accusamus';
    $request->endingBefore = 'rem';
    $request->includedSeverities = [
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::BAD,
    ];
    $request->networkId = 'deleniti';
    $request->perPage = 316730;
    $request->ssidNumber = GetNetworkWirelessClientConnectivityEventsSsidNumberEnum::SIX;
    $request->startingAfter = 'similique';
    $request->t0 = 'minima';
    $request->t1 = 'libero';
    $request->timespan = 3001.89;
    $request->types = [
        GetNetworkWirelessClientConnectivityEventsTypesEnum::CONNECTION,
    ];

    $response = $sdk->clients->getNetworkWirelessClientConnectivityEvents($request);

    if ($response->getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientLatencyHistoryRequest();
    $request->clientId = 'eum';
    $request->networkId = 'nesciunt';
    $request->resolution = 652125;
    $request->t0 = 'dignissimos';
    $request->t1 = 'fugiat';
    $request->timespan = 3451.38;

    $response = $sdk->clients->getNetworkWirelessClientLatencyHistory($request);

    if ($response->getNetworkWirelessClientLatencyHistory200ApplicationJSONObjects !== null) {
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
    $request->apTag = 'molestiae';
    $request->band = GetNetworkWirelessClientLatencyStatsBandEnum::TWO4;
    $request->clientId = 'reiciendis';
    $request->fields = 'ab';
    $request->networkId = 'modi';
    $request->ssid = 13865;
    $request->t0 = 'aut';
    $request->t1 = 'eveniet';
    $request->timespan = 4837.53;
    $request->vlan = 413758;

    $response = $sdk->clients->getNetworkWirelessClientLatencyStats($request);

    if ($response->getNetworkWirelessClientLatencyStats200ApplicationJSONObject !== null) {
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
    $request->apTag = 'numquam';
    $request->band = GetNetworkWirelessClientsConnectionStatsBandEnum::SIX;
    $request->networkId = 'possimus';
    $request->ssid = 452399;
    $request->t0 = 'consectetur';
    $request->t1 = 'nesciunt';
    $request->timespan = 3106.29;
    $request->vlan = 929476;

    $response = $sdk->clients->getNetworkWirelessClientsConnectionStats($request);

    if ($response->getNetworkWirelessClientsConnectionStats200ApplicationJSONObjects !== null) {
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
    $request->apTag = 'minus';
    $request->band = GetNetworkWirelessClientsLatencyStatsBandEnum::TWO4;
    $request->fields = 'distinctio';
    $request->networkId = 'iusto';
    $request->ssid = 558051;
    $request->t0 = 'et';
    $request->t1 = 'facilis';
    $request->timespan = 2292.76;
    $request->vlan = 418637;

    $response = $sdk->clients->getNetworkWirelessClientsLatencyStats($request);

    if ($response->getNetworkWirelessClientsLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationClientsBandwidthUsageHistory

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsBandwidthUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsBandwidthUsageHistoryRequest();
    $request->organizationId = 'fuga';
    $request->t0 = 'alias';
    $request->t1 = 'rem';
    $request->timespan = 113.55;

    $response = $sdk->clients->getOrganizationClientsBandwidthUsageHistory($request);

    if ($response->getOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsOverviewRequest();
    $request->organizationId = 'quos';
    $request->t0 = 'laudantium';
    $request->t1 = 'repellendus';
    $request->timespan = 832.91;

    $response = $sdk->clients->getOrganizationClientsOverview($request);

    if ($response->getOrganizationClientsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationClientsSearch

Return the client details in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsSearchRequest();
    $request->endingBefore = 'quae';
    $request->mac = 'eaque';
    $request->organizationId = 'saepe';
    $request->perPage = 965517;
    $request->startingAfter = 'mollitia';

    $response = $sdk->clients->getOrganizationClientsSearch($request);

    if ($response->getOrganizationClientsSearch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopClientsByUsage

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopClientsByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopClientsByUsageRequest();
    $request->organizationId = 'nulla';
    $request->t0 = 'officia';
    $request->t1 = 'sed';
    $request->timespan = 302.08;

    $response = $sdk->clients->getOrganizationSummaryTopClientsByUsage($request);

    if ($response->getOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopClientsManufacturersByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopClientsManufacturersByUsageRequest();
    $request->organizationId = 'alias';
    $request->t0 = 'eveniet';
    $request->t1 = 'hic';
    $request->timespan = 279.82;

    $response = $sdk->clients->getOrganizationSummaryTopClientsManufacturersByUsage($request);

    if ($response->getOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyClients;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvisionNetworkClientsRequest();
    $request->requestBody = new ProvisionNetworkClientsRequestBody();
    $request->requestBody->clients = [
        new ProvisionNetworkClientsRequestBodyClients(),
        new ProvisionNetworkClientsRequestBodyClients(),
    ];
    $request->requestBody->devicePolicy = ProvisionNetworkClientsRequestBodyDevicePolicyEnum::ALLOWED;
    $request->requestBody->groupPolicyId = 'qui';
    $request->requestBody->policiesBySecurityAppliance = new ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance();
    $request->requestBody->policiesBySecurityAppliance->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid = new ProvisionNetworkClientsRequestBodyPoliciesBySsid();
    $request->requestBody->policiesBySsid->zero = new ProvisionNetworkClientsRequestBodyPoliciesBySsid0();
    $request->requestBody->policiesBySsid->zero->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->zero->groupPolicyId = 'explicabo';
    $request->requestBody->policiesBySsid->one = new ProvisionNetworkClientsRequestBodyPoliciesBySsid1();
    $request->requestBody->policiesBySsid->one->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->one->groupPolicyId = 'aliquid';
    $request->requestBody->policiesBySsid->ten = new ProvisionNetworkClientsRequestBodyPoliciesBySsid10();
    $request->requestBody->policiesBySsid->ten->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->ten->groupPolicyId = 'optio';
    $request->requestBody->policiesBySsid->eleven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid11();
    $request->requestBody->policiesBySsid->eleven->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->eleven->groupPolicyId = 'molestias';
    $request->requestBody->policiesBySsid->twelve = new ProvisionNetworkClientsRequestBodyPoliciesBySsid12();
    $request->requestBody->policiesBySsid->twelve->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->twelve->groupPolicyId = 'libero';
    $request->requestBody->policiesBySsid->thirteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid13();
    $request->requestBody->policiesBySsid->thirteen->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->thirteen->groupPolicyId = 'sequi';
    $request->requestBody->policiesBySsid->fourteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid14();
    $request->requestBody->policiesBySsid->fourteen->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->fourteen->groupPolicyId = 'ea';
    $request->requestBody->policiesBySsid->two = new ProvisionNetworkClientsRequestBodyPoliciesBySsid2();
    $request->requestBody->policiesBySsid->two->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->two->groupPolicyId = 'ducimus';
    $request->requestBody->policiesBySsid->three = new ProvisionNetworkClientsRequestBodyPoliciesBySsid3();
    $request->requestBody->policiesBySsid->three->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->three->groupPolicyId = 'velit';
    $request->requestBody->policiesBySsid->four = new ProvisionNetworkClientsRequestBodyPoliciesBySsid4();
    $request->requestBody->policiesBySsid->four->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->four->groupPolicyId = 'repellat';
    $request->requestBody->policiesBySsid->five = new ProvisionNetworkClientsRequestBodyPoliciesBySsid5();
    $request->requestBody->policiesBySsid->five->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->five->groupPolicyId = 'laborum';
    $request->requestBody->policiesBySsid->six = new ProvisionNetworkClientsRequestBodyPoliciesBySsid6();
    $request->requestBody->policiesBySsid->six->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->six->groupPolicyId = 'accusamus';
    $request->requestBody->policiesBySsid->seven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid7();
    $request->requestBody->policiesBySsid->seven->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->seven->groupPolicyId = 'nisi';
    $request->requestBody->policiesBySsid->eight = new ProvisionNetworkClientsRequestBodyPoliciesBySsid8();
    $request->requestBody->policiesBySsid->eight->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->eight->groupPolicyId = 'recusandae';
    $request->requestBody->policiesBySsid->nine = new ProvisionNetworkClientsRequestBodyPoliciesBySsid9();
    $request->requestBody->policiesBySsid->nine->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->nine->groupPolicyId = 'non';
    $request->networkId = 'rem';

    $response = $sdk->clients->provisionNetworkClients($request);

    if ($response->provisionNetworkClients201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientPolicyRequest();
    $request->requestBody = new UpdateNetworkClientPolicyRequestBody();
    $request->requestBody->devicePolicy = 'quia';
    $request->requestBody->groupPolicyId = 'ullam';
    $request->clientId = 'quisquam';
    $request->networkId = 'dicta';

    $response = $sdk->clients->updateNetworkClientPolicy($request);

    if ($response->updateNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientSplashAuthorizationStatusRequest();
    $request->requestBody = new UpdateNetworkClientSplashAuthorizationStatusRequestBody();
    $request->requestBody->ssids = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids();
    $request->requestBody->ssids->zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0();
    $request->requestBody->ssids->zero->isAuthorized = false;
    $request->requestBody->ssids->one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1();
    $request->requestBody->ssids->one->isAuthorized = false;
    $request->requestBody->ssids->ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10();
    $request->requestBody->ssids->ten->isAuthorized = false;
    $request->requestBody->ssids->eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11();
    $request->requestBody->ssids->eleven->isAuthorized = false;
    $request->requestBody->ssids->twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12();
    $request->requestBody->ssids->twelve->isAuthorized = false;
    $request->requestBody->ssids->thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13();
    $request->requestBody->ssids->thirteen->isAuthorized = false;
    $request->requestBody->ssids->fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14();
    $request->requestBody->ssids->fourteen->isAuthorized = false;
    $request->requestBody->ssids->two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2();
    $request->requestBody->ssids->two->isAuthorized = false;
    $request->requestBody->ssids->three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3();
    $request->requestBody->ssids->three->isAuthorized = false;
    $request->requestBody->ssids->four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4();
    $request->requestBody->ssids->four->isAuthorized = false;
    $request->requestBody->ssids->five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5();
    $request->requestBody->ssids->five->isAuthorized = false;
    $request->requestBody->ssids->six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6();
    $request->requestBody->ssids->six->isAuthorized = false;
    $request->requestBody->ssids->seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7();
    $request->requestBody->ssids->seven->isAuthorized = false;
    $request->requestBody->ssids->eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8();
    $request->requestBody->ssids->eight->isAuthorized = false;
    $request->requestBody->ssids->nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9();
    $request->requestBody->ssids->nine->isAuthorized = false;
    $request->clientId = 'voluptatibus';
    $request->networkId = 'eligendi';

    $response = $sdk->clients->updateNetworkClientSplashAuthorizationStatus($request);

    if ($response->updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
