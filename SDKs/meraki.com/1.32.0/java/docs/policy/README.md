# policy

### Available Operations

* [getNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [updateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkClientPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientPolicyRequest req = new GetNetworkClientPolicyRequest("amet", "sapiente");            

            GetNetworkClientPolicyResponse res = sdk.policy.getNetworkClientPolicy(req);

            if (res.getNetworkClientPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkClientPolicyRequest req = new UpdateNetworkClientPolicyRequest(                new UpdateNetworkClientPolicyRequestBody("amet") {{
                                groupPolicyId = "ad";
                            }};, "provident", "non");            

            UpdateNetworkClientPolicyResponse res = sdk.policy.updateNetworkClientPolicy(req);

            if (res.updateNetworkClientPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
