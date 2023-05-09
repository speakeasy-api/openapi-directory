# linkLayer

### Available Operations

* [getNetworkTopologyLinkLayer](#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.

## getNetworkTopologyLinkLayer

List the LLDP and CDP information for all discovered devices and connections in a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTopologyLinkLayerRequest;
import org.openapis.openapi.models.operations.GetNetworkTopologyLinkLayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTopologyLinkLayerRequest req = new GetNetworkTopologyLinkLayerRequest("doloremque");            

            GetNetworkTopologyLinkLayerResponse res = sdk.linkLayer.getNetworkTopologyLinkLayer(req);

            if (res.getNetworkTopologyLinkLayer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
