# status

### Available Operations

* [getDeviceWirelessStatus](#getdevicewirelessstatus) - Return the SSID statuses of an access point

## getDeviceWirelessStatus

Return the SSID statuses of an access point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessStatusRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessStatusRequest req = new GetDeviceWirelessStatusRequest("dignissimos");            

            GetDeviceWirelessStatusResponse res = sdk.status.getDeviceWirelessStatus(req);

            if (res.getDeviceWirelessStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
