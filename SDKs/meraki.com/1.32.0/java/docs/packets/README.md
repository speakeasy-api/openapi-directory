# packets

### Available Operations

* [getDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesPacketsRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesPacketsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesPacketsRequest req = new GetDeviceSwitchPortsStatusesPacketsRequest("excepturi") {{
                t0 = "ut";
                timespan = 6225.64;
            }};            

            GetDeviceSwitchPortsStatusesPacketsResponse res = sdk.packets.getDeviceSwitchPortsStatusesPackets(req);

            if (res.getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
