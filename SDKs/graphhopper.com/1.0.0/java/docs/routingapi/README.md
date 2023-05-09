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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRouteAlgorithmEnum;
import org.openapis.openapi.models.operations.GetRouteCurbsideEnum;
import org.openapis.openapi.models.operations.GetRouteRequest;
import org.openapis.openapi.models.operations.GetRouteResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VehicleProfileIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRouteRequest req = new GetRouteRequest(                new String[]{{
                                add("nisi"),
                                add("aut"),
                            }}) {{
                algorithm = GetRouteAlgorithmEnum.ALTERNATIVE_ROUTE;
                alternativeRouteMaxPaths = 185232;
                alternativeRouteMaxShareFactor = 8453.58;
                alternativeRouteMaxWeightFactor = 4012.59;
                avoid = "deleniti";
                blockArea = "itaque";
                calcPoints = false;
                chDisable = false;
                curbside = new org.openapis.openapi.models.operations.GetRouteCurbsideEnum[]{{
                    add(GetRouteCurbsideEnum.ANY),
                    add(GetRouteCurbsideEnum.RIGHT),
                    add(GetRouteCurbsideEnum.LEFT),
                }};
                debug = false;
                details = new String[]{{
                    add("at"),
                }};
                elevation = false;
                heading = new Integer[]{{
                    add(454162),
                }};
                headingPenalty = 55965;
                instructions = false;
                locale = "minima";
                optimize = "veritatis";
                passThrough = false;
                pointHint = new String[]{{
                    add("adipisci"),
                }};
                pointsEncoded = false;
                roundTripDistance = 614465;
                roundTripSeed = 839513L;
                snapPrevention = new String[]{{
                    add("rem"),
                }};
                turnCosts = false;
                vehicle = VehicleProfileIdEnum.CAR;
                weighting = "laudantium";
            }};            

            GetRouteResponse res = sdk.routingAPI.getRoute(req);

            if (res.routeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRouteInfo

Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRouteInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRouteInfoResponse res = sdk.routingAPI.getRouteInfo();

            if (res.infoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRouteResponse;
import org.openapis.openapi.models.shared.RouteRequest;
import org.openapis.openapi.models.shared.RouteRequestAlgorithmEnum;
import org.openapis.openapi.models.shared.RouteRequestCurbsidesEnum;
import org.openapis.openapi.models.shared.RouteRequestVehicleEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RouteRequest req = new RouteRequest() {{
                algorithm = RouteRequestAlgorithmEnum.ROUND_TRIP;
                alternativeRouteMaxPaths = 544591;
                alternativeRouteMaxShareFactor = 2519.41;
                alternativeRouteMaxWeightFactor = 324.65;
                avoid = "dolor";
                blockArea = "occaecati";
                calcPoints = false;
                chDisable = false;
                curbsides = new org.openapis.openapi.models.shared.RouteRequestCurbsidesEnum[]{{
                    add(RouteRequestCurbsidesEnum.LEFT),
                    add(RouteRequestCurbsidesEnum.ANY),
                }};
                debug = false;
                details = new String[]{{
                    add("aut"),
                    add("dignissimos"),
                }};
                elevation = false;
                headingPenalty = 115484;
                headings = new Integer[]{{
                    add(618480),
                    add(244651),
                    add(974257),
                    add(374323),
                }};
                instructions = false;
                locale = "asperiores";
                optimize = "aperiam";
                passThrough = false;
                pointHints = new String[]{{
                    add("quaerat"),
                    add("consequuntur"),
                }};
                points = new Double[][]{{
                    add(new Double[]{{
                        add(8070.23),
                        add(4903.05),
                        add(6400.24),
                    }}),
                    add(new Double[]{{
                        add(3681.02),
                        add(653.04),
                        add(3127.53),
                        add(7832.35),
                    }}),
                    add(new Double[]{{
                        add(2883.98),
                        add(704.47),
                        add(2414.18),
                        add(6835.73),
                    }}),
                    add(new Double[]{{
                        add(3807.29),
                        add(2460.63),
                        add(6339.31),
                    }}),
                }};
                pointsEncoded = false;
                roundTripDistance = 665859;
                roundTripSeed = 926880L;
                snapPreventions = new String[]{{
                    add("fugiat"),
                    add("vel"),
                    add("ducimus"),
                }};
                vehicle = RouteRequestVehicleEnum.BIKE;
                weighting = "quos";
            }};            

            PostRouteResponse res = sdk.routingAPI.postRoute(req);

            if (res.routeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
