<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest req = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest() {{
                security = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity() {{
                    option1 = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest() {{
                    entityTypeNames = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                }};
            }};            

            DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse res = sdk.projects.dialogflowProjectsLocationsAgentEntityTypesBatchDelete(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->