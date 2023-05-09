# networkAdapters

### Available Operations

* [getNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device

## getNetworkSmDeviceNetworkAdapters

List the network adapters of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceNetworkAdaptersRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceNetworkAdaptersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceNetworkAdaptersRequest req = new GetNetworkSmDeviceNetworkAdaptersRequest("nostrum", "deleniti");            

            GetNetworkSmDeviceNetworkAdaptersResponse res = sdk.networkAdapters.getNetworkSmDeviceNetworkAdapters(req);

            if (res.getNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
