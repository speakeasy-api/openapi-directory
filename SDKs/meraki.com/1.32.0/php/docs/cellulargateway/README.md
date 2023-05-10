# cellularGateway

### Available Operations

* [getDeviceCellularGatewayLan](#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [getDeviceCellularGatewayPortForwardingRules](#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [getNetworkCellularGatewayConnectivityMonitoringDestinations](#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [getNetworkCellularGatewayDhcp](#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [getNetworkCellularGatewaySubnetPool](#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [getNetworkCellularGatewayUplink](#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [getOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [updateDeviceCellularGatewayLan](#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [updateDeviceCellularGatewayPortForwardingRules](#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [updateNetworkCellularGatewayConnectivityMonitoringDestinations](#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [updateNetworkCellularGatewayDhcp](#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [updateNetworkCellularGatewaySubnetPool](#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [updateNetworkCellularGatewayUplink](#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

## getDeviceCellularGatewayLan

Show the LAN Settings of a MG

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularGatewayLanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularGatewayLanRequest();
    $request->serial = 'fugiat';

    $response = $sdk->cellularGateway->getDeviceCellularGatewayLan($request);

    if ($response->getDeviceCellularGatewayLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCellularGatewayPortForwardingRules

Returns the port forwarding rules for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularGatewayPortForwardingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularGatewayPortForwardingRulesRequest();
    $request->serial = 'unde';

    $response = $sdk->cellularGateway->getDeviceCellularGatewayPortForwardingRules($request);

    if ($response->getDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewayConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MG network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest();
    $request->networkId = 'officiis';

    $response = $sdk->cellularGateway->getNetworkCellularGatewayConnectivityMonitoringDestinations($request);

    if ($response->getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewayDhcp

List common DHCP settings of MGs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayDhcpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewayDhcpRequest();
    $request->networkId = 'ducimus';

    $response = $sdk->cellularGateway->getNetworkCellularGatewayDhcp($request);

    if ($response->getNetworkCellularGatewayDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewaySubnetPool

Return the subnet pool and mask configured for MGs in the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewaySubnetPoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewaySubnetPoolRequest();
    $request->networkId = 'dolor';

    $response = $sdk->cellularGateway->getNetworkCellularGatewaySubnetPool($request);

    if ($response->getNetworkCellularGatewaySubnetPool200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewayUplink

Returns the uplink settings for your MG network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewayUplinkRequest();
    $request->networkId = 'dicta';

    $response = $sdk->cellularGateway->getNetworkCellularGatewayUplink($request);

    if ($response->getNetworkCellularGatewayUplink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCellularGatewayUplinkStatusesRequest();
    $request->endingBefore = 'error';
    $request->iccids = [
        'vitae',
        'dignissimos',
        'esse',
        'fugiat',
    ];
    $request->networkIds = [
        'aspernatur',
        'enim',
    ];
    $request->organizationId = 'delectus';
    $request->perPage = 482584;
    $request->serials = [
        'libero',
        'illo',
    ];
    $request->startingAfter = 'ab';

    $response = $sdk->cellularGateway->getOrganizationCellularGatewayUplinkStatuses($request);

    if ($response->getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularGatewayLan

Update the LAN Settings for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularGatewayLanRequest();
    $request->requestBody = new UpdateDeviceCellularGatewayLanRequestBody();
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments(),
        new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
    ];
    $request->serial = 'saepe';

    $response = $sdk->cellularGateway->updateDeviceCellularGatewayLan($request);

    if ($response->updateDeviceCellularGatewayLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularGatewayPortForwardingRules

Updates the port forwarding rules for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularGatewayPortForwardingRulesRequest();
    $request->requestBody = new UpdateDeviceCellularGatewayPortForwardingRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules(),
        new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules(),
        new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules(),
    ];
    $request->serial = 'veniam';

    $response = $sdk->cellularGateway->updateDeviceCellularGatewayPortForwardingRules($request);

    if ($response->updateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewayConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MG network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest();
    $request->requestBody = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody();
    $request->requestBody->destinations = [
        new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations(),
    ];
    $request->networkId = 'reiciendis';

    $response = $sdk->cellularGateway->updateNetworkCellularGatewayConnectivityMonitoringDestinations($request);

    if ($response->updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewayDhcp

Update common DHCP settings of MGs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayDhcpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayDhcpRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewayDhcpRequest();
    $request->requestBody = new UpdateNetworkCellularGatewayDhcpRequestBody();
    $request->requestBody->dhcpLeaseTime = 'earum';
    $request->requestBody->dnsCustomNameservers = [
        'praesentium',
        'nemo',
    ];
    $request->requestBody->dnsNameservers = 'repellat';
    $request->networkId = 'quisquam';

    $response = $sdk->cellularGateway->updateNetworkCellularGatewayDhcp($request);

    if ($response->updateNetworkCellularGatewayDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewaySubnetPool

Update the subnet pool and mask configuration for MGs in the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewaySubnetPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewaySubnetPoolRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewaySubnetPoolRequest();
    $request->requestBody = new UpdateNetworkCellularGatewaySubnetPoolRequestBody();
    $request->requestBody->cidr = 'sequi';
    $request->requestBody->mask = 467119;
    $request->networkId = 'deleniti';

    $response = $sdk->cellularGateway->updateNetworkCellularGatewaySubnetPool($request);

    if ($response->updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewayUplink

Updates the uplink settings for your MG network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewayUplinkRequest();
    $request->requestBody = new UpdateNetworkCellularGatewayUplinkRequestBody();
    $request->requestBody->bandwidthLimits = new UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits();
    $request->requestBody->bandwidthLimits->limitDown = 75566;
    $request->requestBody->bandwidthLimits->limitUp = 290248;
    $request->networkId = 'assumenda';

    $response = $sdk->cellularGateway->updateNetworkCellularGatewayUplink($request);

    if ($response->updateNetworkCellularGatewayUplink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
