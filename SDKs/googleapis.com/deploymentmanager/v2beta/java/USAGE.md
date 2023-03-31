<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeletePathParams;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteQueryParams;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerCompositeTypesDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    compositeType = "corrupti";
                    project = "provident";
                }};
                queryParams = new DeploymentmanagerCompositeTypesDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "media";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
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