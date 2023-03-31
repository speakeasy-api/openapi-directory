<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreatePathParams;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateQueryParams;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateResponse;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.VmImage;
import org.openapis.openapi.models.shared.ContainerImage;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new NotebooksProjectsLocationsEnvironmentsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    environmentId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new EnvironmentInput() {{
                    containerImage = new ContainerImage() {{
                        repository = "iure";
                        tag = "magnam";
                    }};
                    description = "debitis";
                    displayName = "ipsa";
                    postStartupScript = "delectus";
                    vmImage = new VmImage() {{
                        imageFamily = "tempora";
                        imageName = "suscipit";
                        project = "molestiae";
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