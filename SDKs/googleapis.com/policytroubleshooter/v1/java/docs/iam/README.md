# iam

### Available Operations

* [policytroubleshooterIamTroubleshoot](#policytroubleshooteriamtroubleshoot) - Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.

## policytroubleshooterIamTroubleshoot

Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootRequest;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootResponse;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPolicytroubleshooterV1AccessTuple;
import org.openapis.openapi.models.shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicytroubleshooterIamTroubleshootRequest req = new PolicytroubleshooterIamTroubleshootRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest = new GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest() {{
                    accessTuple = new GoogleCloudPolicytroubleshooterV1AccessTuple() {{
                        fullResourceName = "delectus";
                        permission = "tempora";
                        principal = "suscipit";
                    }};;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            PolicytroubleshooterIamTroubleshootResponse res = sdk.iam.policytroubleshooterIamTroubleshoot(req, new PolicytroubleshooterIamTroubleshootSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
