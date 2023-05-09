# wlanLists

### Available Operations

* [getNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device

## getNetworkSmDeviceWlanLists

List the saved SSID names on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceWlanListsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceWlanListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceWlanListsRequest req = new GetNetworkSmDeviceWlanListsRequest("natus", "unde");            

            GetNetworkSmDeviceWlanListsResponse res = sdk.wlanLists.getNetworkSmDeviceWlanLists(req);

            if (res.getNetworkSmDeviceWlanLists200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
