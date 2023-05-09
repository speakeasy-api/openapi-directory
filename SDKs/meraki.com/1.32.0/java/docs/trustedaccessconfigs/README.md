# trustedAccessConfigs

### Available Operations

* [getNetworkSmTrustedAccessConfigs](#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs

## getNetworkSmTrustedAccessConfigs

List Trusted Access Configs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmTrustedAccessConfigsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmTrustedAccessConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmTrustedAccessConfigsRequest req = new GetNetworkSmTrustedAccessConfigsRequest("error") {{
                endingBefore = "cupiditate";
                perPage = 448058L;
                startingAfter = "mollitia";
            }};            

            GetNetworkSmTrustedAccessConfigsResponse res = sdk.trustedAccessConfigs.getNetworkSmTrustedAccessConfigs(req);

            if (res.getNetworkSmTrustedAccessConfigs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
