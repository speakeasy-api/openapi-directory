# oneToOneNatRules

### Available Operations

* [getNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

## getNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallOneToOneNatRulesRequest req = new GetNetworkApplianceFirewallOneToOneNatRulesRequest("eos");            

            GetNetworkApplianceFirewallOneToOneNatRulesResponse res = sdk.oneToOneNatRules.getNetworkApplianceFirewallOneToOneNatRules(req);

            if (res.getNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallOneToOneNatRulesRequest req = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequest(                new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules("recusandae") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("occaecati"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("delectus"),
                                                                add("beatae"),
                                                                add("modi"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.UDP;
                                                        }}),
                                                    }};
                                                    lanIp = "ab";
                                                    name = "Charles McDermott";
                                                    publicIp = "eaque";
                                                    uplink = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules("alias") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("ab"),
                                                                add("saepe"),
                                                                add("ea"),
                                                                add("deserunt"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("voluptatem"),
                                                                add("ipsam"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.TCP;
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("inventore"),
                                                                add("voluptate"),
                                                                add("inventore"),
                                                                add("vero"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("pariatur"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ANY;
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("voluptatum"),
                                                                add("odit"),
                                                                add("excepturi"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("quo"),
                                                            }};
                                                            protocol = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ICMP_PING;
                                                        }}),
                                                    }};
                                                    lanIp = "porro";
                                                    name = "Miguel Price";
                                                    publicIp = "praesentium";
                                                    uplink = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                            }});, "corporis");            

            UpdateNetworkApplianceFirewallOneToOneNatRulesResponse res = sdk.oneToOneNatRules.updateNetworkApplianceFirewallOneToOneNatRules(req);

            if (res.updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
