# order

### Available Operations

* [getNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [updateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

## getNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesOrderRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchQosRulesOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchQosRulesOrderRequest req = new GetNetworkSwitchQosRulesOrderRequest("facilis");            

            GetNetworkSwitchQosRulesOrderResponse res = sdk.order.getNetworkSwitchQosRulesOrder(req);

            if (res.getNetworkSwitchQosRulesOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchQosRulesOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchQosRulesOrderRequest req = new UpdateNetworkSwitchQosRulesOrderRequest(                new UpdateNetworkSwitchQosRulesOrderRequestBody(                new String[]{{
                                                add("ipsa"),
                                                add("vitae"),
                                                add("debitis"),
                                            }});, "quaerat");            

            UpdateNetworkSwitchQosRulesOrderResponse res = sdk.order.updateNetworkSwitchQosRulesOrder(req);

            if (res.updateNetworkSwitchQosRulesOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
