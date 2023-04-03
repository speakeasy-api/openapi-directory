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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### directions

* `getDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `getOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `getTruckDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
* `getTruckOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* `postDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `postOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
* `postTruckDirectionsOutputFormat` - Get the directions, path, distance and travel time between a series of geographic points
* `postTruckOptimalDirectionsOutputFormat` - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

### distance

* `getDistanceOutputFormat` - Get distance and travel time between two geographic points
* `getDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points
* `getTruckDistanceOutputFormat` - Get distance and travel time between two geographic points for a commercial vehicle
* `getTruckDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points for a commercial vehicle
* `postDistanceOutputFormat` - Get distance and travel time between two geographic points
* `postDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points
* `postTruckDistanceOutputFormat` - Get distance and travel time between two geographic points
* `postTruckDistanceBetweenPairsOutputFormat` - Get distance and travel time between each pair of geographic points

### route

* `getOptimalRouteOutputFormat` - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `getRouteOutputFormat` - Get the path, distance and travel time between a series of geographic points
* `getTruckOptimalRouteOutputFormat` - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* `getTruckRouteOutputFormat` - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
* `postOptimalRouteOutputFormat` - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `postRouteOutputFormat` - Get the path, distance and travel time between a series of geographic points
* `postTruckOptimalRouteOutputFormat` - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* `postTruckRouteOutputFormat` - Get the path, distance and travel time between a series of geographic points
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
