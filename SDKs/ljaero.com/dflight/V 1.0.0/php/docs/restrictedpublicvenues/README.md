# restrictedPublicVenues

## Overview

#### Areas where drone operations may be restricted or prohibited:
* Lands administered by the National Park Service (prohibited at all times)
* Major League Baseball Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* National Football League Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* NCAA Division One Football Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* NASCAR Sprint Cup, Indy Car, and Champ Series races (prohibited within a 3 NM radius 1 hr before - 1 hr after race)

### Available Operations

* [venByDistanceUsV1VenuesDistanceQueryPost](#venbydistanceusv1venuesdistancequerypost) - Retrieve all restricted public venues located within given distance of location.
* [venByPolyUsV1VenuesPolygonQueryPost](#venbypolyusv1venuespolygonquerypost) - Retrieve all restricted public venues located within given GeoJSON Polygon.
* [venByRouteUsV1VenuesRouteQueryPost](#venbyrouteusv1venuesroutequerypost) - Retrieve all restricted public venues traversed by route.

## venByDistanceUsV1VenuesDistanceQueryPost

Retrieve venues existing within given distance from a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VenByDistanceUsV1VenuesDistanceQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\VenuesByDistance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VenByDistanceUsV1VenuesDistanceQueryPostRequest();
    $request->venuesByDistance = new VenuesByDistance();
    $request->venuesByDistance->distance = 437032;
    $request->venuesByDistance->latitude = 697631;
    $request->venuesByDistance->longitude = 602.25;
    $request->xApiKey = 'reiciendis';

    $response = $sdk->restrictedPublicVenues->venByDistanceUsV1VenuesDistanceQueryPost($request);

    if ($response->venueDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## venByPolyUsV1VenuesPolygonQueryPost

Retrieve all restricted public venues located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VenByPolyUsV1VenuesPolygonQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\VenuesByPolygon;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VenByPolyUsV1VenuesPolygonQueryPostRequest();
    $request->venuesByPolygon = new VenuesByPolygon();
    $request->venuesByPolygon->poly = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->xApiKey = 'nobis';

    $response = $sdk->restrictedPublicVenues->venByPolyUsV1VenuesPolygonQueryPost($request);

    if ($response->venuePolyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## venByRouteUsV1VenuesRouteQueryPost

Retrieve all restricted public venues intersected by route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VenByRouteUsV1VenuesRouteQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\VenuesByRoute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VenByRouteUsV1VenuesRouteQueryPostRequest();
    $request->venuesByRoute = new VenuesByRoute();
    $request->venuesByRoute->route = [
        'omnis' => 'nemo',
        'minima' => 'excepturi',
    ];
    $request->xApiKey = 'accusantium';

    $response = $sdk->restrictedPublicVenues->venByRouteUsV1VenuesRouteQueryPost($request);

    if ($response->venueRouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
