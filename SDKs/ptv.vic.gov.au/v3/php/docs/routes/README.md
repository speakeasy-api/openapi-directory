# routes

### Available Operations

* [routesOneOrMoreRoutes](#routesoneormoreroutes) - View route names and numbers for all routes
* [routesRouteFromId](#routesroutefromid) - View route name and number for specific route ID

## routesOneOrMoreRoutes

View route names and numbers for all routes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RoutesOneOrMoreRoutesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RoutesOneOrMoreRoutesRouteTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoutesOneOrMoreRoutesRequest();
    $request->devid = 'error';
    $request->routeName = 'temporibus';
    $request->routeTypes = [
        RoutesOneOrMoreRoutesRouteTypesEnum::ZERO,
        RoutesOneOrMoreRoutesRouteTypesEnum::FOUR,
        RoutesOneOrMoreRoutesRouteTypesEnum::FOUR,
    ];
    $request->signature = 'vero';
    $request->token = 'nihil';

    $response = $sdk->routes->routesOneOrMoreRoutes($request);

    if ($response->v3RouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## routesRouteFromId

View route name and number for specific route ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RoutesRouteFromIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoutesRouteFromIdRequest();
    $request->devid = 'praesentium';
    $request->geopathUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-31T23:49:03.388Z');
    $request->includeGeopath = false;
    $request->routeId = 604846;
    $request->signature = 'voluptate';
    $request->token = 'cum';

    $response = $sdk->routes->routesRouteFromId($request);

    if ($response->v3RouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
