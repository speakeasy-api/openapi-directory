# channelUtilizationHistory

### Available Operations

* [getNetworkWirelessChannelUtilizationHistory](#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client

## getNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessChannelUtilizationHistoryRequest req = new GetNetworkWirelessChannelUtilizationHistoryRequest("ab") {{
                apTag = "natus";
                autoResolution = false;
                band = GetNetworkWirelessChannelUtilizationHistoryBandEnum.SIX;
                clientId = "magni";
                deviceSerial = "a";
                resolution = 768772L;
                t0 = "explicabo";
                t1 = "delectus";
                timespan = 6189.9;
            }};            

            GetNetworkWirelessChannelUtilizationHistoryResponse res = sdk.channelUtilizationHistory.getNetworkWirelessChannelUtilizationHistory(req);

            if (res.getNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
