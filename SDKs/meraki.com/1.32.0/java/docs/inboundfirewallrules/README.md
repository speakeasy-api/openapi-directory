# inboundFirewallRules

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
                .setSecurity(new Security("quia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallInboundFirewallRulesRequest req = new GetNetworkApplianceFirewallInboundFirewallRulesRequest("ab");            

            GetNetworkApplianceFirewallInboundFirewallRulesResponse res = sdk.inboundFirewallRules.getNetworkApplianceFirewallInboundFirewallRules(req);

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
                .setSecurity(new Security("vel") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallInboundFirewallRulesRequest req = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequest("suscipit") {{
                requestBody = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules("accusantium", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ANY, "sit") {{
                            comment = "recusandae";
                            destCidr = "sequi";
                            destPort = "amet";
                            policy = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "fugiat";
                            srcPort = "officia";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateNetworkApplianceFirewallInboundFirewallRulesResponse res = sdk.inboundFirewallRules.updateNetworkApplianceFirewallInboundFirewallRules(req);

            if (res.updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
