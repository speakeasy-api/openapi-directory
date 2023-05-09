# lossAndLatencyHistory

### Available Operations

* [getDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

## getDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryResponse;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryUplinkEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLossAndLatencyHistoryRequest req = new GetDeviceLossAndLatencyHistoryRequest("porro", "quia") {{
                resolution = 229954L;
                t0 = "saepe";
                t1 = "corporis";
                timespan = 8256.35;
                uplink = GetDeviceLossAndLatencyHistoryUplinkEnum.WAN2;
            }};            

            GetDeviceLossAndLatencyHistoryResponse res = sdk.lossAndLatencyHistory.getDeviceLossAndLatencyHistory(req);

            if (res.getDeviceLossAndLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
