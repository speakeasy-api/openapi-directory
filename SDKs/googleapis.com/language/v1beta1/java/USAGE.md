<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesResponse;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzeEntitiesRequest;
import org.openapis.openapi.models.shared.AnalyzeEntitiesRequestEncodingTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnalyzeEntitiesRequest req = new LanguageDocumentsAnalyzeEntitiesRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                analyzeEntitiesRequest = new AnalyzeEntitiesRequest() {{
                    document = new Document() {{
                        content = "provident";
                        gcsContentUri = "distinctio";
                        language = "quibusdam";
                        type = DocumentTypeEnum.PLAIN_TEXT;
                    }};;
                    encodingType = AnalyzeEntitiesRequestEncodingTypeEnum.UTF32;
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            LanguageDocumentsAnalyzeEntitiesResponse res = sdk.documents.languageDocumentsAnalyzeEntities(req, new LanguageDocumentsAnalyzeEntitiesSecurity() {{
                option1 = new LanguageDocumentsAnalyzeEntitiesSecurityOption1("ipsa", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.analyzeEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->