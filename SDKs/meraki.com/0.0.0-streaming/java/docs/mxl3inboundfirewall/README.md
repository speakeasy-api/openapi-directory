# mxL3InboundFirewall

### Available Operations

* [getNetworkApplianceFirewallInboundFirewallRules](#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network

## getNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallInboundFirewallRulesRequest req = new GetNetworkApplianceFirewallInboundFirewallRulesRequest("nam");            

            GetNetworkApplianceFirewallInboundFirewallRulesResponse res = sdk.mxL3InboundFirewall.getNetworkApplianceFirewallInboundFirewallRules(req);

            if (res.getNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallInboundFirewallRulesRequest req = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequest("officia") {{
                requestBody = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("vitae", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ICMP, "quis") {{
                            comment = "placeat";
                            destCidr = "modi";
                            destPort = "voluptatibus";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "sapiente";
                            srcPort = "cumque";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("eum", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ICMP6, "at") {{
                            comment = "inventore";
                            destCidr = "fugit";
                            destPort = "cumque";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "velit";
                            srcPort = "aspernatur";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("cupiditate", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.UDP, "soluta") {{
                            comment = "impedit";
                            destCidr = "eos";
                            destPort = "sapiente";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ANY;
                            srcCidr = "minima";
                            srcPort = "beatae";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateNetworkApplianceFirewallInboundFirewallRulesResponse res = sdk.mxL3InboundFirewall.updateNetworkApplianceFirewallInboundFirewallRules(req);

            if (res.updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
