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
                    parent = "sit";
                }};
                queryParams = new NotebooksProjectsLocationsEnvironmentsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    environmentId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new EnvironmentInput() {{
                    containerImage = new ContainerImage() {{
                        repository = "debitis";
                        tag = "voluptatum";
                    }};
                    description = "et";
                    displayName = "ut";
                    postStartupScript = "dolorem";
                    vmImage = new VmImage() {{
                        imageFamily = "et";
                        imageName = "voluptate";
                        project = "iste";
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