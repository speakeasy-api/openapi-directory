# systempolicy

### Available Operations

* [binaryauthorizationSystempolicyGetPolicy](#binaryauthorizationsystempolicygetpolicy) - Gets the current system policy in the specified location.

## binaryauthorizationSystempolicyGetPolicy

Gets the current system policy in the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationSystempolicyGetPolicyRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationSystempolicyGetPolicyResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationSystempolicyGetPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationSystempolicyGetPolicyRequest req = new BinaryauthorizationSystempolicyGetPolicyRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "similique";
                key = "alias";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "tempora";
                uploadProtocol = "vel";
            }};            

            BinaryauthorizationSystempolicyGetPolicyResponse res = sdk.systempolicy.binaryauthorizationSystempolicyGetPolicy(req, new BinaryauthorizationSystempolicyGetPolicySecurity("quod", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
