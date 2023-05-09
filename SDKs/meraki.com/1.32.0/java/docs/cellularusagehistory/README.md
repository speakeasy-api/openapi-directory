# cellularUsageHistory

### Available Operations

* [getNetworkSmDeviceCellularUsageHistory](#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history

## getNetworkSmDeviceCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCellularUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCellularUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceCellularUsageHistoryRequest req = new GetNetworkSmDeviceCellularUsageHistoryRequest("vel", "modi");            

            GetNetworkSmDeviceCellularUsageHistoryResponse res = sdk.cellularUsageHistory.getNetworkSmDeviceCellularUsageHistory(req);

            if (res.getNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
