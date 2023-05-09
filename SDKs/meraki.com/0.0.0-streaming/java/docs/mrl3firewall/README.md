# mrL3Firewall

### Available Operations

* [getNetworkSsidL3FirewallRules](#getnetworkssidl3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [updateNetworkSsidL3FirewallRules](#updatenetworkssidl3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

## getNetworkSsidL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSsidL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkSsidL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSsidL3FirewallRulesRequest req = new GetNetworkSsidL3FirewallRulesRequest("blanditiis", "quas");            

            GetNetworkSsidL3FirewallRulesResponse res = sdk.mrL3Firewall.getNetworkSsidL3FirewallRules(req);

            if (res.getNetworkSsidL3FirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSsidL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSsidL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSsidL3FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSsidL3FirewallRulesRequest req = new UpdateNetworkSsidL3FirewallRulesRequest("nesciunt", "culpa") {{
                requestBody = new UpdateNetworkSsidL3FirewallRulesRequestBody() {{
                    allowLanAccess = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkSsidL3FirewallRulesRequestBodyRules("sit", UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnum.ANY) {{
                            comment = "pariatur";
                            destCidr = "totam";
                            destPort = "hic";
                            policy = UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnum.TCP;
                        }}),
                        add(new UpdateNetworkSsidL3FirewallRulesRequestBodyRules("expedita", UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnum.TCP) {{
                            comment = "reiciendis";
                            destCidr = "explicabo";
                            destPort = "asperiores";
                            policy = UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                        }}),
                        add(new UpdateNetworkSsidL3FirewallRulesRequestBodyRules("quidem", UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP) {{
                            comment = "dolore";
                            destCidr = "laborum";
                            destPort = "sed";
                            policy = UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSsidL3FirewallRulesResponse res = sdk.mrL3Firewall.updateNetworkSsidL3FirewallRules(req);

            if (res.updateNetworkSsidL3FirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
