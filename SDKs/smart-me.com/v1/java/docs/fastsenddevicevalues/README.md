# fastSendDeviceValues

### Available Operations

* [fastSendDeviceValuesGet](#fastsenddevicevaluesget) - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

## fastSendDeviceValuesGet

Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FastSendDeviceValuesGetRequest;
import org.openapis.openapi.models.operations.FastSendDeviceValuesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FastSendDeviceValuesGetRequest req = new FastSendDeviceValuesGetRequest("vero");            

            FastSendDeviceValuesGetResponse res = sdk.fastSendDeviceValues.fastSendDeviceValuesGet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
