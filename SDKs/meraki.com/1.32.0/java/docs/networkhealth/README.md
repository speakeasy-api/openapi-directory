# networkHealth

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
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkNetworkHealthChannelUtilizationRequest req = new GetNetworkNetworkHealthChannelUtilizationRequest("cum") {{
                endingBefore = "repellendus";
                perPage = 217602L;
                resolution = 271179L;
                startingAfter = "sunt";
                t0 = "harum";
                t1 = "quia";
                timespan = 3729.86;
            }};            

            GetNetworkNetworkHealthChannelUtilizationResponse res = sdk.networkHealth.getNetworkNetworkHealthChannelUtilization(req);

            if (res.getNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
