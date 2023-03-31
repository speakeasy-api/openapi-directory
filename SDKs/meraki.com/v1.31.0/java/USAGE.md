<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsPathParams;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessControlListsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    merakiApiKey = new SchemeMerakiAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetNetworkSwitchAccessControlListsRequest req = new GetNetworkSwitchAccessControlListsRequest() {{
                pathParams = new GetNetworkSwitchAccessControlListsPathParams() {{
                    networkId = "corrupti";
                }};
            }};            

            GetNetworkSwitchAccessControlListsResponse res = sdk.accessControlLists.getNetworkSwitchAccessControlLists(req);

            if (res.getNetworkSwitchAccessControlLists200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->