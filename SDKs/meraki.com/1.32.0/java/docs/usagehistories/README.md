# usageHistories

### Available Operations

* [getNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients

## getNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesResponse;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesSsidNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsUsageHistoriesRequest req = new GetNetworkClientsUsageHistoriesRequest("sed", "dolores") {{
                endingBefore = "earum";
                perPage = 351462L;
                ssidNumber = GetNetworkClientsUsageHistoriesSsidNumberEnum.ELEVEN;
                startingAfter = "illum";
                t0 = "soluta";
                t1 = "officiis";
                timespan = 9017.89;
            }};            

            GetNetworkClientsUsageHistoriesResponse res = sdk.usageHistories.getNetworkClientsUsageHistories(req);

            if (res.getNetworkClientsUsageHistories200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
