# bikePoint

### Available Operations

* [bikePointGet](#bikepointget) - Gets the bike point with the given id.
* [bikePointGetAll](#bikepointgetall) - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
* [bikePointSearch](#bikepointsearch) - Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

## bikePointGet

Gets the bike point with the given id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BikePointGetRequest;
import org.openapis.openapi.models.operations.BikePointGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BikePointGetRequest req = new BikePointGetRequest("distinctio");            

            BikePointGetResponse res = sdk.bikePoint.bikePointGet(req);

            if (res.tflApiPresentationEntitiesPlace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bikePointGetAll

Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BikePointGetAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BikePointGetAllResponse res = sdk.bikePoint.bikePointGetAll();

            if (res.tflApiPresentationEntitiesPlaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bikePointSearch

Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BikePointSearchRequest;
import org.openapis.openapi.models.operations.BikePointSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BikePointSearchRequest req = new BikePointSearchRequest("quibusdam");            

            BikePointSearchResponse res = sdk.bikePoint.bikePointSearch(req);

            if (res.tflApiPresentationEntitiesPlaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
