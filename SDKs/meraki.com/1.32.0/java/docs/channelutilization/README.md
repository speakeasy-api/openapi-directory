# channelUtilization

### Available Operations

* [getNetworkNetworkHealthChannelUtilization](#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.

## getNetworkNetworkHealthChannelUtilization

Get the channel utilization over each radio for all APs in a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkNetworkHealthChannelUtilizationRequest;
import org.openapis.openapi.models.operations.GetNetworkNetworkHealthChannelUtilizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkNetworkHealthChannelUtilizationRequest req = new GetNetworkNetworkHealthChannelUtilizationRequest("soluta") {{
                endingBefore = "occaecati";
                perPage = 23007L;
                resolution = 993395L;
                startingAfter = "aspernatur";
                t0 = "officiis";
                t1 = "sit";
                timespan = 5776.72;
            }};            

            GetNetworkNetworkHealthChannelUtilizationResponse res = sdk.channelUtilization.getNetworkNetworkHealthChannelUtilization(req);

            if (res.getNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
