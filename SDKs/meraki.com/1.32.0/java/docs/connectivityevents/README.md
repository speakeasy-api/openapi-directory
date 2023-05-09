# connectivityEvents

### Available Operations

* [getNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.

## getNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsSsidNumberEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsTypesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientConnectivityEventsRequest req = new GetNetworkWirelessClientConnectivityEventsRequest("hic", "nam") {{
                band = GetNetworkWirelessClientConnectivityEventsBandEnum.FIVE;
                deviceSerial = "assumenda";
                endingBefore = "officia";
                includedSeverities = new org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[]{{
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.WARN),
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.BAD),
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.INFO),
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.WARN),
                }};
                perPage = 126999L;
                ssidNumber = GetNetworkWirelessClientConnectivityEventsSsidNumberEnum.FIVE;
                startingAfter = "quisquam";
                t0 = "quae";
                t1 = "impedit";
                timespan = 7035.74;
                types = new org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsTypesEnum[]{{
                    add(GetNetworkWirelessClientConnectivityEventsTypesEnum.ASSOC),
                    add(GetNetworkWirelessClientConnectivityEventsTypesEnum.DHCP),
                }};
            }};            

            GetNetworkWirelessClientConnectivityEventsResponse res = sdk.connectivityEvents.getNetworkWirelessClientConnectivityEvents(req);

            if (res.getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
