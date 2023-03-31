<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    resource = "corrupti";
                }};
                queryParams = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    optionsRequestedPolicyVersion = 423655;
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
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