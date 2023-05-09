# road

### Available Operations

* [roadDisruptedStreets](#roaddisruptedstreets) - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
* [roadDisruption](#roaddisruption) - Get active disruptions, filtered by road ids
* [roadDisruptionById](#roaddisruptionbyid) - Gets a list of active disruptions filtered by disruption Ids.
* [roadGet](#roadget) - Gets all roads managed by TfL
* [roadMetaCategories](#roadmetacategories) - Gets a list of valid RoadDisruption categories
* [roadMetaSeverities](#roadmetaseverities) - Gets a list of valid RoadDisruption severity codes
* [roadStatus](#roadstatus) - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
* [getRoadIds](#getroadids) - Gets the road with the specified id (e.g. A1)

## roadDisruptedStreets

Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoadDisruptedStreetsRequest;
import org.openapis.openapi.models.operations.RoadDisruptedStreetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoadDisruptedStreetsRequest req = new RoadDisruptedStreetsRequest(OffsetDateTime.parse("2022-08-08T19:05:24.174Z"), OffsetDateTime.parse("2021-11-23T10:34:02.904Z"));            

            RoadDisruptedStreetsResponse res = sdk.road.roadDisruptedStreets(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## roadDisruption

Get active disruptions, filtered by road ids

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoadDisruptionRequest;
import org.openapis.openapi.models.operations.RoadDisruptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoadDisruptionRequest req = new RoadDisruptionRequest(                new String[]{{
                                add("magni"),
                            }}) {{
                categories = new String[]{{
                    add("ipsam"),
                    add("alias"),
                    add("fugit"),
                    add("dolorum"),
                }};
                closures = false;
                severities = new String[]{{
                    add("tempora"),
                    add("facilis"),
                    add("tempore"),
                }};
                stripContent = false;
            }};            

            RoadDisruptionResponse res = sdk.road.roadDisruption(req);

            if (res.tflApiPresentationEntitiesRoadDisruptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## roadDisruptionById

Gets a list of active disruptions filtered by disruption Ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoadDisruptionByIdRequest;
import org.openapis.openapi.models.operations.RoadDisruptionByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoadDisruptionByIdRequest req = new RoadDisruptionByIdRequest(                new String[]{{
                                add("delectus"),
                                add("eum"),
                            }}) {{
                stripContent = false;
            }};            

            RoadDisruptionByIdResponse res = sdk.road.roadDisruptionById(req);

            if (res.tflApiPresentationEntitiesRoadDisruption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## roadGet

Gets all roads managed by TfL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoadGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoadGetResponse res = sdk.road.roadGet();

            if (res.tflApiPresentationEntitiesRoadCorridors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## roadMetaCategories

Gets a list of valid RoadDisruption categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoadMetaCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoadMetaCategoriesResponse res = sdk.road.roadMetaCategories();

            if (res.roadMetaCategories200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## roadMetaSeverities

Gets a list of valid RoadDisruption severity codes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoadMetaSeveritiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoadMetaSeveritiesResponse res = sdk.road.roadMetaSeverities();

            if (res.tflApiPresentationEntitiesStatusSeverities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## roadStatus

Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoadStatusRequest;
import org.openapis.openapi.models.operations.RoadStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoadStatusRequest req = new RoadStatusRequest(                new String[]{{
                                add("eligendi"),
                            }}) {{
                dateRangeNullableEndDate = OffsetDateTime.parse("2022-03-17T20:21:28.792Z");
                dateRangeNullableStartDate = OffsetDateTime.parse("2021-03-17T21:24:26.606Z");
            }};            

            RoadStatusResponse res = sdk.road.roadStatus(req);

            if (res.tflApiPresentationEntitiesRoadCorridors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRoadIds

Gets the road with the specified id (e.g. A1)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRoadIdsRequest;
import org.openapis.openapi.models.operations.GetRoadIdsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRoadIdsRequest req = new GetRoadIdsRequest(                new String[]{{
                                add("officia"),
                                add("dolor"),
                                add("debitis"),
                            }});            

            GetRoadIdsResponse res = sdk.road.getRoadIds(req);

            if (res.tflApiPresentationEntitiesRoadCorridors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
