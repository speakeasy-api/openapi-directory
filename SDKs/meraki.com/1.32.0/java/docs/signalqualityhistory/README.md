# signalQualityHistory

### Available Operations

* [getNetworkWirelessSignalQualityHistory](#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client

## getNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSignalQualityHistoryRequest req = new GetNetworkWirelessSignalQualityHistoryRequest("molestias") {{
                apTag = "ipsum";
                autoResolution = false;
                band = GetNetworkWirelessSignalQualityHistoryBandEnum.TWO4;
                clientId = "dolore";
                deviceSerial = "voluptatibus";
                resolution = 539885L;
                ssid = 62444L;
                t0 = "odio";
                t1 = "minima";
                timespan = 6907.88;
            }};            

            GetNetworkWirelessSignalQualityHistoryResponse res = sdk.signalQualityHistory.getNetworkWirelessSignalQualityHistory(req);

            if (res.getNetworkWirelessSignalQualityHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
