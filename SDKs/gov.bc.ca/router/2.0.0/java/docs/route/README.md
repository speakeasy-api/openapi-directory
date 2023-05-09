# route

### Available Operations

* [getOptimalRouteOutputFormat](#getoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [getRouteOutputFormat](#getrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [getTruckOptimalRouteOutputFormat](#gettruckoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [getTruckRouteOutputFormat](#gettruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
* [postOptimalRouteOutputFormat](#postoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [postRouteOutputFormat](#postrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [postTruckOptimalRouteOutputFormat](#posttruckoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [postTruckRouteOutputFormat](#posttruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points

## getOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOptimalRouteOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetOptimalRouteOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetOptimalRouteOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetOptimalRouteOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetOptimalRouteOutputFormatRequest;
import org.openapis.openapi.models.operations.GetOptimalRouteOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOptimalRouteOutputFormatRequest req = new GetOptimalRouteOutputFormatRequest(GetOptimalRouteOutputFormatOutputFormatEnum.JSON, "modi") {{
                correctSide = false;
                criteria = GetOptimalRouteOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-05-31T22:08:47.731Z");
                disable = "quos";
                distanceUnit = GetOptimalRouteOutputFormatDistanceUnitEnum.KM;
                outputSRS = GetOptimalRouteOutputFormatOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                roundTrip = false;
                routeDescription = "assumenda";
            }};            

            GetOptimalRouteOutputFormatResponse res = sdk.route.getOptimalRouteOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRouteOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetRouteOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetRouteOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetRouteOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetRouteOutputFormatRequest;
import org.openapis.openapi.models.operations.GetRouteOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRouteOutputFormatRequest req = new GetRouteOutputFormatRequest(GetRouteOutputFormatOutputFormatEnum.JSON, "fugit") {{
                correctSide = false;
                criteria = GetRouteOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-06-17T21:27:36.672Z");
                disable = "facilis";
                distanceUnit = GetRouteOutputFormatDistanceUnitEnum.MI;
                outputSRS = GetRouteOutputFormatOutputSrsEnum.THREE_THOUSAND_AND_FIVE;
                roundTrip = false;
                routeDescription = "delectus";
            }};            

            GetRouteOutputFormatResponse res = sdk.route.getRouteOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruckOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruckOptimalRouteOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetTruckOptimalRouteOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetTruckOptimalRouteOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetTruckOptimalRouteOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetTruckOptimalRouteOutputFormatRequest;
import org.openapis.openapi.models.operations.GetTruckOptimalRouteOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTruckOptimalRouteOutputFormatRequest req = new GetTruckOptimalRouteOutputFormatRequest(GetTruckOptimalRouteOutputFormatOutputFormatEnum.JSON, "eligendi") {{
                correctSide = false;
                criteria = GetTruckOptimalRouteOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-05-29T21:42:45.399Z");
                disable = "necessitatibus";
                distanceUnit = GetTruckOptimalRouteOutputFormatDistanceUnitEnum.MI;
                outputSRS = GetTruckOptimalRouteOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
                partition = "dolor";
                roundTrip = false;
                routeDescription = "debitis";
                truckRouteMultiplier = 952749L;
            }};            

            GetTruckOptimalRouteOutputFormatResponse res = sdk.route.getTruckOptimalRouteOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruckRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruckRouteOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetTruckRouteOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetTruckRouteOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetTruckRouteOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetTruckRouteOutputFormatRequest;
import org.openapis.openapi.models.operations.GetTruckRouteOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTruckRouteOutputFormatRequest req = new GetTruckRouteOutputFormatRequest(GetTruckRouteOutputFormatOutputFormatEnum.KML, "in") {{
                correctSide = false;
                criteria = GetTruckRouteOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2020-11-26T01:41:04.216Z");
                disable = "dicta";
                distanceUnit = GetTruckRouteOutputFormatDistanceUnitEnum.KM;
                outputSRS = GetTruckRouteOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
                partition = "facere";
                roundTrip = false;
                routeDescription = "ea";
                truckRouteMultiplier = 396506L;
            }};            

            GetTruckRouteOutputFormatResponse res = sdk.route.getTruckRouteOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOptimalRouteOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostOptimalRouteOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostOptimalRouteOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostOptimalRouteOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostOptimalRouteOutputFormatRequest;
import org.openapis.openapi.models.operations.PostOptimalRouteOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOptimalRouteOutputFormatRequest req = new PostOptimalRouteOutputFormatRequest(PostOptimalRouteOutputFormatOutputFormatEnum.HTML, "non") {{
                correctSide = false;
                criteria = PostOptimalRouteOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-02-13T03:59:53.583Z");
                disable = "delectus";
                distanceUnit = PostOptimalRouteOutputFormatDistanceUnitEnum.MI;
                outputSRS = PostOptimalRouteOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                roundTrip = false;
                routeDescription = "nam";
            }};            

            PostOptimalRouteOutputFormatResponse res = sdk.route.postOptimalRouteOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRouteOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostRouteOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostRouteOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostRouteOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostRouteOutputFormatRequest;
import org.openapis.openapi.models.operations.PostRouteOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostRouteOutputFormatRequest req = new PostRouteOutputFormatRequest(PostRouteOutputFormatOutputFormatEnum.KML, "deleniti") {{
                correctSide = false;
                criteria = PostRouteOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-05-10T22:38:44.806Z");
                disable = "nisi";
                distanceUnit = PostRouteOutputFormatDistanceUnitEnum.KM;
                outputSRS = PostRouteOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                roundTrip = false;
                routeDescription = "omnis";
            }};            

            PostRouteOutputFormatResponse res = sdk.route.postRouteOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTruckOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTruckOptimalRouteOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostTruckOptimalRouteOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostTruckOptimalRouteOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostTruckOptimalRouteOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostTruckOptimalRouteOutputFormatRequest;
import org.openapis.openapi.models.operations.PostTruckOptimalRouteOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTruckOptimalRouteOutputFormatRequest req = new PostTruckOptimalRouteOutputFormatRequest(PostTruckOptimalRouteOutputFormatOutputFormatEnum.JSON, "nihil") {{
                correctSide = false;
                criteria = PostTruckOptimalRouteOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2021-09-06T01:45:34.248Z");
                disable = "labore";
                distanceUnit = PostTruckOptimalRouteOutputFormatDistanceUnitEnum.KM;
                outputSRS = PostTruckOptimalRouteOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
                partition = "natus";
                roundTrip = false;
                routeDescription = "nobis";
                truckRouteMultiplier = 428769L;
            }};            

            PostTruckOptimalRouteOutputFormatResponse res = sdk.route.postTruckOptimalRouteOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTruckRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTruckRouteOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostTruckRouteOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostTruckRouteOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostTruckRouteOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostTruckRouteOutputFormatRequest;
import org.openapis.openapi.models.operations.PostTruckRouteOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTruckRouteOutputFormatRequest req = new PostTruckRouteOutputFormatRequest(PostTruckRouteOutputFormatOutputFormatEnum.JSON, "architecto") {{
                correctSide = false;
                criteria = PostTruckRouteOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-06-06T23:06:26.119Z");
                disable = "ullam";
                distanceUnit = PostTruckRouteOutputFormatDistanceUnitEnum.MI;
                outputSRS = PostTruckRouteOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                partition = "sint";
                roundTrip = false;
                routeDescription = "accusantium";
                truckRouteMultiplier = 653201L;
            }};            

            PostTruckRouteOutputFormatResponse res = sdk.route.postTruckRouteOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
