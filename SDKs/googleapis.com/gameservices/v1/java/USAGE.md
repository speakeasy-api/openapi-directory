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
                    resource = "exercitationem";
                }};
                queryParams = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "incidunt";
                    alt = "media";
                    callback = "maxime";
                    fields = "ut";
                    key = "quod";
                    oauthToken = "velit";
                    optionsRequestedPolicyVersion = 3881251624959471437;
                    prettyPrint = false;
                    quotaUser = "omnis";
                    uploadType = "est";
                    uploadProtocol = "sunt";
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