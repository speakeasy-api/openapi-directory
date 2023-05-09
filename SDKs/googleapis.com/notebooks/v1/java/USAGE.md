<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerImage;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.VmImage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsEnvironmentsCreateRequest req = new NotebooksProjectsLocationsEnvironmentsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                environmentInput = new EnvironmentInput() {{
                    containerImage = new ContainerImage() {{
                        repository = "distinctio";
                        tag = "quibusdam";
                    }};;
                    description = "unde";
                    displayName = "nulla";
                    postStartupScript = "corrupti";
                    vmImage = new VmImage() {{
                        imageFamily = "illum";
                        imageName = "vel";
                        project = "error";
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "iure";
                environmentId = "magnam";
                fields = "debitis";
                key = "ipsa";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "suscipit";
                uploadProtocol = "molestiae";
            }};            

            NotebooksProjectsLocationsEnvironmentsCreateResponse res = sdk.projects.notebooksProjectsLocationsEnvironmentsCreate(req, new NotebooksProjectsLocationsEnvironmentsCreateSecurity("minus", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->