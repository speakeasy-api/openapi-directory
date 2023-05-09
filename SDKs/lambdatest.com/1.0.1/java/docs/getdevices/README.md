# getDevices

### Available Operations

* [devices](#devices) - Fetch all available device combinations.

## devices

Fetch all os devices combinations available on lambdatest platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesRequest;
import org.openapis.openapi.models.operations.DevicesResponse;
import org.openapis.openapi.models.operations.DevicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesRequest req = new DevicesRequest() {{
                os = "quibusdam";
            }};            

            DevicesResponse res = sdk.getDevices.devices(req, new DevicesSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.osDevices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
