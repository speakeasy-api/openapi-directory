# stacks

### Available Operations

* [addNetworkSwitchStack](#addnetworkswitchstack) - Add a switch to a stack
* [createNetworkSwitchStack](#createnetworkswitchstack) - Create a stack
* [createNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteNetworkSwitchStack](#deletenetworkswitchstack) - Delete a stack
* [deleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getNetworkSwitchStack](#getnetworkswitchstack) - Show a switch stack
* [getNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [getNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network
* [removeNetworkSwitchStack](#removenetworkswitchstack) - Remove a switch from a stack
* [updateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

## addNetworkSwitchStack

Add a switch to a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddNetworkSwitchStackRequest();
    $request->requestBody = new AddNetworkSwitchStackRequestBody();
    $request->requestBody->serial = 'debitis';
    $request->networkId = 'nemo';
    $request->switchStackId = 'officia';

    $response = $sdk->stacks->addNetworkSwitchStack($request);

    if ($response->addNetworkSwitchStack200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStack

Create a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRequest();
    $request->requestBody = new CreateNetworkSwitchStackRequestBody();
    $request->requestBody->name = 'Miss Darrel Keeling';
    $request->requestBody->serials = [
        'quisquam',
        'deserunt',
        'nisi',
    ];
    $request->networkId = 'aliquam';

    $response = $sdk->stacks->createNetworkSwitchStack($request);

    if ($response->createNetworkSwitchStack201ApplicationJSONObject !== null) {
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
    $request->requestBody->defaultGateway = 'nemo';
    $request->requestBody->interfaceIp = 'pariatur';
    $request->requestBody->ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '553 Ena Green';
    $request->requestBody->ipv6->assignmentMode = 'vitae';
    $request->requestBody->ipv6->gateway = 'deserunt';
    $request->requestBody->ipv6->prefix = 'iste';
    $request->requestBody->multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::ENABLED;
    $request->requestBody->name = 'Dr. Elbert Jones';
    $request->requestBody->ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'sunt';
    $request->requestBody->ospfSettings->cost = 762997;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'odio';
    $request->requestBody->vlanId = 582248;
    $request->networkId = 'officia';
    $request->switchStackId = 'consectetur';

    $response = $sdk->stacks->createNetworkSwitchStackRoutingInterface($request);

    if ($response->createNetworkSwitchStackRoutingInterface201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStackRoutingStaticRoute

Create a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRoutingStaticRouteRequest();
    $request->requestBody = new CreateNetworkSwitchStackRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Horace Towne';
    $request->requestBody->nextHopIp = 'magnam';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'assumenda';
    $request->networkId = 'nemo';
    $request->switchStackId = 'id';

    $response = $sdk->stacks->createNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStack

Delete a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRequest();
    $request->networkId = 'laboriosam';
    $request->switchStackId = 'nostrum';

    $response = $sdk->stacks->deleteNetworkSwitchStack($request);

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
    $request->interfaceId = 'expedita';
    $request->networkId = 'tempora';
    $request->switchStackId = 'fugiat';

    $response = $sdk->stacks->deleteNetworkSwitchStackRoutingInterface($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStackRoutingStaticRoute

Delete a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRoutingStaticRouteRequest();
    $request->networkId = 'exercitationem';
    $request->staticRouteId = 'veniam';
    $request->switchStackId = 'ea';

    $response = $sdk->stacks->deleteNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStack

Show a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRequest();
    $request->networkId = 'aspernatur';
    $request->switchStackId = 'assumenda';

    $response = $sdk->stacks->getNetworkSwitchStack($request);

    if ($response->getNetworkSwitchStack200ApplicationJSONObject !== null) {
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
    $request->interfaceId = 'cupiditate';
    $request->networkId = 'expedita';
    $request->switchStackId = 'odio';

    $response = $sdk->stacks->getNetworkSwitchStackRoutingInterface($request);

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
    $request->interfaceId = 'assumenda';
    $request->networkId = 'excepturi';
    $request->switchStackId = 'recusandae';

    $response = $sdk->stacks->getNetworkSwitchStackRoutingInterfaceDhcp($request);

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
    $request->networkId = 'eos';
    $request->switchStackId = 'facere';

    $response = $sdk->stacks->getNetworkSwitchStackRoutingInterfaces($request);

    if ($response->getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingStaticRoute

Return a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingStaticRouteRequest();
    $request->networkId = 'iure';
    $request->staticRouteId = 'delectus';
    $request->switchStackId = 'quod';

    $response = $sdk->stacks->getNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->getNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingStaticRoutes

List layer 3 static routes for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingStaticRoutesRequest();
    $request->networkId = 'tenetur';
    $request->switchStackId = 'veniam';

    $response = $sdk->stacks->getNetworkSwitchStackRoutingStaticRoutes($request);

    if ($response->getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStacks

List the switch stacks in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStacksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStacksRequest();
    $request->networkId = 'ad';

    $response = $sdk->stacks->getNetworkSwitchStacks($request);

    if ($response->getNetworkSwitchStacks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNetworkSwitchStack

Remove a switch from a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveNetworkSwitchStackRequest();
    $request->requestBody = new RemoveNetworkSwitchStackRequestBody();
    $request->requestBody->serial = 'esse';
    $request->networkId = 'nisi';
    $request->switchStackId = 'dolores';

    $response = $sdk->stacks->removeNetworkSwitchStack($request);

    if ($response->removeNetworkSwitchStack200ApplicationJSONObject !== null) {
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
    $request->requestBody->defaultGateway = 'sint';
    $request->requestBody->interfaceIp = 'nulla';
    $request->requestBody->ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '543 Donnelly Pike';
    $request->requestBody->ipv6->assignmentMode = 'blanditiis';
    $request->requestBody->ipv6->gateway = 'perspiciatis';
    $request->requestBody->ipv6->prefix = 'sit';
    $request->requestBody->multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::IGMP_SNOOPING_QUERIER;
    $request->requestBody->name = 'Ernest Orn DVM';
    $request->requestBody->ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'magnam';
    $request->requestBody->ospfSettings->cost = 76210;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'optio';
    $request->requestBody->vlanId = 960252;
    $request->interfaceId = 'iure';
    $request->networkId = 'molestiae';
    $request->switchStackId = 'iste';

    $response = $sdk->stacks->updateNetworkSwitchStackRoutingInterface($request);

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
    $request->requestBody->bootFileName = 'iure';
    $request->requestBody->bootNextServer = 'necessitatibus';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::FOUR_HOURS;
    $request->requestBody->dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_DISABLED;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'aspernatur',
        'numquam',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'ab',
        'praesentium',
        'repellat',
        'ad',
    ];
    $request->requestBody->dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::GOOGLE_PUBLIC_DNS;
    $request->requestBody->fixedIpAssignments = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'provident';
    $request->networkId = 'laudantium';
    $request->switchStackId = 'porro';

    $response = $sdk->stacks->updateNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingStaticRoute

Update a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingStaticRouteRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Erick Feil';
    $request->requestBody->nextHopIp = 'sunt';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'autem';
    $request->networkId = 'aliquid';
    $request->staticRouteId = 'accusantium';
    $request->switchStackId = 'aperiam';

    $response = $sdk->stacks->updateNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
