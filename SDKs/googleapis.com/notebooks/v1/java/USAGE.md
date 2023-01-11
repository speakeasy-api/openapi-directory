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

            NotebooksProjectsLocationsEnvironmentsCreateRequest req = new NotebooksProjectsLocationsEnvironmentsCreateRequest() {{
                security = new NotebooksProjectsLocationsEnvironmentsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NotebooksProjectsLocationsEnvironmentsCreatePathParams() {{
                    parent = "qui";
                }};
                queryParams = new NotebooksProjectsLocationsEnvironmentsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "omnis";
                    alt = "media";
                    callback = "sapiente";
                    environmentId = "occaecati";
                    fields = "necessitatibus";
                    key = "perspiciatis";
                    oauthToken = "voluptatem";
                    prettyPrint = false;
                    quotaUser = "laborum";
                    uploadType = "modi";
                    uploadProtocol = "sed";
                }};
                request = new EnvironmentInput() {{
                    containerImage = new ContainerImage() {{
                        repository = "a";
                        tag = "eum";
                    }};
                    description = "debitis";
                    displayName = "est";
                    postStartupScript = "quia";
                    vmImage = new VmImage() {{
                        imageFamily = "quia";
                        imageName = "et";
                        project = "fugiat";
                    }};
                }};
            }};

            NotebooksProjectsLocationsEnvironmentsCreateResponse res = sdk.projects.notebooksProjectsLocationsEnvironmentsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->