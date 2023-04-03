<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.VmImage;
import org.openapis.openapi.models.shared.ContainerImage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsEnvironmentsCreateRequest req = new NotebooksProjectsLocationsEnvironmentsCreateRequest() {{
                dollarXgafv = "2";
                environmentInput = new EnvironmentInput() {{
                    containerImage = new ContainerImage() {{
                        repository = "provident";
                        tag = "distinctio";
                    }};
                    description = "quibusdam";
                    displayName = "unde";
                    postStartupScript = "nulla";
                    vmImage = new VmImage() {{
                        imageFamily = "corrupti";
                        imageName = "illum";
                        project = "vel";
                    }};
                }};
                accessToken = "error";
                alt = "media";
                callback = "suscipit";
                environmentId = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                parent = "delectus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "suscipit";
                uploadProtocol = "molestiae";
            }}            

            NotebooksProjectsLocationsEnvironmentsCreateResponse res = sdk.projects.notebooksProjectsLocationsEnvironmentsCreate(req, new NotebooksProjectsLocationsEnvironmentsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->