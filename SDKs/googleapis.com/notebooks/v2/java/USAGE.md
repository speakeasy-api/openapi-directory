<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesGetIamPolicyRequest req = new NotebooksProjectsLocationsInstancesGetIamPolicyRequest() {{
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

            NotebooksProjectsLocationsInstancesGetIamPolicyResponse res = sdk.projects.notebooksProjectsLocationsInstancesGetIamPolicy(req, new NotebooksProjectsLocationsInstancesGetIamPolicySecurity() {{
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