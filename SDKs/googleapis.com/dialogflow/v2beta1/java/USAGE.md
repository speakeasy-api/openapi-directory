<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest req = new DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2beta1CompileSuggestionRequest = new GoogleCloudDialogflowV2beta1CompileSuggestionRequest() {{
                    contextSize = 715190;
                    latestMessage = "quibusdam";
                }};;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse res = sdk.projects.dialogflowProjectsConversationsParticipantsSuggestionsCompile(req, new DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity() {{
                option1 = new DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2beta1CompileSuggestionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->