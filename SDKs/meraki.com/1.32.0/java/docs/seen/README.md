# seen

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
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpV4ServersSeenRequest req = new GetNetworkSwitchDhcpV4ServersSeenRequest("nisi") {{
                endingBefore = "fuga";
                perPage = 45860L;
                startingAfter = "recusandae";
                t0 = "porro";
                timespan = 6496.64;
            }};            

            GetNetworkSwitchDhcpV4ServersSeenResponse res = sdk.seen.getNetworkSwitchDhcpV4ServersSeen(req);

            if (res.getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
