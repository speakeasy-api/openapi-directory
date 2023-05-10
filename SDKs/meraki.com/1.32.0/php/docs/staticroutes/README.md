# staticRoutes

### Available Operations

* [createDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkApplianceStaticRoute](#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [createNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetworkApplianceStaticRoute](#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [deleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getNetworkApplianceStaticRoute](#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [getNetworkApplianceStaticRoutes](#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [getNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [updateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateNetworkApplianceStaticRoute](#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [updateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

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
    $request->requestBody->name = 'Leland Rohan';
    $request->requestBody->nextHopIp = 'fugiat';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'velit';
    $request->serial = 'facilis';

    $response = $sdk->staticRoutes->createDeviceSwitchRoutingStaticRoute($request);

    if ($response->createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkApplianceStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceStaticRouteRequest();
    $request->requestBody = new CreateNetworkApplianceStaticRouteRequestBody();
    $request->requestBody->gatewayIp = 'architecto';
    $request->requestBody->gatewayVlanId = 'magni';
    $request->requestBody->name = 'Whitney Lind';
    $request->requestBody->subnet = 'beatae';
    $request->networkId = 'officiis';

    $response = $sdk->staticRoutes->createNetworkApplianceStaticRoute($request);

    if ($response->createNetworkApplianceStaticRoute201ApplicationJSONObject !== null) {
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
    $request->requestBody->name = 'Warren Turcotte';
    $request->requestBody->nextHopIp = 'doloremque';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'autem';
    $request->networkId = 'quasi';
    $request->switchStackId = 'adipisci';

    $response = $sdk->staticRoutes->createNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject !== null) {
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
    $request->serial = 'excepturi';
    $request->staticRouteId = 'quasi';

    $response = $sdk->staticRoutes->deleteDeviceSwitchRoutingStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceStaticRouteRequest();
    $request->networkId = 'placeat';
    $request->staticRouteId = 'maxime';

    $response = $sdk->staticRoutes->deleteNetworkApplianceStaticRoute($request);

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
    $request->networkId = 'laudantium';
    $request->staticRouteId = 'delectus';
    $request->switchStackId = 'deserunt';

    $response = $sdk->staticRoutes->deleteNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->statusCode === 200) {
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
    $request->serial = 'aut';
    $request->staticRouteId = 'soluta';

    $response = $sdk->staticRoutes->getDeviceSwitchRoutingStaticRoute($request);

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
    $request->serial = 'iusto';

    $response = $sdk->staticRoutes->getDeviceSwitchRoutingStaticRoutes($request);

    if ($response->getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceStaticRouteRequest();
    $request->networkId = 'repellendus';
    $request->staticRouteId = 'beatae';

    $response = $sdk->staticRoutes->getNetworkApplianceStaticRoute($request);

    if ($response->getNetworkApplianceStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceStaticRoutesRequest();
    $request->networkId = 'ducimus';

    $response = $sdk->staticRoutes->getNetworkApplianceStaticRoutes($request);

    if ($response->getNetworkApplianceStaticRoutes200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'autem';
    $request->staticRouteId = 'ut';
    $request->switchStackId = 'occaecati';

    $response = $sdk->staticRoutes->getNetworkSwitchStackRoutingStaticRoute($request);

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
    $request->networkId = 'aspernatur';
    $request->switchStackId = 'eum';

    $response = $sdk->staticRoutes->getNetworkSwitchStackRoutingStaticRoutes($request);

    if ($response->getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects !== null) {
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
    $request->requestBody->name = 'Joseph Runolfsson';
    $request->requestBody->nextHopIp = 'recusandae';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'ex';
    $request->serial = 'impedit';
    $request->staticRouteId = 'harum';

    $response = $sdk->staticRoutes->updateDeviceSwitchRoutingStaticRoute($request);

    if ($response->updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceStaticRouteRequest();
    $request->requestBody = new UpdateNetworkApplianceStaticRouteRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->fixedIpAssignments = [
        'necessitatibus' => 'harum',
        'similique' => 'expedita',
    ];
    $request->requestBody->gatewayIp = 'debitis';
    $request->requestBody->gatewayVlanId = 'quis';
    $request->requestBody->name = 'Brian Rippin';
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
    ];
    $request->requestBody->subnet = 'velit';
    $request->networkId = 'nobis';
    $request->staticRouteId = 'illo';

    $response = $sdk->staticRoutes->updateNetworkApplianceStaticRoute($request);

    if ($response->updateNetworkApplianceStaticRoute200ApplicationJSONObject !== null) {
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
    $request->requestBody->name = 'Veronica Luettgen';
    $request->requestBody->nextHopIp = 'deserunt';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'corrupti';
    $request->networkId = 'reprehenderit';
    $request->staticRouteId = 'nam';
    $request->switchStackId = 'soluta';

    $response = $sdk->staticRoutes->updateNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
