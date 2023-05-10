# dhcp

### Available Operations

* [getDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [getDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getNetworkCellularGatewayDhcp](#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [getNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [updateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateNetworkCellularGatewayDhcp](#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

## getDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceApplianceDhcpSubnetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceApplianceDhcpSubnetsRequest();
    $request->serial = 'quae';

    $response = $sdk->dhcp->getDeviceApplianceDhcpSubnets($request);

    if ($response->getDeviceApplianceDhcpSubnets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfaceDhcpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfaceDhcpRequest();
    $request->interfaceId = 'cumque';
    $request->serial = 'ullam';

    $response = $sdk->dhcp->getDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
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
    $request->networkId = 'vel';

    $response = $sdk->dhcp->getNetworkCellularGatewayDhcp($request);

    if ($response->getNetworkCellularGatewayDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpV4ServersSeenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpV4ServersSeenRequest();
    $request->endingBefore = 'reprehenderit';
    $request->networkId = 'aut';
    $request->perPage = 926225;
    $request->startingAfter = 'voluptatibus';
    $request->t0 = 'dolore';
    $request->timespan = 1325.31;

    $response = $sdk->dhcp->getNetworkSwitchDhcpV4ServersSeen($request);

    if ($response->getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfaceDhcpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfaceDhcpRequest();
    $request->interfaceId = 'harum';
    $request->networkId = 'illum';
    $request->switchStackId = 'dolor';

    $response = $sdk->dhcp->getNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingInterfaceDhcpRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody();
    $request->requestBody->bootFileName = 'porro';
    $request->requestBody->bootNextServer = 'iste';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::FOUR_HOURS;
    $request->requestBody->dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_DISABLED;
    $request->requestBody->dhcpOptions = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'veniam',
        'aperiam',
        'consectetur',
        'repellat',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'quod',
        'nesciunt',
    ];
    $request->requestBody->dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::GOOGLE_PUBLIC_DNS;
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'assumenda';
    $request->serial = 'alias';

    $response = $sdk->dhcp->updateDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
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
    $request->requestBody->dhcpLeaseTime = 'deserunt';
    $request->requestBody->dnsCustomNameservers = [
        'qui',
        'perspiciatis',
    ];
    $request->requestBody->dnsNameservers = 'accusantium';
    $request->networkId = 'voluptatibus';

    $response = $sdk->dhcp->updateNetworkCellularGatewayDhcp($request);

    if ($response->updateNetworkCellularGatewayDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody();
    $request->requestBody->bootFileName = 'occaecati';
    $request->requestBody->bootNextServer = 'nemo';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::ONE_WEEK;
    $request->requestBody->dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_SERVER;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'nemo',
        'ab',
        'atque',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'culpa',
        'possimus',
        'molestiae',
    ];
    $request->requestBody->dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::OPEN_DNS;
    $request->requestBody->fixedIpAssignments = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'aperiam';
    $request->networkId = 'reprehenderit';
    $request->switchStackId = 'animi';

    $response = $sdk->dhcp->updateNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
