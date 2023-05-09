# mxCellularFirewall

### Available Operations

* [getNetworkCellularFirewallRules](#getnetworkcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [updateNetworkCellularFirewallRules](#updatenetworkcellularfirewallrules) - Update the cellular firewall rules of an MX network

## getNetworkCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularFirewallRulesRequest req = new GetNetworkCellularFirewallRulesRequest("cum");            

            GetNetworkCellularFirewallRulesResponse res = sdk.mxCellularFirewall.getNetworkCellularFirewallRules(req);

            if (res.getNetworkCellularFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCellularFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCellularFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCellularFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCellularFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularFirewallRulesRequest req = new UpdateNetworkCellularFirewallRulesRequest("beatae") {{
                requestBody = new UpdateNetworkCellularFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkCellularFirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkCellularFirewallRulesRequestBodyRules("officiis", UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnum.TCP, "pariatur") {{
                            comment = "omnis";
                            destCidr = "veritatis";
                            destPort = "rerum";
                            policy = UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "voluptatem";
                            srcPort = "sapiente";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkCellularFirewallRulesRequestBodyRules("rem", UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP, "asperiores") {{
                            comment = "debitis";
                            destCidr = "voluptatem";
                            destPort = "alias";
                            policy = UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "ex";
                            srcPort = "sapiente";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkCellularFirewallRulesRequestBodyRules("nam", UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnum.TCP, "dolor") {{
                            comment = "ratione";
                            destCidr = "ullam";
                            destPort = "perferendis";
                            policy = UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "impedit";
                            srcPort = "quibusdam";
                            syslogEnabled = false;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkCellularFirewallRulesResponse res = sdk.mxCellularFirewall.updateNetworkCellularFirewallRules(req);

            if (res.updateNetworkCellularFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
