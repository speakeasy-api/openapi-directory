# l3FirewallRules

### Available Operations

* [getNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [updateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

## getNetworkApplianceFirewallL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallL3FirewallRulesRequest req = new GetNetworkApplianceFirewallL3FirewallRulesRequest("quaerat");            

            GetNetworkApplianceFirewallL3FirewallRulesResponse res = sdk.l3FirewallRules.getNetworkApplianceFirewallL3FirewallRules(req);

            if (res.getNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidFirewallL3FirewallRulesRequest req = new GetNetworkWirelessSsidFirewallL3FirewallRulesRequest("minima", "non");            

            GetNetworkWirelessSsidFirewallL3FirewallRulesResponse res = sdk.l3FirewallRules.getNetworkWirelessSsidFirewallL3FirewallRules(req);

            if (res.getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallL3FirewallRulesRequest req = new UpdateNetworkApplianceFirewallL3FirewallRulesRequest("dolore") {{
                requestBody = new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules("incidunt", UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ANY, "deserunt") {{
                            comment = "vel";
                            destCidr = "eaque";
                            destPort = "iste";
                            policy = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.UDP;
                            srcCidr = "et";
                            srcPort = "incidunt";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules("possimus", UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.TCP, "repellendus") {{
                            comment = "voluptatem";
                            destCidr = "repellat";
                            destPort = "eligendi";
                            policy = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.TCP;
                            srcCidr = "dolor";
                            srcPort = "harum";
                            syslogEnabled = false;
                        }}),
                        add(new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules("eligendi", UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.TCP, "id") {{
                            comment = "minima";
                            destCidr = "expedita";
                            destPort = "aut";
                            policy = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP6;
                            srcCidr = "molestias";
                            srcPort = "atque";
                            syslogEnabled = false;
                        }}),
                    }};
                    syslogDefaultRule = false;
                }};;
            }};            

            UpdateNetworkApplianceFirewallL3FirewallRulesResponse res = sdk.l3FirewallRules.updateNetworkApplianceFirewallL3FirewallRules(req);

            if (res.updateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest req = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest("laborum", "qui") {{
                requestBody = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody() {{
                    allowLanAccess = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("beatae", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.UDP) {{
                            comment = "officiis";
                            destCidr = "quo";
                            destPort = "ex";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP;
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("quisquam", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP) {{
                            comment = "beatae";
                            destCidr = "unde";
                            destPort = "eaque";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.UDP;
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("laborum", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.UDP) {{
                            comment = "ratione";
                            destCidr = "enim";
                            destPort = "ut";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.UDP;
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("doloremque", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.DENY, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.UDP) {{
                            comment = "occaecati";
                            destCidr = "sit";
                            destPort = "nisi";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.TCP;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse res = sdk.l3FirewallRules.updateNetworkWirelessSsidFirewallL3FirewallRules(req);

            if (res.updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
