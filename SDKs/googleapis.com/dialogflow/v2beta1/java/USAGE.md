<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest req = new DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest() {{
                security = new DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity() {{
                    option1 = new DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams() {{
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
                request = new GoogleCloudDialogflowV2beta1CompileSuggestionRequest() {{
                    contextSize = 384382;
                    latestMessage = "iure";
                }};
            }};            

            DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse res = sdk.projects.dialogflowProjectsConversationsParticipantsSuggestionsCompile(req);

            if (res.googleCloudDialogflowV2beta1CompileSuggestionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->