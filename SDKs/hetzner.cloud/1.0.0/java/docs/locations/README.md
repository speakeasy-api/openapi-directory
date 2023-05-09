# locations

## Overview

Datacenters are organized by Locations. Datacenters in the same Location are connected with very low latency links.

### Available Operations

* [getLocations](#getlocations) - Get all Locations
* [getLocationsId](#getlocationsid) - Get a Location

## getLocations

Returns all Location objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocationsRequest;
import org.openapis.openapi.models.operations.GetLocationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLocationsRequest req = new GetLocationsRequest() {{
                name = "Violet Price";
            }};            

            GetLocationsResponse res = sdk.locations.getLocations(req);

            if (res.getLocations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocationsId

Returns a specific Location object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocationsIdRequest;
import org.openapis.openapi.models.operations.GetLocationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLocationsIdRequest req = new GetLocationsIdRequest(934214L);            

            GetLocationsIdResponse res = sdk.locations.getLocationsId(req);

            if (res.getLocationsId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
