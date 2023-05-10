# routing

### Available Operations

* [createDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [createNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [deleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [getNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [getNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [updateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [updateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [updateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

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
    $request->requestBody->defaultGateway = 'in';
    $request->requestBody->interfaceIp = 'laudantium';
    $request->requestBody->ipv6 = new CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '0226 Winnifred Forks';
    $request->requestBody->ipv6->assignmentMode = 'provident';
    $request->requestBody->ipv6->gateway = 'est';
    $request->requestBody->ipv6->prefix = 'mollitia';
    $request->requestBody->multicastRouting = CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum::DISABLED;
    $request->requestBody->name = 'Tara Hansen';
    $request->requestBody->ospfSettings = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'eos';
    $request->requestBody->ospfSettings->cost = 514602;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->ospfV3 = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3();
    $request->requestBody->ospfV3->area = 'adipisci';
    $request->requestBody->ospfV3->cost = 147974;
    $request->requestBody->ospfV3->isPassiveEnabled = false;
    $request->requestBody->subnet = 'iusto';
    $request->requestBody->vlanId = 618481;
    $request->serial = 'facilis';

    $response = $sdk->routing->createDeviceSwitchRoutingInterface($request);

    if ($response->createDeviceSwitchRoutingInterface201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceSwitchRoutingStaticRoute

Create a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceSwitchRoutingStaticRouteRequest();
    $request->requestBody = new CreateDeviceSwitchRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Doris Muller DDS';
    $request->requestBody->nextHopIp = 'accusamus';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'officia';
    $request->serial = 'voluptas';

    $response = $sdk->routing->createDeviceSwitchRoutingStaticRoute($request);

    if ($response->createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchRoutingMulticastRendezvousPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->requestBody = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody();
    $request->requestBody->interfaceIp = 'reprehenderit';
    $request->requestBody->multicastGroup = 'neque';
    $request->networkId = 'facere';

    $response = $sdk->routing->createNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject !== null) {
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
    $request->requestBody->defaultGateway = 'blanditiis';
    $request->requestBody->interfaceIp = 'suscipit';
    $request->requestBody->ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '161 Tara Freeway';
    $request->requestBody->ipv6->assignmentMode = 'perspiciatis';
    $request->requestBody->ipv6->gateway = 'id';
    $request->requestBody->ipv6->prefix = 'adipisci';
    $request->requestBody->multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::IGMP_SNOOPING_QUERIER;
    $request->requestBody->name = 'Ida Kris';
    $request->requestBody->ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'optio';
    $request->requestBody->ospfSettings->cost = 896616;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'minima';
    $request->requestBody->vlanId = 255661;
    $request->networkId = 'minus';
    $request->switchStackId = 'id';

    $response = $sdk->routing->createNetworkSwitchStackRoutingInterface($request);

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
    $request->requestBody->name = 'Wm Aufderhar';
    $request->requestBody->nextHopIp = 'vero';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'mollitia';
    $request->networkId = 'sint';
    $request->switchStackId = 'ducimus';

    $response = $sdk->routing->createNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject !== null) {
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
    $request->interfaceId = 'minima';
    $request->serial = 'voluptatem';

    $response = $sdk->routing->deleteDeviceSwitchRoutingInterface($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceSwitchRoutingStaticRoute

Delete a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceSwitchRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceSwitchRoutingStaticRouteRequest();
    $request->serial = 'labore';
    $request->staticRouteId = 'corporis';

    $response = $sdk->routing->deleteDeviceSwitchRoutingStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->networkId = 'harum';
    $request->rendezvousPointId = 'error';

    $response = $sdk->routing->deleteNetworkSwitchRoutingMulticastRendezvousPoint($request);

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
    $request->interfaceId = 'quod';
    $request->networkId = 'asperiores';
    $request->switchStackId = 'ea';

    $response = $sdk->routing->deleteNetworkSwitchStackRoutingInterface($request);

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
    $request->networkId = 'neque';
    $request->staticRouteId = 'nam';
    $request->switchStackId = 'sed';

    $response = $sdk->routing->deleteNetworkSwitchStackRoutingStaticRoute($request);

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
    $request->interfaceId = 'quasi';
    $request->serial = 'nemo';

    $response = $sdk->routing->getDeviceSwitchRoutingInterface($request);

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
    $request->interfaceId = 'sunt';
    $request->serial = 'quos';

    $response = $sdk->routing->getDeviceSwitchRoutingInterfaceDhcp($request);

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

    $response = $sdk->routing->getDeviceSwitchRoutingInterfaces($request);

    if ($response->getDeviceSwitchRoutingInterfaces200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingStaticRoute

Return a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingStaticRouteRequest();
    $request->serial = 'id';
    $request->staticRouteId = 'nam';

    $response = $sdk->routing->getDeviceSwitchRoutingStaticRoute($request);

    if ($response->getDeviceSwitchRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingStaticRoutes

List layer 3 static routes for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingStaticRoutesRequest();
    $request->serial = 'corporis';

    $response = $sdk->routing->getDeviceSwitchRoutingStaticRoutes($request);

    if ($response->getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticast

Return multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRequest();
    $request->networkId = 'voluptates';

    $response = $sdk->routing->getNetworkSwitchRoutingMulticast($request);

    if ($response->getNetworkSwitchRoutingMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRendezvousPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->networkId = 'amet';
    $request->rendezvousPointId = 'laborum';

    $response = $sdk->routing->getNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRendezvousPointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRendezvousPointsRequest();
    $request->networkId = 'alias';

    $response = $sdk->routing->getNetworkSwitchRoutingMulticastRendezvousPoints($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingOspfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingOspfRequest();
    $request->networkId = 'eos';

    $response = $sdk->routing->getNetworkSwitchRoutingOspf($request);

    if ($response->getNetworkSwitchRoutingOspf200ApplicationJSONObject !== null) {
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
    $request->interfaceId = 'qui';
    $request->networkId = 'autem';
    $request->switchStackId = 'architecto';

    $response = $sdk->routing->getNetworkSwitchStackRoutingInterface($request);

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
    $request->interfaceId = 'tempora';
    $request->networkId = 'velit';
    $request->switchStackId = 'ab';

    $response = $sdk->routing->getNetworkSwitchStackRoutingInterfaceDhcp($request);

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
    $request->networkId = 'ad';
    $request->switchStackId = 'assumenda';

    $response = $sdk->routing->getNetworkSwitchStackRoutingInterfaces($request);

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
    $request->networkId = 'inventore';
    $request->staticRouteId = 'nostrum';
    $request->switchStackId = 'ex';

    $response = $sdk->routing->getNetworkSwitchStackRoutingStaticRoute($request);

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
    $request->networkId = 'totam';
    $request->switchStackId = 'magni';

    $response = $sdk->routing->getNetworkSwitchStackRoutingStaticRoutes($request);

    if ($response->getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects !== null) {
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
    $request->requestBody->defaultGateway = 'sint';
    $request->requestBody->interfaceIp = 'occaecati';
    $request->requestBody->ipv6 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '316 Sanford Knolls';
    $request->requestBody->ipv6->assignmentMode = 'veritatis';
    $request->requestBody->ipv6->gateway = 'totam';
    $request->requestBody->ipv6->prefix = 'suscipit';
    $request->requestBody->multicastRouting = UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum::ENABLED;
    $request->requestBody->name = 'Todd Abernathy';
    $request->requestBody->ospfSettings = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'fuga';
    $request->requestBody->ospfSettings->cost = 468910;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->ospfV3 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3();
    $request->requestBody->ospfV3->area = 'dolor';
    $request->requestBody->ospfV3->cost = 823722;
    $request->requestBody->ospfV3->isPassiveEnabled = false;
    $request->requestBody->subnet = 'delectus';
    $request->requestBody->vlanId = 290227;
    $request->interfaceId = 'accusantium';
    $request->serial = 'quo';

    $response = $sdk->routing->updateDeviceSwitchRoutingInterface($request);

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
    $request->requestBody->bootFileName = 'id';
    $request->requestBody->bootNextServer = 'alias';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::FOUR_HOURS;
    $request->requestBody->dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_RELAY;
    $request->requestBody->dhcpOptions = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'reprehenderit',
        'placeat',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'ex',
    ];
    $request->requestBody->dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::CUSTOM;
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'facilis';
    $request->serial = 'maiores';

    $response = $sdk->routing->updateDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingStaticRoute

Update a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingStaticRouteRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Audrey Harvey';
    $request->requestBody->nextHopIp = 'et';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'cum';
    $request->serial = 'eos';
    $request->staticRouteId = 'quaerat';

    $response = $sdk->routing->updateDeviceSwitchRoutingStaticRoute($request);

    if ($response->updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingMulticast

Update multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingMulticastRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingMulticastRequestBody();
    $request->requestBody->defaultSettings = new UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings();
    $request->requestBody->defaultSettings->floodUnknownMulticastTrafficEnabled = false;
    $request->requestBody->defaultSettings->igmpSnoopingEnabled = false;
    $request->requestBody->overrides = [
        new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(),
    ];
    $request->networkId = 'architecto';

    $response = $sdk->routing->updateNetworkSwitchRoutingMulticast($request);

    if ($response->updateNetworkSwitchRoutingMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody();
    $request->requestBody->interfaceIp = 'repellendus';
    $request->requestBody->multicastGroup = 'assumenda';
    $request->networkId = 'suscipit';
    $request->rendezvousPointId = 'consequatur';

    $response = $sdk->routing->updateNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyAreas;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingOspfRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingOspfRequestBody();
    $request->requestBody->areas = [
        new UpdateNetworkSwitchRoutingOspfRequestBodyAreas(),
        new UpdateNetworkSwitchRoutingOspfRequestBodyAreas(),
    ];
    $request->requestBody->deadTimerInSeconds = 873131;
    $request->requestBody->enabled = false;
    $request->requestBody->helloTimerInSeconds = 843658;
    $request->requestBody->md5AuthenticationEnabled = false;
    $request->requestBody->md5AuthenticationKey = new UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey();
    $request->requestBody->md5AuthenticationKey->id = 106497;
    $request->requestBody->md5AuthenticationKey->passphrase = 'soluta';
    $request->requestBody->v3 = new UpdateNetworkSwitchRoutingOspfRequestBodyV3();
    $request->requestBody->v3->areas = [
        new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas(),
    ];
    $request->requestBody->v3->deadTimerInSeconds = 526942;
    $request->requestBody->v3->enabled = false;
    $request->requestBody->v3->helloTimerInSeconds = 166229;
    $request->networkId = 'ducimus';

    $response = $sdk->routing->updateNetworkSwitchRoutingOspf($request);

    if ($response->updateNetworkSwitchRoutingOspf200ApplicationJSONObject !== null) {
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
    $request->requestBody->defaultGateway = 'fugit';
    $request->requestBody->interfaceIp = 'quidem';
    $request->requestBody->ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '581 Brain Corner';
    $request->requestBody->ipv6->assignmentMode = 'ex';
    $request->requestBody->ipv6->gateway = 'sint';
    $request->requestBody->ipv6->prefix = 'dignissimos';
    $request->requestBody->multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::ENABLED;
    $request->requestBody->name = 'Dr. Tracey Leuschke';
    $request->requestBody->ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'rerum';
    $request->requestBody->ospfSettings->cost = 714190;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'odit';
    $request->requestBody->vlanId = 717260;
    $request->interfaceId = 'excepturi';
    $request->networkId = 'neque';
    $request->switchStackId = 'maxime';

    $response = $sdk->routing->updateNetworkSwitchStackRoutingInterface($request);

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
    $request->requestBody->bootFileName = 'ab';
    $request->requestBody->bootNextServer = 'nostrum';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::FOUR_HOURS;
    $request->requestBody->dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_RELAY;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'libero',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'quasi',
        'nihil',
        'blanditiis',
        'numquam',
    ];
    $request->requestBody->dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::GOOGLE_PUBLIC_DNS;
    $request->requestBody->fixedIpAssignments = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'vel';
    $request->networkId = 'exercitationem';
    $request->switchStackId = 'dolor';

    $response = $sdk->routing->updateNetworkSwitchStackRoutingInterfaceDhcp($request);

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
    $request->requestBody->name = 'Terence Pollich';
    $request->requestBody->nextHopIp = 'ex';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'vero';
    $request->networkId = 'odit';
    $request->staticRouteId = 'quaerat';
    $request->switchStackId = 'dicta';

    $response = $sdk->routing->updateNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
