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
                    deployment = "sit";
                    project = "voluptas";
                }};
                queryParams = new DeploymentmanagerDeploymentsCancelPreviewQueryParams() {{
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
                request = new DeploymentsCancelPreviewRequest() {{
                    fingerprint = "debitis";
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