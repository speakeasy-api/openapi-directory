# byClient

### Available Operations

* [getNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies

## getNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPoliciesByClientRequest;
import org.openapis.openapi.models.operations.GetNetworkPoliciesByClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPoliciesByClientRequest req = new GetNetworkPoliciesByClientRequest("a") {{
                endingBefore = "et";
                perPage = 474267L;
                startingAfter = "autem";
                t0 = "dolore";
                timespan = 2612.19;
            }};            

            GetNetworkPoliciesByClientResponse res = sdk.byClient.getNetworkPoliciesByClient(req);

            if (res.getNetworkPoliciesByClient200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
