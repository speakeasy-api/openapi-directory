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
                    resource = "aut";
                }};
                queryParams = new ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "voluptate";
                    alt = "media";
                    callback = "in";
                    fields = "doloribus";
                    key = "ut";
                    oauthToken = "fugit";
                    optionsRequestedPolicyVersion = 6776362035236595236;
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "dolores";
                    uploadProtocol = "cum";
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