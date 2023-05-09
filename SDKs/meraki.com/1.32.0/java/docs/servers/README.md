# servers

### Available Operations

* [getNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

## getNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpV4ServersSeenRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpV4ServersSeenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpV4ServersSeenRequest req = new GetNetworkSwitchDhcpV4ServersSeenRequest("laboriosam") {{
                endingBefore = "et";
                perPage = 42437L;
                startingAfter = "fuga";
                t0 = "modi";
                timespan = 6399.65;
            }};            

            GetNetworkSwitchDhcpV4ServersSeenResponse res = sdk.servers.getNetworkSwitchDhcpV4ServersSeen(req);

            if (res.getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
