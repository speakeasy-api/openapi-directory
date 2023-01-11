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
                    deployment = "eos";
                    project = "quasi";
                }};
                queryParams = new DeploymentmanagerDeploymentsCancelPreviewQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "suscipit";
                    alt = "json";
                    callback = "ab";
                    fields = "quod";
                    key = "rem";
                    oauthToken = "recusandae";
                    prettyPrint = false;
                    quotaUser = "sunt";
                    uploadType = "quo";
                    uploadProtocol = "corporis";
                }};
                request = new DeploymentsCancelPreviewRequest() {{
                    fingerprint = "dicta";
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