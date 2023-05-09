# applicationCategories

### Available Operations

* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.

## getNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest req = new GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest("eos");            

            GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse res = sdk.applicationCategories.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req);

            if (res.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingApplicationCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingApplicationCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficShapingApplicationCategoriesRequest req = new GetNetworkTrafficShapingApplicationCategoriesRequest("sunt");            

            GetNetworkTrafficShapingApplicationCategoriesResponse res = sdk.applicationCategories.getNetworkTrafficShapingApplicationCategories(req);

            if (res.getNetworkTrafficShapingApplicationCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
