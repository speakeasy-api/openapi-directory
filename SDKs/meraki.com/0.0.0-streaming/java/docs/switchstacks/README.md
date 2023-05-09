# switchStacks

### Available Operations

* [getNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network

## getNetworkSwitchStacks

List the switch stacks in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStacksRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStacksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStacksRequest req = new GetNetworkSwitchStacksRequest("impedit");            

            GetNetworkSwitchStacksResponse res = sdk.switchStacks.getNetworkSwitchStacks(req);

            if (res.getNetworkSwitchStacks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
