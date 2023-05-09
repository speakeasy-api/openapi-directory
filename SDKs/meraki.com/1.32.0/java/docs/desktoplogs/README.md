# desktopLogs

### Available Operations

* [getNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.

## getNetworkSmDeviceDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDesktopLogsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDesktopLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDesktopLogsRequest req = new GetNetworkSmDeviceDesktopLogsRequest("fuga", "voluptatem") {{
                endingBefore = "soluta";
                perPage = 203094L;
                startingAfter = "in";
            }};            

            GetNetworkSmDeviceDesktopLogsResponse res = sdk.desktopLogs.getNetworkSmDeviceDesktopLogs(req);

            if (res.getNetworkSmDeviceDesktopLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
