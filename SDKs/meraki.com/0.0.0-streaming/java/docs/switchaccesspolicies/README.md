# switchAccessPolicies

### Available Operations

* [getNetworkAccessPolicies](#getnetworkaccesspolicies) - List the access policies for this network

## getNetworkAccessPolicies

List the access policies for this network. Only valid for MS networks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAccessPoliciesRequest;
import org.openapis.openapi.models.operations.GetNetworkAccessPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAccessPoliciesRequest req = new GetNetworkAccessPoliciesRequest("incidunt");            

            GetNetworkAccessPoliciesResponse res = sdk.switchAccessPolicies.getNetworkAccessPolicies(req);

            if (res.getNetworkAccessPolicies200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
