# subnets

### Available Operations

* [getDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance

## getDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceApplianceDhcpSubnetsRequest;
import org.openapis.openapi.models.operations.GetDeviceApplianceDhcpSubnetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceApplianceDhcpSubnetsRequest req = new GetDeviceApplianceDhcpSubnetsRequest("asperiores");            

            GetDeviceApplianceDhcpSubnetsResponse res = sdk.subnets.getDeviceApplianceDhcpSubnets(req);

            if (res.getDeviceApplianceDhcpSubnets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
