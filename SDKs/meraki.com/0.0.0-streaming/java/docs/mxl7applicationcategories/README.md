# mxL7ApplicationCategories

### Available Operations

* [getNetworkL7FirewallRulesApplicationCategories](#getnetworkl7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network

## getNetworkL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkL7FirewallRulesApplicationCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkL7FirewallRulesApplicationCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkL7FirewallRulesApplicationCategoriesRequest req = new GetNetworkL7FirewallRulesApplicationCategoriesRequest("maiores");            

            GetNetworkL7FirewallRulesApplicationCategoriesResponse res = sdk.mxL7ApplicationCategories.getNetworkL7FirewallRulesApplicationCategories(req);

            if (res.getNetworkL7FirewallRulesApplicationCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
