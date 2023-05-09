# picoChargingHistory

### Available Operations

* [picoChargingHistoryGet](#picocharginghistoryget) - Gets the last charging history for a pico station

## picoChargingHistoryGet

Gets the last charging history for a pico station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PicoChargingHistoryGetRequest;
import org.openapis.openapi.models.operations.PicoChargingHistoryGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PicoChargingHistoryGetRequest req = new PicoChargingHistoryGetRequest("consequatur");            

            PicoChargingHistoryGetResponse res = sdk.picoChargingHistory.picoChargingHistoryGet(req);

            if (res.picoChargingHistoryData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
