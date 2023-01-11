<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest() {{
                    accessTuple = new GoogleCloudPolicytroubleshooterV1betaAccessTuple() {{
                        fullResourceName = "rerum";
                        permission = "dicta";
                        principal = "debitis";
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