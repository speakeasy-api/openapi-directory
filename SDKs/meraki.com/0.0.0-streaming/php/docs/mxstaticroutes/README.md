# mxStaticRoutes

### Available Operations

* [createNetworkStaticRoute](#createnetworkstaticroute) - Add a static route for an MX or teleworker network
* [deleteNetworkStaticRoute](#deletenetworkstaticroute) - Delete a static route from an MX or teleworker network
* [getNetworkStaticRoute](#getnetworkstaticroute) - Return a static route for an MX or teleworker network
* [getNetworkStaticRoutes](#getnetworkstaticroutes) - List the static routes for an MX or teleworker network
* [updateNetworkStaticRoute](#updatenetworkstaticroute) - Update a static route for an MX or teleworker network

## createNetworkStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkStaticRouteRequest();
    $request->requestBody = new CreateNetworkStaticRouteRequestBody();
    $request->requestBody->gatewayIp = 'natus';
    $request->requestBody->name = 'Richard Wiza';
    $request->requestBody->subnet = 'fugit';
    $request->networkId = 'porro';

    $response = $sdk->mxStaticRoutes->createNetworkStaticRoute($request);

    if ($response->createNetworkStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkStaticRouteRequest();
    $request->networkId = 'maiores';
    $request->staticRouteId = 'doloribus';

    $response = $sdk->mxStaticRoutes->deleteNetworkStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkStaticRouteRequest();
    $request->networkId = 'iusto';
    $request->staticRouteId = 'eligendi';

    $response = $sdk->mxStaticRoutes->getNetworkStaticRoute($request);

    if ($response->getNetworkStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkStaticRoutesRequest();
    $request->networkId = 'ducimus';

    $response = $sdk->mxStaticRoutes->getNetworkStaticRoutes($request);

    if ($response->getNetworkStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkStaticRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkStaticRouteRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkStaticRouteRequest();
    $request->requestBody = new UpdateNetworkStaticRouteRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->fixedIpAssignments = [
        'officia' => 'tempora',
    ];
    $request->requestBody->gatewayIp = 'ipsam';
    $request->requestBody->name = 'Judy Keebler';
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkStaticRouteRequestBodyReservedIpRanges(),
    ];
    $request->requestBody->subnet = 'ex';
    $request->networkId = 'laudantium';
    $request->staticRouteId = 'dicta';

    $response = $sdk->mxStaticRoutes->updateNetworkStaticRoute($request);

    if ($response->updateNetworkStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
