# flightRestrictions

## Overview

#### Temporary Flight Restrictions (TFRs) define areas restricting air operations (including drone operations) due to hazardous conditions, special events, or other safety/security reasons.
All published/active TFRs in specified area will be included in the response. Check the startDateTime and endDateTime properties to determine whether or not the restriction is applicable during your planned time of operation. In case of a TFR in your area of intended operation, you might still be able to fly by obtaining a via waiver through the [Special Governmental Interest (SGI) process](https://www.faa.gov/uas/advanced_operations/emergency_situations).

### Available Operations

* [tfrByDistanceUsV1RestrictionsDistanceQueryPost](#tfrbydistanceusv1restrictionsdistancequerypost) - Retrieve flight restrictions applicable within given distance of location.
* [tfrByPolyUsV1RestrictionsPolygonQueryPost](#tfrbypolyusv1restrictionspolygonquerypost) - Retrieve flight restrictions applicable within given area.
* [tfrByRouteUsV1RestrictionsRouteQueryPost](#tfrbyrouteusv1restrictionsroutequerypost) - Retrieve flight restrictions applicable along route.

## tfrByDistanceUsV1RestrictionsDistanceQueryPost

Retrieve Flight Restrictions applicable within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TfrByDistanceUsV1RestrictionsDistanceQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\NOTAMsByDistance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TfrByDistanceUsV1RestrictionsDistanceQueryPostRequest();
    $request->notaMsByDistance = new NOTAMsByDistance();
    $request->notaMsByDistance->distance = 2165.5;
    $request->notaMsByDistance->latitude = 135218;
    $request->notaMsByDistance->longitude = 3241.41;
    $request->xApiKey = 'natus';

    $response = $sdk->flightRestrictions->tfrByDistanceUsV1RestrictionsDistanceQueryPost($request);

    if ($response->notaMsDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tfrByPolyUsV1RestrictionsPolygonQueryPost

Retrieve Flight Restrictions located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TfrByPolyUsV1RestrictionsPolygonQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\NOTAMsByPolygon;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TfrByPolyUsV1RestrictionsPolygonQueryPostRequest();
    $request->notaMsByPolygon = new NOTAMsByPolygon();
    $request->notaMsByPolygon->poly = [
        'iste' => 'dolor',
    ];
    $request->xApiKey = 'natus';

    $response = $sdk->flightRestrictions->tfrByPolyUsV1RestrictionsPolygonQueryPost($request);

    if ($response->notaMsPolyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tfrByRouteUsV1RestrictionsRouteQueryPost

Retrieve Flight Restrictions applicable along your route. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TfrByRouteUsV1RestrictionsRouteQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\NOTAMsByRoute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TfrByRouteUsV1RestrictionsRouteQueryPostRequest();
    $request->notaMsByRoute = new NOTAMsByRoute();
    $request->notaMsByRoute->route = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->xApiKey = 'corporis';

    $response = $sdk->flightRestrictions->tfrByRouteUsV1RestrictionsRouteQueryPost($request);

    if ($response->notaMsRouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
