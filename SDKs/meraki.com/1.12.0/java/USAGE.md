<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    merakiApiKey = new SchemeMerakiApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetNetworkSwitchAccessControlListsRequest req = new GetNetworkSwitchAccessControlListsRequest() {{
                pathParams = new GetNetworkSwitchAccessControlListsPathParams() {{
                    networkId = "molestiae";
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