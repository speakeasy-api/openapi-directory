# health

### Available Operations

* [getNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network

## getNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkHealthAlertsRequest;
import org.openapis.openapi.models.operations.GetNetworkHealthAlertsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkHealthAlertsRequest req = new GetNetworkHealthAlertsRequest("exercitationem");            

            GetNetworkHealthAlertsResponse res = sdk.health.getNetworkHealthAlerts(req);

            if (res.getNetworkHealthAlerts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
