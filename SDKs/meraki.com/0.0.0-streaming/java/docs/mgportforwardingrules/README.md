# mgPortForwardingRules

### Available Operations

* [getDeviceCellularGatewaySettingsPortForwardingRules](#getdevicecellulargatewaysettingsportforwardingrules) - Returns the port forwarding rules for a single MG.
* [updateDeviceCellularGatewaySettingsPortForwardingRules](#updatedevicecellulargatewaysettingsportforwardingrules) - Updates the port forwarding rules for a single MG.

## getDeviceCellularGatewaySettingsPortForwardingRules

Returns the port forwarding rules for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewaySettingsPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewaySettingsPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularGatewaySettingsPortForwardingRulesRequest req = new GetDeviceCellularGatewaySettingsPortForwardingRulesRequest("quidem");            

            GetDeviceCellularGatewaySettingsPortForwardingRulesResponse res = sdk.mgPortForwardingRules.getDeviceCellularGatewaySettingsPortForwardingRules(req);

            if (res.getDeviceCellularGatewaySettingsPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCellularGatewaySettingsPortForwardingRules

Updates the port forwarding rules for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest req = new UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest("necessitatibus") {{
                requestBody = new UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules[]{{
                        add(new UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules("libero", "vitae", "accusamus", "similique", "tempora") {{
                            access = "sunt";
                            allowedIps = new String[]{{
                                add("adipisci"),
                                add("non"),
                                add("amet"),
                                add("beatae"),
                            }};
                            lanIp = "dignissimos";
                            localPort = "a";
                            name = "Glenn Herzog";
                            protocol = "ipsa";
                            publicPort = "voluptates";
                        }}),
                        add(new UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules("aliquam", "officiis", "temporibus", "ullam", "adipisci") {{
                            access = "aspernatur";
                            allowedIps = new String[]{{
                                add("voluptas"),
                                add("voluptas"),
                            }};
                            lanIp = "minima";
                            localPort = "nobis";
                            name = "Travis Schinner";
                            protocol = "in";
                            publicPort = "dolore";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularGatewaySettingsPortForwardingRulesResponse res = sdk.mgPortForwardingRules.updateDeviceCellularGatewaySettingsPortForwardingRules(req);

            if (res.updateDeviceCellularGatewaySettingsPortForwardingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
