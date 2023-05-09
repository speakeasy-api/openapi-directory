# uplinksLossAndLatency

### Available Operations

* [getOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

## getOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksLossAndLatencyRequest req = new GetOrganizationDevicesUplinksLossAndLatencyRequest("voluptatibus") {{
                ip = "libero";
                t0 = "totam";
                t1 = "sequi";
                timespan = 3980.12;
                uplink = GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum.CELLULAR;
            }};            

            GetOrganizationDevicesUplinksLossAndLatencyResponse res = sdk.uplinksLossAndLatency.getOrganizationDevicesUplinksLossAndLatency(req);

            if (res.getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
