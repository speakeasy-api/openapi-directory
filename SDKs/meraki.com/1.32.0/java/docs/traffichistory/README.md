# trafficHistory

### Available Operations

* [getNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time

## getNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientTrafficHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientTrafficHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientTrafficHistoryRequest req = new GetNetworkClientTrafficHistoryRequest("similique", "culpa") {{
                endingBefore = "laboriosam";
                perPage = 662890L;
                startingAfter = "ut";
            }};            

            GetNetworkClientTrafficHistoryResponse res = sdk.trafficHistory.getNetworkClientTrafficHistory(req);

            if (res.getNetworkClientTrafficHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
