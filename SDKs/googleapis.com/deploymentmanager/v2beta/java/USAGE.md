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

            DeploymentmanagerCompositeTypesDeleteRequest req = new DeploymentmanagerCompositeTypesDeleteRequest() {{
                security = new DeploymentmanagerCompositeTypesDeleteSecurity() {{
                    option1 = new DeploymentmanagerCompositeTypesDeleteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DeploymentmanagerCompositeTypesDeletePathParams() {{
                    compositeType = "sit";
                    project = "voluptas";
                }};
                queryParams = new DeploymentmanagerCompositeTypesDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "expedita";
                    alt = "proto";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
            }};

            DeploymentmanagerCompositeTypesDeleteResponse res = sdk.compositeTypes.deploymentmanagerCompositeTypesDelete(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->