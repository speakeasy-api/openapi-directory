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
                    compositeType = "quo";
                    project = "est";
                }};
                queryParams = new DeploymentmanagerCompositeTypesDeleteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "autem";
                    alt = "json";
                    callback = "est";
                    fields = "laborum";
                    key = "ut";
                    oauthToken = "magni";
                    prettyPrint = false;
                    quotaUser = "consectetur";
                    uploadType = "voluptas";
                    uploadProtocol = "repellendus";
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