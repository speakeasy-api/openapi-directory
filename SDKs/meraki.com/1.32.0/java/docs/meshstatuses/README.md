# meshStatuses

### Available Operations

* [getNetworkWirelessMeshStatuses](#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters

## getNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessMeshStatusesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessMeshStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessMeshStatusesRequest req = new GetNetworkWirelessMeshStatusesRequest("nemo") {{
                endingBefore = "error";
                perPage = 653920L;
                startingAfter = "maiores";
            }};            

            GetNetworkWirelessMeshStatusesResponse res = sdk.meshStatuses.getNetworkWirelessMeshStatuses(req);

            if (res.getNetworkWirelessMeshStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
