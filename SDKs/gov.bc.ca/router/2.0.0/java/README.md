# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetDirectionsOutputFormatRequest req = new GetDirectionsOutputFormatRequest() {{
                pathParams = new GetDirectionsOutputFormatPathParams() {{
                    outputFormat = "json";
                }};
                queryParams = new GetDirectionsOutputFormatQueryParams() {{
                    correctSide = false;
                    criteria = "fastest";
                    departure = "1970-09-22T13:56:41Z";
                    disable = "rerum";
                    distanceUnit = "mi";
                    outputSRS = 2129308593024805318;
                    points = "rem";
                    roundTrip = true;
                    routeDescription = "sit";
                }};
            }};

            GetDirectionsOutputFormatResponse res = sdk.directions.getDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
