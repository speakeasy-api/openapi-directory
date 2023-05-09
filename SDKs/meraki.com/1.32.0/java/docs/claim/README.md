# claim

### Available Operations

* [vmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network

## vmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequest;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequestBody;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequestBodySizeEnum;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            VmxNetworkDevicesClaimRequest req = new VmxNetworkDevicesClaimRequest(                new VmxNetworkDevicesClaimRequestBody(VmxNetworkDevicesClaimRequestBodySizeEnum.ONE_HUNDRED);, "repudiandae");            

            VmxNetworkDevicesClaimResponse res = sdk.claim.vmxNetworkDevicesClaim(req);

            if (res.vmxNetworkDevicesClaim200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
