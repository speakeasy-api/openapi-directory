# stormControl

### Available Operations

* [getNetworkSwitchStormControl](#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [updateNetworkSwitchStormControl](#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network

## getNetworkSwitchStormControl

Return the storm control configuration for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStormControlRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStormControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStormControlRequest req = new GetNetworkSwitchStormControlRequest("nam");            

            GetNetworkSwitchStormControlResponse res = sdk.stormControl.getNetworkSwitchStormControl(req);

            if (res.getNetworkSwitchStormControl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStormControl

Update the storm control configuration for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStormControlRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStormControlRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStormControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStormControlRequest req = new UpdateNetworkSwitchStormControlRequest("quam") {{
                requestBody = new UpdateNetworkSwitchStormControlRequestBody() {{
                    broadcastThreshold = 779252L;
                    multicastThreshold = 536971L;
                    unknownUnicastThreshold = 933197L;
                }};;
            }};            

            UpdateNetworkSwitchStormControlResponse res = sdk.stormControl.updateNetworkSwitchStormControl(req);

            if (res.updateNetworkSwitchStormControl200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
