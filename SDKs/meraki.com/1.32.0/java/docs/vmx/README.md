# vmx

### Available Operations

* [createDeviceApplianceVmxAuthenticationToken](#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token

## createDeviceApplianceVmxAuthenticationToken

Generate a new vMX authentication token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceApplianceVmxAuthenticationTokenRequest;
import org.openapis.openapi.models.operations.CreateDeviceApplianceVmxAuthenticationTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceApplianceVmxAuthenticationTokenRequest req = new CreateDeviceApplianceVmxAuthenticationTokenRequest("maxime");            

            CreateDeviceApplianceVmxAuthenticationTokenResponse res = sdk.vmx.createDeviceApplianceVmxAuthenticationToken(req);

            if (res.createDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
