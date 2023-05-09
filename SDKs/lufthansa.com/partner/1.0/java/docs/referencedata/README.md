# referenceData

### Available Operations

* [seatDetails](#seatdetails) - Seat Details

## seatDetails

A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SeatDetailsRequest;
import org.openapis.openapi.models.operations.SeatDetailsResponse;
import org.openapis.openapi.models.operations.SeatDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SeatDetailsRequest req = new SeatDetailsRequest("vero", "nihil", "praesentium") {{
                lang = "voluptatibus";
            }};            

            SeatDetailsResponse res = sdk.referenceData.seatDetails(req, new SeatDetailsSecurity("ipsa") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.seatDetails200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
