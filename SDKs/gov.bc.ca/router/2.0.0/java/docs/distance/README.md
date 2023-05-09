# distance

### Available Operations

* [getDistanceOutputFormat](#getdistanceoutputformat) - Get distance and travel time between two geographic points
* [getDistanceBetweenPairsOutputFormat](#getdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [getTruckDistanceOutputFormat](#gettruckdistanceoutputformat) - Get distance and travel time between two geographic points for a commercial vehicle
* [getTruckDistanceBetweenPairsOutputFormat](#gettruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points for a commercial vehicle
* [postDistanceOutputFormat](#postdistanceoutputformat) - Get distance and travel time between two geographic points
* [postDistanceBetweenPairsOutputFormat](#postdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [postTruckDistanceOutputFormat](#posttruckdistanceoutputformat) - Get distance and travel time between two geographic points
* [postTruckDistanceBetweenPairsOutputFormat](#posttruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points

## getDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistanceOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetDistanceOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetDistanceOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetDistanceOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetDistanceOutputFormatRequest;
import org.openapis.openapi.models.operations.GetDistanceOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDistanceOutputFormatRequest req = new GetDistanceOutputFormatRequest(GetDistanceOutputFormatOutputFormatEnum.JSON, "excepturi") {{
                correctSide = false;
                criteria = GetDistanceOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-05-14T11:45:33.094Z");
                disable = "doloribus";
                distanceUnit = GetDistanceOutputFormatDistanceUnitEnum.MI;
                outputSRS = GetDistanceOutputFormatOutputSrsEnum.FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
                roundTrip = false;
                routeDescription = "mollitia";
            }};            

            GetDistanceOutputFormatResponse res = sdk.distance.getDistanceOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistanceBetweenPairsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetDistanceBetweenPairsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetDistanceBetweenPairsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetDistanceBetweenPairsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetDistanceBetweenPairsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetDistanceBetweenPairsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDistanceBetweenPairsOutputFormatRequest req = new GetDistanceBetweenPairsOutputFormatRequest("culpa", GetDistanceBetweenPairsOutputFormatOutputFormatEnum.JSON, "repellat") {{
                correctSide = false;
                criteria = GetDistanceBetweenPairsOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-06-30T02:19:51.375Z");
                disable = "commodi";
                distanceUnit = GetDistanceBetweenPairsOutputFormatDistanceUnitEnum.KM;
                maxPairs = 474697L;
                outputSRS = GetDistanceBetweenPairsOutputFormatOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                routeDescription = "error";
            }};            

            GetDistanceBetweenPairsOutputFormatResponse res = sdk.distance.getDistanceBetweenPairsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruckDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruckDistanceOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetTruckDistanceOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetTruckDistanceOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetTruckDistanceOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetTruckDistanceOutputFormatRequest;
import org.openapis.openapi.models.operations.GetTruckDistanceOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTruckDistanceOutputFormatRequest req = new GetTruckDistanceOutputFormatRequest(GetTruckDistanceOutputFormatOutputFormatEnum.KML, "vitae") {{
                correctSide = false;
                criteria = GetTruckDistanceOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-05-14T10:37:30.872Z");
                disable = "odit";
                distanceUnit = GetTruckDistanceOutputFormatDistanceUnitEnum.MI;
                outputSRS = GetTruckDistanceOutputFormatOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                roundTrip = false;
                routeDescription = "tenetur";
                truckRouteMultiplier = 368725L;
            }};            

            GetTruckDistanceOutputFormatResponse res = sdk.distance.getTruckDistanceOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTruckDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetTruckDistanceBetweenPairsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetTruckDistanceBetweenPairsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetTruckDistanceBetweenPairsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTruckDistanceBetweenPairsOutputFormatRequest req = new GetTruckDistanceBetweenPairsOutputFormatRequest("possimus", GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum.JSON, "quasi") {{
                correctSide = false;
                criteria = GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2020-12-24T08:13:29.299Z");
                disable = "quasi";
                distanceUnit = GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum.MI;
                maxPairs = 976460L;
                outputSRS = GetTruckDistanceBetweenPairsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
                routeDescription = "nihil";
            }};            

            GetTruckDistanceBetweenPairsOutputFormatResponse res = sdk.distance.getTruckDistanceBetweenPairsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDistanceOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostDistanceOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostDistanceOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostDistanceOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostDistanceOutputFormatRequest;
import org.openapis.openapi.models.operations.PostDistanceOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostDistanceOutputFormatRequest req = new PostDistanceOutputFormatRequest(PostDistanceOutputFormatOutputFormatEnum.HTML, "ipsa") {{
                correctSide = false;
                criteria = PostDistanceOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-04-06T04:03:03.438Z");
                disable = "perferendis";
                distanceUnit = PostDistanceOutputFormatDistanceUnitEnum.KM;
                outputSRS = PostDistanceOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
                roundTrip = false;
                routeDescription = "ut";
            }};            

            PostDistanceOutputFormatResponse res = sdk.distance.postDistanceOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDistanceBetweenPairsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostDistanceBetweenPairsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostDistanceBetweenPairsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostDistanceBetweenPairsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostDistanceBetweenPairsOutputFormatRequest;
import org.openapis.openapi.models.operations.PostDistanceBetweenPairsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostDistanceBetweenPairsOutputFormatRequest req = new PostDistanceBetweenPairsOutputFormatRequest("dicta", PostDistanceBetweenPairsOutputFormatOutputFormatEnum.JSON, "dolore") {{
                correctSide = false;
                criteria = PostDistanceBetweenPairsOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-04-24T15:19:40.519Z");
                disable = "enim";
                distanceUnit = PostDistanceBetweenPairsOutputFormatDistanceUnitEnum.MI;
                maxPairs = 414263L;
                outputSRS = PostDistanceBetweenPairsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
                routeDescription = "quae";
            }};            

            PostDistanceBetweenPairsOutputFormatResponse res = sdk.distance.postDistanceBetweenPairsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTruckDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTruckDistanceOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostTruckDistanceOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostTruckDistanceOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostTruckDistanceOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostTruckDistanceOutputFormatRequest;
import org.openapis.openapi.models.operations.PostTruckDistanceOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTruckDistanceOutputFormatRequest req = new PostTruckDistanceOutputFormatRequest(PostTruckDistanceOutputFormatOutputFormatEnum.HTML, "molestias") {{
                correctSide = false;
                criteria = PostTruckDistanceOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2022-03-16T09:33:50.291Z");
                disable = "praesentium";
                distanceUnit = PostTruckDistanceOutputFormatDistanceUnitEnum.MI;
                outputSRS = PostTruckDistanceOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
                roundTrip = false;
                routeDescription = "quasi";
            }};            

            PostTruckDistanceOutputFormatResponse res = sdk.distance.postTruckDistanceOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTruckDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.PostTruckDistanceBetweenPairsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.PostTruckDistanceBetweenPairsOutputFormatRequest;
import org.openapis.openapi.models.operations.PostTruckDistanceBetweenPairsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTruckDistanceBetweenPairsOutputFormatRequest req = new PostTruckDistanceBetweenPairsOutputFormatRequest("sint", PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum.JSON, "itaque") {{
                correctSide = false;
                criteria = PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum.SHORTEST;
                departure = OffsetDateTime.parse("2022-12-28T14:02:06.064Z");
                disable = "est";
                distanceUnit = PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum.MI;
                maxPairs = 131797L;
                outputSRS = PostTruckDistanceBetweenPairsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
                routeDescription = "distinctio";
            }};            

            PostTruckDistanceBetweenPairsOutputFormatResponse res = sdk.distance.postTruckDistanceBetweenPairsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
