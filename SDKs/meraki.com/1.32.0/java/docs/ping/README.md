# ping

### Available Operations

* [createDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [getDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job

## createDeviceLiveToolsPing

Enqueue a job to ping a target host from the device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingRequest;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceLiveToolsPingRequest req = new CreateDeviceLiveToolsPingRequest(                new CreateDeviceLiveToolsPingRequestBody("voluptatibus") {{
                                count = 65863L;
                            }};, "optio");            

            CreateDeviceLiveToolsPingResponse res = sdk.ping.createDeviceLiveToolsPing(req);

            if (res.createDeviceLiveToolsPing201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLiveToolsPing

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingRequest;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLiveToolsPingRequest req = new GetDeviceLiveToolsPingRequest("alias", "sequi");            

            GetDeviceLiveToolsPingResponse res = sdk.ping.getDeviceLiveToolsPing(req);

            if (res.getDeviceLiveToolsPing200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
