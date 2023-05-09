# dataRateHistory

### Available Operations

* [getNetworkWirelessDataRateHistory](#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client

## getNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDataRateHistoryRequest req = new GetNetworkWirelessDataRateHistoryRequest("tempora") {{
                apTag = "quam";
                autoResolution = false;
                band = GetNetworkWirelessDataRateHistoryBandEnum.TWO4;
                clientId = "veniam";
                deviceSerial = "culpa";
                resolution = 783061L;
                ssid = 819440L;
                t0 = "laborum";
                t1 = "voluptatem";
                timespan = 3114.7;
            }};            

            GetNetworkWirelessDataRateHistoryResponse res = sdk.dataRateHistory.getNetworkWirelessDataRateHistory(req);

            if (res.getNetworkWirelessDataRateHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
