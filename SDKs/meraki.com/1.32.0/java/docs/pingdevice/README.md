# pingDevice

### Available Operations

* [createDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [getDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job

## createDeviceLiveToolsPingDevice

Enqueue a job to check connectivity status to the device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceRequest;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceLiveToolsPingDeviceRequest req = new CreateDeviceLiveToolsPingDeviceRequest("itaque") {{
                requestBody = new CreateDeviceLiveToolsPingDeviceRequestBody() {{
                    count = 622127L;
                }};;
            }};            

            CreateDeviceLiveToolsPingDeviceResponse res = sdk.pingDevice.createDeviceLiveToolsPingDevice(req);

            if (res.createDeviceLiveToolsPingDevice201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLiveToolsPingDevice

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLiveToolsPingDeviceRequest req = new GetDeviceLiveToolsPingDeviceRequest("excepturi", "earum");            

            GetDeviceLiveToolsPingDeviceResponse res = sdk.pingDevice.getDeviceLiveToolsPingDevice(req);

            if (res.getDeviceLiveToolsPingDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
