# clientCountHistory

### Available Operations

* [getNetworkWirelessClientCountHistory](#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client

## getNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientCountHistoryRequest req = new GetNetworkWirelessClientCountHistoryRequest("consequatur") {{
                apTag = "nemo";
                autoResolution = false;
                band = GetNetworkWirelessClientCountHistoryBandEnum.FIVE;
                clientId = "numquam";
                deviceSerial = "numquam";
                resolution = 735986L;
                ssid = 564647L;
                t0 = "amet";
                t1 = "enim";
                timespan = 8463.13;
            }};            

            GetNetworkWirelessClientCountHistoryResponse res = sdk.clientCountHistory.getNetworkWirelessClientCountHistory(req);

            if (res.getNetworkWirelessClientCountHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
