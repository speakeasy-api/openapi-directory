<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest req = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest() {{
                dollarXgafv = "2";
                googleCloudDialogflowV2BatchDeleteEntityTypesRequest = new GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest() {{
                    entityTypeNames = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                }};
                accessToken = "nulla";
                alt = "media";
                callback = "illum";
                fields = "vel";
                key = "error";
                oauthToken = "deserunt";
                parent = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }}            

            DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse res = sdk.projects.dialogflowProjectsLocationsAgentEntityTypesBatchDelete(req, new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->