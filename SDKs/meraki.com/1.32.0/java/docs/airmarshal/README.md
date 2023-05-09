# airMarshal

### Available Operations

* [getNetworkWirelessAirMarshal](#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network

## getNetworkWirelessAirMarshal

List Air Marshal scan results from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessAirMarshalRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessAirMarshalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessAirMarshalRequest req = new GetNetworkWirelessAirMarshalRequest("quis") {{
                t0 = "reprehenderit";
                timespan = 6255.28;
            }};            

            GetNetworkWirelessAirMarshalResponse res = sdk.airMarshal.getNetworkWirelessAirMarshal(req);

            if (res.getNetworkWirelessAirMarshal200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
