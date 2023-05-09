# occupancy

### Available Operations

* [occupancyGet](#occupancyget) - Gets the occupancy for a car park with a given id
* [occupancyGetAllChargeConnectorStatus](#occupancygetallchargeconnectorstatus) - Gets the occupancy for all charge connectors
* [occupancyGetBikePointsOccupancies](#occupancygetbikepointsoccupancies) - Get the occupancy for bike points.
* [occupancyGetChargeConnectorStatus](#occupancygetchargeconnectorstatus) - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
* [getOccupancyCarPark](#getoccupancycarpark) - Gets the occupancy for all car parks that have occupancy data

## occupancyGet

Gets the occupancy for a car park with a given id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OccupancyGetRequest;
import org.openapis.openapi.models.operations.OccupancyGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OccupancyGetRequest req = new OccupancyGetRequest("odit");            

            OccupancyGetResponse res = sdk.occupancy.occupancyGet(req);

            if (res.tflApiPresentationEntitiesCarParkOccupancy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## occupancyGetAllChargeConnectorStatus

Gets the occupancy for all charge connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OccupancyGetAllChargeConnectorStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OccupancyGetAllChargeConnectorStatusResponse res = sdk.occupancy.occupancyGetAllChargeConnectorStatus();

            if (res.tflApiPresentationEntitiesChargeConnectorOccupancies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## occupancyGetBikePointsOccupancies

Get the occupancy for bike points.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OccupancyGetBikePointsOccupanciesRequest;
import org.openapis.openapi.models.operations.OccupancyGetBikePointsOccupanciesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OccupancyGetBikePointsOccupanciesRequest req = new OccupancyGetBikePointsOccupanciesRequest(                new String[]{{
                                add("sequi"),
                                add("tenetur"),
                                add("ipsam"),
                                add("id"),
                            }});            

            OccupancyGetBikePointsOccupanciesResponse res = sdk.occupancy.occupancyGetBikePointsOccupancies(req);

            if (res.tflApiPresentationEntitiesBikePointOccupancies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## occupancyGetChargeConnectorStatus

Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OccupancyGetChargeConnectorStatusRequest;
import org.openapis.openapi.models.operations.OccupancyGetChargeConnectorStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OccupancyGetChargeConnectorStatusRequest req = new OccupancyGetChargeConnectorStatusRequest(                new String[]{{
                                add("aut"),
                                add("quasi"),
                                add("error"),
                                add("temporibus"),
                            }});            

            OccupancyGetChargeConnectorStatusResponse res = sdk.occupancy.occupancyGetChargeConnectorStatus(req);

            if (res.tflApiPresentationEntitiesChargeConnectorOccupancies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOccupancyCarPark

Gets the occupancy for all car parks that have occupancy data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOccupancyCarParkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOccupancyCarParkResponse res = sdk.occupancy.getOccupancyCarPark();

            if (res.tflApiPresentationEntitiesCarParkOccupancies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
