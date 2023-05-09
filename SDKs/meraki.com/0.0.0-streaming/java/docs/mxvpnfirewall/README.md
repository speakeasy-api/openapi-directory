# mxVPNFirewall

### Available Operations

* [getOrganizationVpnFirewallRules](#getorganizationvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateOrganizationVpnFirewallRules](#updateorganizationvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## getOrganizationVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationVpnFirewallRulesRequest;
import org.openapis.openapi.models.operations.GetOrganizationVpnFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationVpnFirewallRulesRequest req = new GetOrganizationVpnFirewallRulesRequest("suscipit");            

            GetOrganizationVpnFirewallRulesResponse res = sdk.mxVPNFirewall.getOrganizationVpnFirewallRules(req);

            if (res.getOrganizationVpnFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationVpnFirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationVpnFirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationVpnFirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationVpnFirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationVpnFirewallRulesRequest req = new UpdateOrganizationVpnFirewallRulesRequest("perferendis") {{
                requestBody = new UpdateOrganizationVpnFirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateOrganizationVpnFirewallRulesRequestBodyRules[]{{
                        add(new UpdateOrganizationVpnFirewallRulesRequestBodyRules("mollitia", UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnum.TCP, "ad") {{
                            comment = "voluptas";
                            destCidr = "iste";
                            destPort = "id";
                            policy = UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "possimus";
                            srcPort = "voluptates";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateOrganizationVpnFirewallRulesRequestBodyRules("ut", UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnum.TCP, "voluptatem") {{
                            comment = "deleniti";
                            destCidr = "enim";
                            destPort = "vitae";
                            policy = UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "quo";
                            srcPort = "ex";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateOrganizationVpnFirewallRulesResponse res = sdk.mxVPNFirewall.updateOrganizationVpnFirewallRules(req);

            if (res.updateOrganizationVpnFirewallRules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
