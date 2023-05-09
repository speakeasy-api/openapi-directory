# securityCenters

### Available Operations

* [getNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device

## getNetworkSmDeviceSecurityCenters

List the security centers on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceSecurityCentersRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceSecurityCentersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceSecurityCentersRequest req = new GetNetworkSmDeviceSecurityCentersRequest("officiis", "quas");            

            GetNetworkSmDeviceSecurityCentersResponse res = sdk.securityCenters.getNetworkSmDeviceSecurityCenters(req);

            if (res.getNetworkSmDeviceSecurityCenters200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
