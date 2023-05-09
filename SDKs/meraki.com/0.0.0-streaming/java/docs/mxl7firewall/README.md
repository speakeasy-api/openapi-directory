# mxL7Firewall

### Available Operations

* [getNetworkL7FirewallRules](#getnetworkl7firewallrules) - List the MX L7 firewall rules for an MX network
* [updateNetworkL7FirewallRules](#updatenetworkl7firewallrules) - Update the MX L7 firewall rules for an MX network

## getNetworkL7FirewallRules

List the MX L7 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkL7FirewallRulesRequest req = new GetNetworkL7FirewallRulesRequest("vel");            

            GetNetworkL7FirewallRulesResponse res = sdk.mxL7Firewall.getNetworkL7FirewallRules(req);

            if (res.getNetworkL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkL7FirewallRules

Update the MX L7 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkL7FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkL7FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkL7FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkL7FirewallRulesRequestBodyRulesTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkL7FirewallRulesRequest req = new UpdateNetworkL7FirewallRulesRequest("fugiat") {{
                requestBody = new UpdateNetworkL7FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkL7FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkL7FirewallRulesRequestBodyRulesTypeEnum.APPLICATION;
                            value = "odio";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkL7FirewallRulesResponse res = sdk.mxL7Firewall.updateNetworkL7FirewallRules(req);

            if (res.updateNetworkL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
