<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption2;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewSecurity;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewPathParams;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewQueryParams;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewRequest;
import org.openapis.openapi.models.operations.DeploymentmanagerDeploymentsCancelPreviewResponse;
import org.openapis.openapi.models.shared.DeploymentsCancelPreviewRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentmanagerDeploymentsCancelPreviewRequest req = new DeploymentmanagerDeploymentsCancelPreviewRequest() {{
                security = new DeploymentmanagerDeploymentsCancelPreviewSecurity() {{
                    option1 = new DeploymentmanagerDeploymentsCancelPreviewSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DeploymentmanagerDeploymentsCancelPreviewPathParams() {{
                    deployment = "corrupti";
                    project = "provident";
                }};
                queryParams = new DeploymentmanagerDeploymentsCancelPreviewQueryParams() {{
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
                request = new DeploymentsCancelPreviewRequest() {{
                    fingerprint = "iure";
                }};
            }};            

            DeploymentmanagerDeploymentsCancelPreviewResponse res = sdk.deployments.deploymentmanagerDeploymentsCancelPreview(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->