# aerodromes

## Overview

#### Center points and contact information for all US landing facilities, including those with no associated controlled airspace:
* Public and private airports
* Public and private balloonports
* Public and private gliderports
* Public and private heliports
* Public and private seaplane bases
* Public and private ultralight bases

### Available Operations

* [aerodromesByDistanceUsV1AerodromesDistanceQueryPost](#aerodromesbydistanceusv1aerodromesdistancequerypost) - Retrieve aerodromes within given distance of location.
* [aerodromesByPolyUsV1AerodromesPolygonQueryPost](#aerodromesbypolyusv1aerodromespolygonquerypost) - Retrieve aerodromes located within given area.
* [aerodromesByRouteUsV1AerodromesRouteQueryPost](#aerodromesbyrouteusv1aerodromesroutequerypost) - Retrieve aerodromes found along a route.

## aerodromesByDistanceUsV1AerodromesDistanceQueryPost

Retrieve aerodromes within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\AerodromesByDistance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest();
    $request->aerodromesByDistance = new AerodromesByDistance();
    $request->aerodromesByDistance->distance = 423655;
    $request->aerodromesByDistance->latitude = 645894;
    $request->aerodromesByDistance->longitude = 4375.87;
    $request->xApiKey = 'magnam';

    $response = $sdk->aerodromes->aerodromesByDistanceUsV1AerodromesDistanceQueryPost($request);

    if ($response->aerodromeDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## aerodromesByPolyUsV1AerodromesPolygonQueryPost

Retrieve aerodromes located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AerodromesByPolyUsV1AerodromesPolygonQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\AerodromesByPolygon;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AerodromesByPolyUsV1AerodromesPolygonQueryPostRequest();
    $request->aerodromesByPolygon = new AerodromesByPolygon();
    $request->aerodromesByPolygon->poly = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->xApiKey = 'iusto';

    $response = $sdk->aerodromes->aerodromesByPolyUsV1AerodromesPolygonQueryPost($request);

    if ($response->aerodromePolyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## aerodromesByRouteUsV1AerodromesRouteQueryPost

Retrieve aerodromes found along a route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AerodromesByRouteUsV1AerodromesRouteQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\AerodromesByRoute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AerodromesByRouteUsV1AerodromesRouteQueryPostRequest();
    $request->aerodromesByRoute = new AerodromesByRoute();
    $request->aerodromesByRoute->route = [
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
        'quis' => 'veritatis',
    ];
    $request->xApiKey = 'deserunt';

    $response = $sdk->aerodromes->aerodromesByRouteUsV1AerodromesRouteQueryPost($request);

    if ($response->aerodromeRouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
