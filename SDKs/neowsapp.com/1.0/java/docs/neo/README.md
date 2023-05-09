# neo

## Overview

Operations with NearEarthObjects

### Available Operations

* [browseNearEarthObjects](#browsenearearthobjects) - Browse the Near Earth Objects service
* [retrieveNearEarthObjectById](#retrievenearearthobjectbyid) - Find Near Earth Objects by id

## browseNearEarthObjects

Retieve a paginated list of Near Earth Objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseNearEarthObjectsRequest;
import org.openapis.openapi.models.operations.BrowseNearEarthObjectsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BrowseNearEarthObjectsRequest req = new BrowseNearEarthObjectsRequest() {{
                page = 715190;
                size = 844266;
            }};            

            BrowseNearEarthObjectsResponse res = sdk.neo.browseNearEarthObjects(req);

            if (res.nearEarthObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveNearEarthObjectById

Retrieve a Near Earth Objects with a given id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveNearEarthObjectByIdRequest;
import org.openapis.openapi.models.operations.RetrieveNearEarthObjectByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveNearEarthObjectByIdRequest req = new RetrieveNearEarthObjectByIdRequest("unde");            

            RetrieveNearEarthObjectByIdResponse res = sdk.neo.retrieveNearEarthObjectById(req);

            if (res.nearEarthObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
