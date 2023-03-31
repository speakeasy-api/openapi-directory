<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicyPathParams;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicyQueryParams;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesGetIamPolicyRequest req = new NotebooksProjectsLocationsInstancesGetIamPolicyRequest() {{
                security = new NotebooksProjectsLocationsInstancesGetIamPolicySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NotebooksProjectsLocationsInstancesGetIamPolicyPathParams() {{
                    resource = "corrupti";
                }};
                queryParams = new NotebooksProjectsLocationsInstancesGetIamPolicyQueryParams() {{
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

            NotebooksProjectsLocationsInstancesGetIamPolicyResponse res = sdk.projects.notebooksProjectsLocationsInstancesGetIamPolicy(req);

            if (res.policy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->