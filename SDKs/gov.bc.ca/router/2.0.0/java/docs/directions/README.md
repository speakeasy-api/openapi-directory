# directions

### Available Operations

* [getDirectionsOutputFormat](#getdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [getOptimalDirectionsOutputFormat](#getoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [getTruckDirectionsOutputFormat](#gettruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
* [getTruckOptimalDirectionsOutputFormat](#gettruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [postDirectionsOutputFormat](#postdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [postOptimalDirectionsOutputFormat](#postoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
* [postTruckDirectionsOutputFormat](#posttruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [postTruckOptimalDirectionsOutputFormat](#posttruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

## getDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDirectionsOutputFormatRequest req = new GetDirectionsOutputFormatRequest(GetDirectionsOutputFormatOutputFormatEnum.KML, "iure") {{
                correctSide = false;
                criteria = GetDirectionsOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-10-30T21:34:57.850Z");
                disable = "delectus";
                distanceUnit = GetDirectionsOutputFormatDistanceUnitEnum.KM;
                outputSRS = GetDirectionsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
                roundTrip = false;
                routeDescription = "molestiae";
            }};            

            GetDirectionsOutputFormatResponse res = sdk.directions.getDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOptimalDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetOptimalDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetOptimalDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetOptimalDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetOptimalDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetOptimalDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOptimalDirectionsOutputFormatRequest req = new GetOptimalDirectionsOutputFormatRequest(GetOptimalDirectionsOutputFormatOutputFormatEnum.HTML, "voluptatum") {{
                correctSide = false;
                criteria = GetOptimalDirectionsOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-03-20T06:24:36.919Z");
                disable = "recusandae";
                distanceUnit = GetOptimalDirectionsOutputFormatDistanceUnitEnum.MI;
                outputSRS = GetOptimalDirectionsOutputFormatOutputSrsEnum.FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
                roundTrip = false;
                routeDescription = "quis";
            }};            

            GetOptimalDirectionsOutputFormatResponse res = sdk.directions.getOptimalDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruckDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruckDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetTruckDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetTruckDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetTruckDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetTruckDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetTruckDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTruckDirectionsOutputFormatRequest req = new GetTruckDirectionsOutputFormatRequest(GetTruckDirectionsOutputFormatOutputFormatEnum.KML, "perferendis") {{
                correctSide = false;
                criteria = GetTruckDirectionsOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2020-02-17T21:57:45.117Z");
                disable = "quo";
                distanceUnit = GetTruckDirectionsOutputFormatDistanceUnitEnum.KM;
                outputSRS = GetTruckDirectionsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
                partition = "at";
                roundTrip = false;
                routeDescription = "maiores";
                truckRouteMultiplier = 473608L;
            }};            

            GetTruckDirectionsOutputFormatResponse res = sdk.directions.getTruckDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruckOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruckOptimalDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetTruckOptimalDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetTruckOptimalDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetTruckOptimalDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetTruckOptimalDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTruckOptimalDirectionsOutputFormatRequest req = new GetTruckOptimalDirectionsOutputFormatRequest(GetTruckOptimalDirectionsOutputFormatOutputFormatEnum.HTML, "esse") {{
                correctSide = false;
                criteria = GetTruckOptimalDirectionsOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2020-12-18T15:02:44.758Z");
                disable = "dicta";
                distanceUnit = GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum.MI;
                outputSRS = GetTruckOptimalDirectionsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
                partition = "occaecati";
                roundTrip = false;
                routeDescription = "fugit";
                truckRouteMultiplier = 537373L;
            }};            

            GetTruckOptimalDirectionsOutputFormatResponse res = sdk.directions.getTruckOptimalDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.PostDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostDirectionsOutputFormatRequest req = new PostDirectionsOutputFormatRequest(PostDirectionsOutputFormatOutputFormatEnum.HTML, "totam") {{
                correctSide = false;
                criteria = PostDirectionsOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-07-12T03:15:36.542Z");
                disable = "modi";
                distanceUnit = PostDirectionsOutputFormatDistanceUnitEnum.KM;
                outputSRS = PostDirectionsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
                roundTrip = false;
                routeDescription = "cum";
            }};            

            PostDirectionsOutputFormatResponse res = sdk.directions.postDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOptimalDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostOptimalDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostOptimalDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostOptimalDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostOptimalDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.PostOptimalDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOptimalDirectionsOutputFormatRequest req = new PostOptimalDirectionsOutputFormatRequest(PostOptimalDirectionsOutputFormatOutputFormatEnum.JSON, "excepturi") {{
                correctSide = false;
                criteria = PostOptimalDirectionsOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-09-04T16:31:28.618Z");
                disable = "natus";
                distanceUnit = PostOptimalDirectionsOutputFormatDistanceUnitEnum.KM;
                outputSRS = PostOptimalDirectionsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                roundTrip = false;
                routeDescription = "dolor";
            }};            

            PostOptimalDirectionsOutputFormatResponse res = sdk.directions.postOptimalDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTruckDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTruckDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostTruckDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostTruckDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostTruckDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostTruckDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.PostTruckDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTruckDirectionsOutputFormatRequest req = new PostTruckDirectionsOutputFormatRequest(PostTruckDirectionsOutputFormatOutputFormatEnum.KML, "hic") {{
                correctSide = false;
                criteria = PostTruckDirectionsOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-02-06T12:52:33.708Z");
                disable = "corporis";
                distanceUnit = PostTruckDirectionsOutputFormatDistanceUnitEnum.MI;
                outputSRS = PostTruckDirectionsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
                partition = "saepe";
                roundTrip = false;
                routeDescription = "quidem";
                truckRouteMultiplier = 99280L;
            }};            

            PostTruckDirectionsOutputFormatResponse res = sdk.directions.postTruckDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTruckOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTruckOptimalDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostTruckOptimalDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostTruckOptimalDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostTruckOptimalDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.PostTruckOptimalDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTruckOptimalDirectionsOutputFormatRequest req = new PostTruckOptimalDirectionsOutputFormatRequest(PostTruckOptimalDirectionsOutputFormatOutputFormatEnum.HTML, "est") {{
                correctSide = false;
                criteria = PostTruckOptimalDirectionsOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-08-29T05:39:49.755Z");
                disable = "dolorem";
                distanceUnit = PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum.KM;
                outputSRS = PostTruckOptimalDirectionsOutputFormatOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                partition = "nobis";
                roundTrip = false;
                routeDescription = "enim";
                truckRouteMultiplier = 607831L;
            }};            

            PostTruckOptimalDirectionsOutputFormatResponse res = sdk.directions.postTruckOptimalDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
