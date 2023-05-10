# surfaceObstacles

## Overview

#### All known structures whose presence might interfere with airborne activity, as defined in [14 CFR Part 77.9](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77#77.9).
This information is updated daily and includes the following details:
* Location
* Type
* Number of separate structures in case of a group
* Height (in ft. AGL)
* Lighting and other markings

### Available Operations

* [obstaclesByDistanceUsV1ObstaclesDistanceQueryPost](#obstaclesbydistanceusv1obstaclesdistancequerypost) - Retrieve obstacles within given distance of location.
* [obstaclesByPolyUsV1ObstaclesPolygonQueryPost](#obstaclesbypolyusv1obstaclespolygonquerypost) - Retrieve obstacles located within given area.
* [obstaclesByRouteUsV1ObstaclesRouteQueryPost](#obstaclesbyrouteusv1obstaclesroutequerypost) - Retrieve obstacles found along a route.

## obstaclesByDistanceUsV1ObstaclesDistanceQueryPost

Retrieve obstacles within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObstaclesByDistance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostRequest();
    $request->obstaclesByDistance = new ObstaclesByDistance();
    $request->obstaclesByDistance->distance = 656330;
    $request->obstaclesByDistance->latitude = 1381.83;
    $request->obstaclesByDistance->longitude = 196582;
    $request->xApiKey = 'tenetur';

    $response = $sdk->surfaceObstacles->obstaclesByDistanceUsV1ObstaclesDistanceQueryPost($request);

    if ($response->obstacleDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## obstaclesByPolyUsV1ObstaclesPolygonQueryPost

Retrieve obstacles located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ObstaclesByPolyUsV1ObstaclesPolygonQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObstaclesByPolygon;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ObstaclesByPolyUsV1ObstaclesPolygonQueryPostRequest();
    $request->obstaclesByPolygon = new ObstaclesByPolygon();
    $request->obstaclesByPolygon->poly = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->xApiKey = 'error';

    $response = $sdk->surfaceObstacles->obstaclesByPolyUsV1ObstaclesPolygonQueryPost($request);

    if ($response->obstaclePolyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## obstaclesByRouteUsV1ObstaclesRouteQueryPost

Retrieve obstacles found along a route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ObstaclesByRouteUsV1ObstaclesRouteQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObstaclesByRoute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ObstaclesByRouteUsV1ObstaclesRouteQueryPostRequest();
    $request->obstaclesByRoute = new ObstaclesByRoute();
    $request->obstaclesByRoute->route = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->xApiKey = 'ipsa';

    $response = $sdk->surfaceObstacles->obstaclesByRouteUsV1ObstaclesRouteQueryPost($request);

    if ($response->obstacleRouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
