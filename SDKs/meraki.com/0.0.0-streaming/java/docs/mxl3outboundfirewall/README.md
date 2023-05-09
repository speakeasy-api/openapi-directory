# mxL3OutboundFirewall

### Available Operations

* [getNetworkL3FirewallRules](#getnetworkl3firewallrules) - Return the L3 firewall rules for an MX network
* [updateNetworkL3FirewallRules](#updatenetworkl3firewallrules) - Update the L3 firewall rules of an MX network

## getNetworkL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkL3FirewallRulesRequest req = new GetNetworkL3FirewallRulesRequest("illum");            

            GetNetworkL3FirewallRulesResponse res = sdk.mxL3OutboundFirewall.getNetworkL3FirewallRules(req);

            if (res.getNetworkL3FirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkL3FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkL3FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkL3FirewallRulesRequest req = new UpdateNetworkL3FirewallRulesRequest("earum") {{
                requestBody = new UpdateNetworkL3FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkL3FirewallRulesRequestBodyRules("cumque", UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum.ANY, "animi") {{
                            comment = "maiores";
                            destCidr = "debitis";
                            destPort = "aliquid";
                            policy = UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "dolorem";
                            srcPort = "fugit";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkL3FirewallRulesRequestBodyRules("occaecati", UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP, "quasi") {{
                            comment = "necessitatibus";
                            destCidr = "nulla";
                            destPort = "consequatur";
                            policy = UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "ducimus";
                            srcPort = "natus";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkL3FirewallRulesRequestBodyRules("molestiae", UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP6, "esse") {{
                            comment = "magni";
                            destCidr = "doloribus";
                            destPort = "nulla";
                            policy = UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "tempora";
                            srcPort = "nihil";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateNetworkL3FirewallRulesResponse res = sdk.mxL3OutboundFirewall.updateNetworkL3FirewallRules(req);

            if (res.updateNetworkL3FirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
