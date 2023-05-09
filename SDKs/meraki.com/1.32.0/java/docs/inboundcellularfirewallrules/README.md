# inboundCellularFirewallRules

### Available Operations

* [getNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network

## getNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest req = new GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest("earum");            

            GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse res = sdk.inboundCellularFirewallRules.getNetworkApplianceFirewallInboundCellularFirewallRules(req);

            if (res.getNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest req = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest("deserunt") {{
                requestBody = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("necessitatibus", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.UDP, "est") {{
                            comment = "est";
                            destCidr = "nulla";
                            destPort = "autem";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "repellendus";
                            srcPort = "molestias";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("in", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.TCP, "sint") {{
                            comment = "vero";
                            destCidr = "placeat";
                            destPort = "qui";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "cumque";
                            srcPort = "ipsa";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("accusantium", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ANY, "numquam") {{
                            comment = "tempore";
                            destCidr = "tempore";
                            destPort = "voluptas";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "perspiciatis";
                            srcPort = "dolorum";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules("aperiam", UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.UDP, "beatae") {{
                            comment = "placeat";
                            destCidr = "dignissimos";
                            destPort = "labore";
                            policy = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "minus";
                            srcPort = "facilis";
                            syslogEnabled = false;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse res = sdk.inboundCellularFirewallRules.updateNetworkApplianceFirewallInboundCellularFirewallRules(req);

            if (res.updateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
