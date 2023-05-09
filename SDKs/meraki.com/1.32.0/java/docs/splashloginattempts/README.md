# splashLoginAttempts

### Available Operations

* [getNetworkSplashLoginAttempts](#getnetworksplashloginattempts) - List the splash login attempts for a network

## getNetworkSplashLoginAttempts

List the splash login attempts for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSplashLoginAttemptsRequest;
import org.openapis.openapi.models.operations.GetNetworkSplashLoginAttemptsResponse;
import org.openapis.openapi.models.operations.GetNetworkSplashLoginAttemptsSsidNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSplashLoginAttemptsRequest req = new GetNetworkSplashLoginAttemptsRequest("porro") {{
                loginIdentifier = "reprehenderit";
                ssidNumber = GetNetworkSplashLoginAttemptsSsidNumberEnum.FIVE;
                timespan = 982998L;
            }};            

            GetNetworkSplashLoginAttemptsResponse res = sdk.splashLoginAttempts.getNetworkSplashLoginAttempts(req);

            if (res.getNetworkSplashLoginAttempts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
