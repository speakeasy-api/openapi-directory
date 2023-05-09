# neighborhoodInAStreet

### Available Operations

* [neighborhoodInAStreet](#neighborhoodinastreet) - Returns all neighborhood in a street

## neighborhoodInAStreet

Returns all neighborhood in a specified street

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NeighborhoodInAStreetRequest;
import org.openapis.openapi.models.operations.NeighborhoodInAStreetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NeighborhoodInAStreetRequest req = new NeighborhoodInAStreetRequest("iure", "magnam", "debitis", "ipsa", "delectus");            

            NeighborhoodInAStreetResponse res = sdk.neighborhoodInAStreet.neighborhoodInAStreet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
