# vehicle

### Available Operations

* [vehicleGet](#vehicleget) - Gets the predictions for a given list of vehicle Id's.

## vehicleGet

Gets the predictions for a given list of vehicle Id's.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VehicleGetRequest;
import org.openapis.openapi.models.operations.VehicleGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VehicleGetRequest req = new VehicleGetRequest(                new String[]{{
                                add("quis"),
                            }});            

            VehicleGetResponse res = sdk.vehicle.vehicleGet(req);

            if (res.tflApiPresentationEntitiesPredictions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
