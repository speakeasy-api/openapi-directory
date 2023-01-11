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

            GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest req = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest() {{
                security = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams() {{
                    resource = "sit";
                }};
                queryParams = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    optionsRequestedPolicyVersion = 8274930044578894929;
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
            }};

            GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse res = sdk.projects.gameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy(req);

            if (res.policy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->