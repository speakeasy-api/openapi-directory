# failedConnections

### Available Operations

* [getNetworkWirelessFailedConnections](#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range

## getNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessFailedConnectionsRequest req = new GetNetworkWirelessFailedConnectionsRequest("hic") {{
                apTag = "molestias";
                band = GetNetworkWirelessFailedConnectionsBandEnum.SIX;
                clientId = "assumenda";
                serial = "quas";
                ssid = 238004L;
                t0 = "quia";
                t1 = "molestiae";
                timespan = 9211.06;
                vlan = 523906L;
            }};            

            GetNetworkWirelessFailedConnectionsResponse res = sdk.failedConnections.getNetworkWirelessFailedConnections(req);

            if (res.getNetworkWirelessFailedConnections200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
