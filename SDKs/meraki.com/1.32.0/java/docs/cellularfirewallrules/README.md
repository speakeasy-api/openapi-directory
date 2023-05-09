# cellularFirewallRules

### Available Operations

* [getNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [updateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network

## getNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallCellularFirewallRulesRequest req = new GetNetworkApplianceFirewallCellularFirewallRulesRequest("nesciunt");            

            GetNetworkApplianceFirewallCellularFirewallRulesResponse res = sdk.cellularFirewallRules.getNetworkApplianceFirewallCellularFirewallRules(req);

            if (res.getNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallCellularFirewallRulesRequest req = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequest("sunt") {{
                requestBody = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules("voluptate", UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6, "esse") {{
                            comment = "itaque";
                            destCidr = "quaerat";
                            destPort = "repellat";
                            policy = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                            srcCidr = "quaerat";
                            srcPort = "magnam";
                            syslogEnabled = false;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceFirewallCellularFirewallRulesResponse res = sdk.cellularFirewallRules.updateNetworkApplianceFirewallCellularFirewallRules(req);

            if (res.updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
