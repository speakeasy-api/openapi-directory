# picoCharging

### Available Operations

* [picoChargingGet](#picochargingget) - Gets the active charging data of a pico station

## picoChargingGet

Gets the active charging data of a pico station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PicoChargingGetRequest;
import org.openapis.openapi.models.operations.PicoChargingGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PicoChargingGetRequest req = new PicoChargingGetRequest("cupiditate");            

            PicoChargingGetResponse res = sdk.picoCharging.picoChargingGet(req);

            if (res.picoChargingData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
