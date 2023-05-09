# portForwardingRules

### Available Operations

* [getDeviceCellularGatewayPortForwardingRules](#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [getNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [updateDeviceCellularGatewayPortForwardingRules](#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [updateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network

## getDeviceCellularGatewayPortForwardingRules

Returns the port forwarding rules for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewayPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewayPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularGatewayPortForwardingRulesRequest req = new GetDeviceCellularGatewayPortForwardingRulesRequest("ratione");            

            GetDeviceCellularGatewayPortForwardingRulesResponse res = sdk.portForwardingRules.getDeviceCellularGatewayPortForwardingRules(req);

            if (res.getDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallPortForwardingRulesRequest req = new GetNetworkApplianceFirewallPortForwardingRulesRequest("tempore");            

            GetNetworkApplianceFirewallPortForwardingRulesResponse res = sdk.portForwardingRules.getNetworkApplianceFirewallPortForwardingRules(req);

            if (res.getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCellularGatewayPortForwardingRules

Updates the port forwarding rules for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularGatewayPortForwardingRulesRequest req = new UpdateDeviceCellularGatewayPortForwardingRulesRequest("facere") {{
                requestBody = new UpdateDeviceCellularGatewayPortForwardingRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules[]{{
                        add(new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules("enim", "maiores", "repudiandae", "a", "consequuntur") {{
                            access = "possimus";
                            allowedIps = new String[]{{
                                add("nihil"),
                                add("hic"),
                                add("ratione"),
                            }};
                            lanIp = "in";
                            localPort = "laborum";
                            name = "Inez Hoeger";
                            protocol = "laborum";
                            publicPort = "sint";
                        }}),
                        add(new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules("cupiditate", "eveniet", "eum", "illo", "ullam") {{
                            access = "perspiciatis";
                            allowedIps = new String[]{{
                                add("nemo"),
                                add("temporibus"),
                            }};
                            lanIp = "saepe";
                            localPort = "veritatis";
                            name = "Charlene Rau";
                            protocol = "facere";
                            publicPort = "et";
                        }}),
                        add(new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules("aut", "consequuntur", "impedit", "eos", "excepturi") {{
                            access = "praesentium";
                            allowedIps = new String[]{{
                                add("similique"),
                                add("illo"),
                                add("sapiente"),
                            }};
                            lanIp = "minus";
                            localPort = "magni";
                            name = "Micheal Jast";
                            protocol = "fugiat";
                            publicPort = "asperiores";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularGatewayPortForwardingRulesResponse res = sdk.portForwardingRules.updateDeviceCellularGatewayPortForwardingRules(req);

            if (res.updateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallPortForwardingRulesRequest req = new UpdateNetworkApplianceFirewallPortForwardingRulesRequest(                new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("suscipit"),
                                                                    add("harum"),
                                                                    add("culpa"),
                                                                    add("adipisci"),
                                                                }}, "beatae", "fugit", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP, "veritatis") {{
                                                    allowedIps = new String[]{{
                                                        add("fugit"),
                                                    }};
                                                    lanIp = "quo";
                                                    localPort = "fugiat";
                                                    name = "Jermaine Feeney";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP;
                                                    publicPort = "odit";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("omnis"),
                                                                    add("totam"),
                                                                }}, "a", "hic", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.TCP, "sit") {{
                                                    allowedIps = new String[]{{
                                                        add("eius"),
                                                        add("autem"),
                                                    }};
                                                    lanIp = "blanditiis";
                                                    localPort = "ipsum";
                                                    name = "Ms. Leigh Lueilwitz I";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP;
                                                    publicPort = "consequatur";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("sapiente"),
                                                                }}, "fugiat", "blanditiis", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.TCP, "animi") {{
                                                    allowedIps = new String[]{{
                                                        add("sint"),
                                                        add("facere"),
                                                        add("repellat"),
                                                    }};
                                                    lanIp = "hic";
                                                    localPort = "dicta";
                                                    name = "Jerome Brakus";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.TCP;
                                                    publicPort = "non";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                                add(new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("quas"),
                                                                    add("quisquam"),
                                                                }}, "perferendis", "sequi", UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.UDP, "vel") {{
                                                    allowedIps = new String[]{{
                                                        add("minima"),
                                                    }};
                                                    lanIp = "repudiandae";
                                                    localPort = "suscipit";
                                                    name = "Glenda Stanton";
                                                    protocol = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum.TCP;
                                                    publicPort = "et";
                                                    uplink = UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum.BOTH;
                                                }}),
                                            }});, "modi");            

            UpdateNetworkApplianceFirewallPortForwardingRulesResponse res = sdk.portForwardingRules.updateNetworkApplianceFirewallPortForwardingRules(req);

            if (res.updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
