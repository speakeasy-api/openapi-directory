# interfaces

### Available Operations

* [createDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [deleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [getDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [updateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

## createDeviceSwitchRoutingInterface

Create a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceSwitchRoutingInterfaceRequest();
    $request->requestBody = new CreateDeviceSwitchRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'delectus';
    $request->requestBody->interfaceIp = 'ex';
    $request->requestBody->ipv6 = new CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '9175 Keebler Stream';
    $request->requestBody->ipv6->assignmentMode = 'quae';
    $request->requestBody->ipv6->gateway = 'doloremque';
    $request->requestBody->ipv6->prefix = 'debitis';
    $request->requestBody->multicastRouting = CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum::DISABLED;
    $request->requestBody->name = 'Rickey DuBuque';
    $request->requestBody->ospfSettings = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'tempora';
    $request->requestBody->ospfSettings->cost = 788246;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->ospfV3 = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3();
    $request->requestBody->ospfV3->area = 'vel';
    $request->requestBody->ospfV3->cost = 741473;
    $request->requestBody->ospfV3->isPassiveEnabled = false;
    $request->requestBody->subnet = 'doloremque';
    $request->requestBody->vlanId = 239378;
    $request->serial = 'quasi';

    $response = $sdk->interfaces->createDeviceSwitchRoutingInterface($request);

    if ($response->createDeviceSwitchRoutingInterface201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStackRoutingInterface

Create a layer 3 interface for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRoutingInterfaceRequest();
    $request->requestBody = new CreateNetworkSwitchStackRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'accusantium';
    $request->requestBody->interfaceIp = 'molestias';
    $request->requestBody->ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '572 Isaias Ford';
    $request->requestBody->ipv6->assignmentMode = 'nihil';
    $request->requestBody->ipv6->gateway = 'velit';
    $request->requestBody->ipv6->prefix = 'aut';
    $request->requestBody->multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::DISABLED;
    $request->requestBody->name = 'Jeannette Muller';
    $request->requestBody->ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'eos';
    $request->requestBody->ospfSettings->cost = 650392;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'distinctio';
    $request->requestBody->vlanId = 120216;
    $request->networkId = 'earum';
    $request->switchStackId = 'possimus';

    $response = $sdk->interfaces->createNetworkSwitchStackRoutingInterface($request);

    if ($response->createNetworkSwitchStackRoutingInterface201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceSwitchRoutingInterface

Delete a layer 3 interface from the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceSwitchRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceSwitchRoutingInterfaceRequest();
    $request->interfaceId = 'nemo';
    $request->serial = 'eum';

    $response = $sdk->interfaces->deleteDeviceSwitchRoutingInterface($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStackRoutingInterface

Delete a layer 3 interface from a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRoutingInterfaceRequest();
    $request->interfaceId = 'iusto';
    $request->networkId = 'veritatis';
    $request->switchStackId = 'voluptates';

    $response = $sdk->interfaces->deleteNetworkSwitchStackRoutingInterface($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterface

Return a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfaceRequest();
    $request->interfaceId = 'unde';
    $request->serial = 'impedit';

    $response = $sdk->interfaces->getDeviceSwitchRoutingInterface($request);

    if ($response->getDeviceSwitchRoutingInterface200ApplicationJSONObject !== null) {
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
    $request->interfaceId = 'amet';
    $request->serial = 'dolores';

    $response = $sdk->interfaces->getDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterfaces

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfacesRequest();
    $request->serial = 'commodi';

    $response = $sdk->interfaces->getDeviceSwitchRoutingInterfaces($request);

    if ($response->getDeviceSwitchRoutingInterfaces200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterface

Return a layer 3 interface from a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfaceRequest();
    $request->interfaceId = 'neque';
    $request->networkId = 'enim';
    $request->switchStackId = 'eaque';

    $response = $sdk->interfaces->getNetworkSwitchStackRoutingInterface($request);

    if ($response->getNetworkSwitchStackRoutingInterface200ApplicationJSONObject !== null) {
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
    $request->interfaceId = 'officia';
    $request->networkId = 'tempora';
    $request->switchStackId = 'eum';

    $response = $sdk->interfaces->getNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterfaces

List layer 3 interfaces for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfacesRequest();
    $request->networkId = 'molestiae';
    $request->switchStackId = 'architecto';

    $response = $sdk->interfaces->getNetworkSwitchStackRoutingInterfaces($request);

    if ($response->getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingInterface

Update a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingInterfaceRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'aliquam';
    $request->requestBody->interfaceIp = 'ipsum';
    $request->requestBody->ipv6 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '5679 Theron Parkways';
    $request->requestBody->ipv6->assignmentMode = 'error';
    $request->requestBody->ipv6->gateway = 'dicta';
    $request->requestBody->ipv6->prefix = 'nemo';
    $request->requestBody->multicastRouting = UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum::DISABLED;
    $request->requestBody->name = 'Paulette Mohr';
    $request->requestBody->ospfSettings = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'ducimus';
    $request->requestBody->ospfSettings->cost = 267981;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->ospfV3 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3();
    $request->requestBody->ospfV3->area = 'impedit';
    $request->requestBody->ospfV3->cost = 58606;
    $request->requestBody->ospfV3->isPassiveEnabled = false;
    $request->requestBody->subnet = 'dolores';
    $request->requestBody->vlanId = 353522;
    $request->interfaceId = 'sed';
    $request->serial = 'a';

    $response = $sdk->interfaces->updateDeviceSwitchRoutingInterface($request);

    if ($response->updateDeviceSwitchRoutingInterface200ApplicationJSONObject !== null) {
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
    $request->requestBody->bootFileName = 'saepe';
    $request->requestBody->bootNextServer = 'dolor';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::THIRTY_MINUTES;
    $request->requestBody->dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_DISABLED;
    $request->requestBody->dhcpOptions = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'quibusdam',
        'rerum',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'tempore',
        'odio',
        'reprehenderit',
    ];
    $request->requestBody->dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::GOOGLE_PUBLIC_DNS;
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'nam';
    $request->serial = 'nisi';

    $response = $sdk->interfaces->updateDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingInterface

Update a layer 3 interface for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingInterfaceRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'officiis';
    $request->requestBody->interfaceIp = 'quasi';
    $request->requestBody->ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '179 Amely Cove';
    $request->requestBody->ipv6->assignmentMode = 'expedita';
    $request->requestBody->ipv6->gateway = 'laborum';
    $request->requestBody->ipv6->prefix = 'hic';
    $request->requestBody->multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::ENABLED;
    $request->requestBody->name = 'Vicky Reichert';
    $request->requestBody->ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'aliquid';
    $request->requestBody->ospfSettings->cost = 236965;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'ipsam';
    $request->requestBody->vlanId = 852623;
    $request->interfaceId = 'enim';
    $request->networkId = 'eveniet';
    $request->switchStackId = 'eum';

    $response = $sdk->interfaces->updateNetworkSwitchStackRoutingInterface($request);

    if ($response->updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject !== null) {
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
    $request->requestBody->bootFileName = 'exercitationem';
    $request->requestBody->bootNextServer = 'at';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::TWELVE_HOURS;
    $request->requestBody->dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_DISABLED;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'quisquam',
        'dolor',
        'accusamus',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'enim',
        'veritatis',
        'mollitia',
    ];
    $request->requestBody->dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::CUSTOM;
    $request->requestBody->fixedIpAssignments = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'aut';
    $request->networkId = 'doloribus';
    $request->switchStackId = 'fugiat';

    $response = $sdk->interfaces->updateNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
