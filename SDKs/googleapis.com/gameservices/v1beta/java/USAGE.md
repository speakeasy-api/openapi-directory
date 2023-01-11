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
                    resource = "molestias";
                }};
                queryParams = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "doloribus";
                    alt = "json";
                    callback = "non";
                    fields = "debitis";
                    key = "optio";
                    oauthToken = "impedit";
                    optionsRequestedPolicyVersion = 6331290692144950892;
                    prettyPrint = false;
                    quotaUser = "quae";
                    uploadType = "maxime";
                    uploadProtocol = "dolor";
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