# applicationUsage

### Available Operations

* [getNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients

## getNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageResponse;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageSsidNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsApplicationUsageRequest req = new GetNetworkClientsApplicationUsageRequest("iste", "accusamus") {{
                endingBefore = "distinctio";
                perPage = 275006L;
                ssidNumber = GetNetworkClientsApplicationUsageSsidNumberEnum.FOUR;
                startingAfter = "blanditiis";
                t0 = "ducimus";
                t1 = "consectetur";
                timespan = 9580.6;
            }};            

            GetNetworkClientsApplicationUsageResponse res = sdk.applicationUsage.getNetworkClientsApplicationUsage(req);

            if (res.getNetworkClientsApplicationUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
