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
                    compositeType = "sapiente";
                    project = "qui";
                }};
                queryParams = new DeploymentmanagerCompositeTypesDeleteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "odio";
                    alt = "json";
                    callback = "et";
                    fields = "culpa";
                    key = "odio";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "vitae";
                    uploadType = "corrupti";
                    uploadProtocol = "qui";
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