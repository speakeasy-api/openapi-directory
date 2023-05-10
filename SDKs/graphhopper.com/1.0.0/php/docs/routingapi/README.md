# routingAPI

## Overview


### Introduction

![Routing screenshot](./img/routing-example.png)

The Routing API is part of the GraphHopper Directions API. Routing is the process of finding the best path connecting
two or more points, where the meaning of ''best'' depends on the vehicle and use case.

### Navigation
If you plan to use the Routing API for navigation, have a look at our [open source demo navigation application](https://github.com/graphhopper/graphhopper-navigation-example) and adapt it to your needs.

### Fast
To get started using this API, just provide two or more points and retrieve the fastest route through the road
network that connects them. This type of request is heavily optimized for query performance, so it does not
allow for some advanced features.
### Flexible
Unlock further flexible features via `ch.disable=true`.


### Available Operations

* [getRoute](#getroute) - GET Route Endpoint
* [getRouteInfo](#getrouteinfo) - Coverage information
* [postRoute](#postroute) - POST Route Endpoint

## getRoute

The GET request is the most simple one: just specify the parameter in the URL and you are done.
Can be tried directly in every browser.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRouteCurbsideEnum;
use \OpenAPI\OpenAPI\Models\Shared\VehicleProfileIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRouteRequest();
    $request->algorithm = GetRouteAlgorithmEnum::ALTERNATIVE_ROUTE;
    $request->alternativeRouteMaxPaths = 523248;
    $request->alternativeRouteMaxShareFactor = 9167.23;
    $request->alternativeRouteMaxWeightFactor = 939.4;
    $request->avoid = 'repudiandae';
    $request->blockArea = 'sint';
    $request->calcPoints = false;
    $request->chDisable = false;
    $request->curbside = [
        GetRouteCurbsideEnum::LEFT,
    ];
    $request->debug = false;
    $request->details = [
        'enim',
        'consequatur',
    ];
    $request->elevation = false;
    $request->heading = [
        842342,
        131797,
        647174,
    ];
    $request->headingPenalty = 716327;
    $request->instructions = false;
    $request->locale = 'quibusdam';
    $request->optimize = 'labore';
    $request->passThrough = false;
    $request->point = [
        'qui',
        'aliquid',
    ];
    $request->pointHint = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->pointsEncoded = false;
    $request->roundTripDistance = 828940;
    $request->roundTripSeed = 369808;
    $request->snapPrevention = [
        'fugit',
    ];
    $request->turnCosts = false;
    $request->vehicle = VehicleProfileIdEnum::SCOOTER;
    $request->weighting = 'excepturi';

    $response = $sdk->routingAPI->getRoute($request);

    if ($response->routeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRouteInfo

Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->routingAPI->getRouteInfo();

    if ($response->infoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRoute

Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
If you are familiar with POST requests and JSON then do not hesitate to continue here.

Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
speed up the request.

To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
The effected parameters are: `points`, `point_hints` and `snap_preventions`.

**Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.

For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
```json
{ "points": [[11,10], [22,20]] }
```
Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).

Example:
```bash
curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d '{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}'
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RouteRequest;
use \OpenAPI\OpenAPI\Models\Shared\RouteRequestAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteRequestCurbsidesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteRequestVehicleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RouteRequest();
    $request->algorithm = RouteRequestAlgorithmEnum::ROUND_TRIP;
    $request->alternativeRouteMaxPaths = 703737;
    $request->alternativeRouteMaxShareFactor = 7351.94;
    $request->alternativeRouteMaxWeightFactor = 2884.76;
    $request->avoid = 'delectus';
    $request->blockArea = 'eum';
    $request->calcPoints = false;
    $request->chDisable = false;
    $request->curbsides = [
        RouteRequestCurbsidesEnum::LEFT,
    ];
    $request->debug = false;
    $request->details = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->elevation = false;
    $request->headingPenalty = 572252;
    $request->headings = [
        223081,
        891555,
        952749,
    ];
    $request->instructions = false;
    $request->locale = 'dolorum';
    $request->optimize = 'in';
    $request->passThrough = false;
    $request->pointHints = [
        'illum',
        'maiores',
    ];
    $request->points = [
        [
            2974.37,
        ],
        [
            8137.98,
            4118.2,
            3965.06,
            6754.39,
        ],
        [
            2497.96,
            5812.73,
            3132.18,
            8817.36,
        ],
    ];
    $request->pointsEncoded = false;
    $request->roundTripDistance = 965417;
    $request->roundTripSeed = 692532;
    $request->snapPreventions = [
        'nam',
        'id',
        'blanditiis',
    ];
    $request->vehicle = RouteRequestVehicleEnum::BIKE;
    $request->weighting = 'deleniti';

    $response = $sdk->routingAPI->postRoute($request);

    if ($response->routeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
