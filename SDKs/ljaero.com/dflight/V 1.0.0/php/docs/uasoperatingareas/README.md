# uasOperatingAreas

## Overview

#### Areas where drone activity is scheduled to take place. 
UAS Operating Areas (UOAs) are published via [NOTAM](https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.information/documentID/1035053) to alert airspace users of unmanned aircraft activity in a given area and at a given time (singular or recurring).

### Available Operations

* [uoaByDistanceUsV1UoaDistanceQueryPost](#uoabydistanceusv1uoadistancequerypost) - Retrieve UAS Operating Areas (UOAs) found within given distance of location.
* [uoaByPolyUsV1UoaPolygonQueryPost](#uoabypolyusv1uoapolygonquerypost) - Retrieve UAS Operating Areas (UOAs) found within given area.
* [uoaByRouteUsV1UoaRouteQueryPost](#uoabyrouteusv1uoaroutequerypost) - Retrieve UAS Operating Areas (UOAs) found along route.

## uoaByDistanceUsV1UoaDistanceQueryPost

Retrieve UAS Operating Areas (UOAs) found within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UoaByDistanceUsV1UoaDistanceQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\UOAsByDistance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UoaByDistanceUsV1UoaDistanceQueryPostRequest();
    $request->uoAsByDistance = new UOAsByDistance();
    $request->uoAsByDistance->distance = 451159;
    $request->uoAsByDistance->latitude = 19987;
    $request->uoAsByDistance->longitude = 4417.11;
    $request->xApiKey = 'ut';

    $response = $sdk->uasOperatingAreas->uoaByDistanceUsV1UoaDistanceQueryPost($request);

    if ($response->uoAsDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uoaByPolyUsV1UoaPolygonQueryPost

Retrieve UAS Operating Areas (UOAs) found within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UoaByPolyUsV1UoaPolygonQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\UOAsByPolygon;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UoaByPolyUsV1UoaPolygonQueryPostRequest();
    $request->uoAsByPolygon = new UOAsByPolygon();
    $request->uoAsByPolygon->poly = [
        'dicta' => 'corporis',
        'dolore' => 'iusto',
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->xApiKey = 'commodi';

    $response = $sdk->uasOperatingAreas->uoaByPolyUsV1UoaPolygonQueryPost($request);

    if ($response->uoAsPolyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uoaByRouteUsV1UoaRouteQueryPost

Retrieve UAS Operating Areas (UOAs) found along your route. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UoaByRouteUsV1UoaRouteQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\UOAsByRoute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UoaByRouteUsV1UoaRouteQueryPostRequest();
    $request->uoAsByRoute = new UOAsByRoute();
    $request->uoAsByRoute->route = [
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
    ];
    $request->xApiKey = 'rem';

    $response = $sdk->uasOperatingAreas->uoaByRouteUsV1UoaRouteQueryPost($request);

    if ($response->uoAsRouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
