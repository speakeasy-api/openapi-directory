# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetDirectionsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T21:52:56.087Z');
    $request->disable = 'quibusdam';
    $request->distanceUnit = GetDirectionsOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetDirectionsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = GetDirectionsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->points = 'illum';
    $request->roundTrip = false;
    $request->routeDescription = 'vel';

    $response = $sdk->directions->getDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [directions](docs/directions/README.md)

* [getDirectionsOutputFormat](docs/directions/README.md#getdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [getOptimalDirectionsOutputFormat](docs/directions/README.md#getoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [getTruckDirectionsOutputFormat](docs/directions/README.md#gettruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
* [getTruckOptimalDirectionsOutputFormat](docs/directions/README.md#gettruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [postDirectionsOutputFormat](docs/directions/README.md#postdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [postOptimalDirectionsOutputFormat](docs/directions/README.md#postoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
* [postTruckDirectionsOutputFormat](docs/directions/README.md#posttruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [postTruckOptimalDirectionsOutputFormat](docs/directions/README.md#posttruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

### [distance](docs/distance/README.md)

* [getDistanceOutputFormat](docs/distance/README.md#getdistanceoutputformat) - Get distance and travel time between two geographic points
* [getDistanceBetweenPairsOutputFormat](docs/distance/README.md#getdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [getTruckDistanceOutputFormat](docs/distance/README.md#gettruckdistanceoutputformat) - Get distance and travel time between two geographic points for a commercial vehicle
* [getTruckDistanceBetweenPairsOutputFormat](docs/distance/README.md#gettruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points for a commercial vehicle
* [postDistanceOutputFormat](docs/distance/README.md#postdistanceoutputformat) - Get distance and travel time between two geographic points
* [postDistanceBetweenPairsOutputFormat](docs/distance/README.md#postdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [postTruckDistanceOutputFormat](docs/distance/README.md#posttruckdistanceoutputformat) - Get distance and travel time between two geographic points
* [postTruckDistanceBetweenPairsOutputFormat](docs/distance/README.md#posttruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points

### [route](docs/route/README.md)

* [getOptimalRouteOutputFormat](docs/route/README.md#getoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [getRouteOutputFormat](docs/route/README.md#getrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [getTruckOptimalRouteOutputFormat](docs/route/README.md#gettruckoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [getTruckRouteOutputFormat](docs/route/README.md#gettruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
* [postOptimalRouteOutputFormat](docs/route/README.md#postoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [postRouteOutputFormat](docs/route/README.md#postrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [postTruckOptimalRouteOutputFormat](docs/route/README.md#posttruckoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [postTruckRouteOutputFormat](docs/route/README.md#posttruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
