# restrictions

### Available Operations

* [getNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device

## getNetworkSmDeviceRestrictions

List the restrictions on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceRestrictionsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceRestrictionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceRestrictionsRequest req = new GetNetworkSmDeviceRestrictionsRequest("quasi", "molestias");            

            GetNetworkSmDeviceRestrictionsResponse res = sdk.restrictions.getNetworkSmDeviceRestrictions(req);

            if (res.getNetworkSmDeviceRestrictions200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
