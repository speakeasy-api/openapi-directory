<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAccessControlListsRequest req = new GetNetworkSwitchAccessControlListsRequest("provident");            

            GetNetworkSwitchAccessControlListsResponse res = sdk.accessControlLists.getNetworkSwitchAccessControlLists(req);

            if (res.getNetworkSwitchAccessControlLists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->