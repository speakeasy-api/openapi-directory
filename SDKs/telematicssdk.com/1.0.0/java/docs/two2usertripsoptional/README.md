# two2UserTripsOptional

### Available Operations

* [tripsTripDetails](#tripstripdetails) - Trips - trip details

## tripsTripDetails

Trips - trip details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TripsTripDetailsRequest;
import org.openapis.openapi.models.operations.TripsTripDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TripsTripDetailsRequest req = new TripsTripDetailsRequest() {{
                trackToken = "quibusdam";
            }};            

            TripsTripDetailsResponse res = sdk.two2UserTripsOptional.tripsTripDetails(req);

            if (res.tripsTripDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
