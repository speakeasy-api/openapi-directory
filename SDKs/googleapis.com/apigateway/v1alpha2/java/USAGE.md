<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest req = new ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest() {{
                security = new ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams() {{
                    resource = "corrupti";
                }};
                queryParams = new ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams() {{
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

            ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysGetIamPolicy(req);

            if (res.apigatewayPolicy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->