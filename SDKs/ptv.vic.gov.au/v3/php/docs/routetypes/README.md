# routeTypes

### Available Operations

* [routeTypesGetRouteTypes](#routetypesgetroutetypes) - View all route types and their names

## routeTypesGetRouteTypes

View all route types and their names

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RouteTypesGetRouteTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RouteTypesGetRouteTypesRequest();
    $request->devid = 'possimus';
    $request->signature = 'aut';
    $request->token = 'quasi';

    $response = $sdk->routeTypes->routeTypesGetRouteTypes($request);

    if ($response->v3RouteTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
