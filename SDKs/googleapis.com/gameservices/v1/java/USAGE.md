<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest req = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                optionsRequestedPolicyVersion = 847252;
                prettyPrint = false;
                quotaUser = "vel";
                resource = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse res = sdk.projects.gameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy(req, new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->