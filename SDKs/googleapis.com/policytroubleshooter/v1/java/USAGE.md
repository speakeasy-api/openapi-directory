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
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "json";
                    callback = "enim";
                    fields = "enim";
                    key = "reprehenderit";
                    oauthToken = "nisi";
                    prettyPrint = false;
                    quotaUser = "maiores";
                    uploadType = "cumque";
                    uploadProtocol = "aut";
                }};
                request = new GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest() {{
                    accessTuple = new GoogleCloudPolicytroubleshooterV1AccessTuple() {{
                        fullResourceName = "quo";
                        permission = "ad";
                        principal = "ad";
                    }};
                }};
            }};

            PolicytroubleshooterIamTroubleshootResponse res = sdk.iam.policytroubleshooterIamTroubleshoot(req);

            if (res.googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->