# mx11NATRules

### Available Operations

* [getNetworkOneToOneNatRules](#getnetworkonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [updateNetworkOneToOneNatRules](#updatenetworkonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

## getNetworkOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkOneToOneNatRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkOneToOneNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkOneToOneNatRulesRequest req = new GetNetworkOneToOneNatRulesRequest("voluptate");            

            GetNetworkOneToOneNatRulesResponse res = sdk.mx11NATRules.getNetworkOneToOneNatRules(req);

            if (res.getNetworkOneToOneNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound;
import org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkOneToOneNatRulesRequest req = new UpdateNetworkOneToOneNatRulesRequest(                new UpdateNetworkOneToOneNatRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkOneToOneNatRulesRequestBodyRules("reiciendis") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("officiis"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("facilis"),
                                                                add("quaerat"),
                                                                add("incidunt"),
                                                            }};
                                                            protocol = UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ICMP_PING;
                                                        }}),
                                                    }};
                                                    lanIp = "debitis";
                                                    name = "Mark Rolfson";
                                                    publicIp = "minima";
                                                    uplink = UpdateNetworkOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                                add(new UpdateNetworkOneToOneNatRulesRequestBodyRules("blanditiis") {{
                                                    allowedInbound = new org.openapis.openapi.models.operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound[]{{
                                                        add(new UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("aperiam"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("numquam"),
                                                                add("veniam"),
                                                                add("in"),
                                                                add("officiis"),
                                                            }};
                                                            protocol = UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ANY;
                                                        }}),
                                                        add(new UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("exercitationem"),
                                                                add("praesentium"),
                                                                add("cum"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("dolorum"),
                                                                add("voluptatum"),
                                                            }};
                                                            protocol = UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.TCP;
                                                        }}),
                                                        add(new UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("expedita"),
                                                                add("debitis"),
                                                                add("neque"),
                                                                add("dolorum"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("officia"),
                                                                add("dolorum"),
                                                            }};
                                                            protocol = UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.TCP;
                                                        }}),
                                                        add(new UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound() {{
                                                            allowedIps = new String[]{{
                                                                add("tempora"),
                                                                add("atque"),
                                                                add("fugit"),
                                                                add("ut"),
                                                            }};
                                                            destinationPorts = new String[]{{
                                                                add("voluptatem"),
                                                                add("culpa"),
                                                                add("expedita"),
                                                                add("magnam"),
                                                            }};
                                                            protocol = UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum.ANY;
                                                        }}),
                                                    }};
                                                    lanIp = "esse";
                                                    name = "Karen Lehner";
                                                    publicIp = "corporis";
                                                    uplink = UpdateNetworkOneToOneNatRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                            }});, "ex");            

            UpdateNetworkOneToOneNatRulesResponse res = sdk.mx11NATRules.updateNetworkOneToOneNatRules(req);

            if (res.updateNetworkOneToOneNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
