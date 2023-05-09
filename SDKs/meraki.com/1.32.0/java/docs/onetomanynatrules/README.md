# oneToManyNatRules

### Available Operations

* [getNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

## getNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallOneToManyNatRulesRequest req = new GetNetworkApplianceFirewallOneToManyNatRulesRequest("in");            

            GetNetworkApplianceFirewallOneToManyNatRulesResponse res = sdk.oneToManyNatRules.getNetworkApplianceFirewallOneToManyNatRules(req);

            if (res.getNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallOneToManyNatRulesRequest req = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequest(                new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("repudiandae"),
                                                                        }};
                                                                        localIp = "officiis";
                                                                        localPort = "odit";
                                                                        name = "Felix Beer";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "corrupti";
                                                                    }}),
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("quidem"),
                                                                            add("assumenda"),
                                                                            add("assumenda"),
                                                                            add("quas"),
                                                                        }};
                                                                        localIp = "amet";
                                                                        localPort = "esse";
                                                                        name = "Jasmine Schoen";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                                        publicPort = "animi";
                                                                    }}),
                                                                    add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("possimus"),
                                                                            add("porro"),
                                                                        }};
                                                                        localIp = "quo";
                                                                        localPort = "molestias";
                                                                        name = "Andrew Walsh";
                                                                        protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "eum";
                                                                    }}),
                                                                }}, "magnam", UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2) {{
                                                    portRules = new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                        add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("voluptates"),
                                                            }};
                                                            localIp = "quaerat";
                                                            localPort = "illum";
                                                            name = "Vickie Balistreri";
                                                            protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                            publicPort = "vero";
                                                        }}),
                                                        add(new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("tempora"),
                                                            }};
                                                            localIp = "consequuntur";
                                                            localPort = "enim";
                                                            name = "Courtney Huel";
                                                            protocol = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                            publicPort = "quidem";
                                                        }}),
                                                    }};
                                                    publicIp = "aliquam";
                                                    uplink = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                            }});, "aspernatur");            

            UpdateNetworkApplianceFirewallOneToManyNatRulesResponse res = sdk.oneToManyNatRules.updateNetworkApplianceFirewallOneToManyNatRules(req);

            if (res.updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
