# deviceBySerial

### Available Operations

* [deviceBySerialGet](#devicebyserialget) - Gets a Device by it's Serial Number. The Serial is the part before the "-".

## deviceBySerialGet

Gets a Device by it's Serial Number. The Serial is the part before the "-".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeviceBySerialGetRequest;
import org.openapis.openapi.models.operations.DeviceBySerialGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeviceBySerialGetRequest req = new DeviceBySerialGetRequest(97101L);            

            DeviceBySerialGetResponse res = sdk.deviceBySerial.deviceBySerialGet(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
