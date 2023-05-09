# certs

### Available Operations

* [getNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device

## getNetworkSmDeviceCerts

List the certs on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCertsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCertsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceCertsRequest req = new GetNetworkSmDeviceCertsRequest("provident", "non");            

            GetNetworkSmDeviceCertsResponse res = sdk.certs.getNetworkSmDeviceCerts(req);

            if (res.getNetworkSmDeviceCerts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
