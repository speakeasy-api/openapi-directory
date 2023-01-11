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
                    resource = "sit";
                }};
                queryParams = new ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams() {{
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

            ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysGetIamPolicy(req);

            if (res.apigatewayPolicy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->