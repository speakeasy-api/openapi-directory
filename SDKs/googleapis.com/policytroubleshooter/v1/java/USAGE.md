<!-- Start SDK Example Usage -->
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
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest = new GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest() {{
                    accessTuple = new GoogleCloudPolicytroubleshooterV1AccessTuple() {{
                        fullResourceName = "provident";
                        permission = "distinctio";
                        principal = "quibusdam";
                    }};;
                }};;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            PolicytroubleshooterIamTroubleshootResponse res = sdk.iam.policytroubleshooterIamTroubleshoot(req, new PolicytroubleshooterIamTroubleshootSecurity("magnam", "debitis") {{
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
<!-- End SDK Example Usage -->