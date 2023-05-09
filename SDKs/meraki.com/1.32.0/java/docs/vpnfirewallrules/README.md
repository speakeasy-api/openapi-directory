# vpnFirewallRules

### Available Operations

* [getOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## getOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnVpnFirewallRulesRequest req = new GetOrganizationApplianceVpnVpnFirewallRulesRequest("quod");            

            GetOrganizationApplianceVpnVpnFirewallRulesResponse res = sdk.vpnFirewallRules.getOrganizationApplianceVpnVpnFirewallRules(req);

            if (res.getOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceVpnVpnFirewallRulesRequest req = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequest("iure") {{
                requestBody = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[]{{
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("ad", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ICMP, "nobis") {{
                            comment = "recusandae";
                            destCidr = "ullam";
                            destPort = "atque";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "ullam";
                            srcPort = "quidem";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("voluptatem", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.TCP, "quod") {{
                            comment = "aut";
                            destCidr = "eligendi";
                            destPort = "praesentium";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "ad";
                            srcPort = "excepturi";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules("dicta", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.ANY, "pariatur") {{
                            comment = "sint";
                            destCidr = "perferendis";
                            destPort = "accusantium";
                            policy = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "explicabo";
                            srcPort = "non";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateOrganizationApplianceVpnVpnFirewallRulesResponse res = sdk.vpnFirewallRules.updateOrganizationApplianceVpnVpnFirewallRules(req);

            if (res.updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
