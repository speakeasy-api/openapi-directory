<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootSecurity;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootQueryParams;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootRequest;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootResponse;
import org.openapis.openapi.models.shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicytroubleshooterIamTroubleshootRequest req = new PolicytroubleshooterIamTroubleshootRequest() {{
                security = new PolicytroubleshooterIamTroubleshootSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new PolicytroubleshooterIamTroubleshootQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest() {{
                    accessTuple = new GoogleCloudPolicytroubleshooterV1betaAccessTuple() {{
                        fullResourceName = "deserunt";
                        permission = "suscipit";
                        principal = "iure";
                    }};
                }};
            }};            

            PolicytroubleshooterIamTroubleshootResponse res = sdk.iam.policytroubleshooterIamTroubleshoot(req);

            if (res.googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->