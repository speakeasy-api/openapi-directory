# mxPortForwardingRules

### Available Operations

* [getNetworkPortForwardingRules](#getnetworkportforwardingrules) - Return the port forwarding rules for an MX network
* [updateNetworkPortForwardingRules](#updatenetworkportforwardingrules) - Update the port forwarding rules for an MX network

## getNetworkPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPortForwardingRulesRequest req = new GetNetworkPortForwardingRulesRequest("inventore");            

            GetNetworkPortForwardingRulesResponse res = sdk.mxPortForwardingRules.getNetworkPortForwardingRules(req);

            if (res.getNetworkPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkPortForwardingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkPortForwardingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkPortForwardingRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkPortForwardingRulesRequest req = new UpdateNetworkPortForwardingRulesRequest(                new UpdateNetworkPortForwardingRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkPortForwardingRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkPortForwardingRulesRequestBodyRules(                new String[]{{
                                                                    add("quas"),
                                                                }}, "eveniet", "impedit", UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnum.UDP, "esse") {{
                                                    allowedIps = new String[]{{
                                                        add("dolor"),
                                                        add("consequatur"),
                                                    }};
                                                    lanIp = "architecto";
                                                    localPort = "sit";
                                                    name = "Beverly Bergstrom I";
                                                    protocol = UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnum.UDP;
                                                    publicPort = "ipsam";
                                                    uplink = UpdateNetworkPortForwardingRulesRequestBodyRulesUplinkEnum.BOTH;
                                                }}),
                                            }});, "necessitatibus");            

            UpdateNetworkPortForwardingRulesResponse res = sdk.mxPortForwardingRules.updateNetworkPortForwardingRules(req);

            if (res.updateNetworkPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
