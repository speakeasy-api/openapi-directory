<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurityOption2;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesQueryParams;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesResponse;
import org.openapis.openapi.models.shared.AnalyzeEntitiesRequestEncodingTypeEnum;
import org.openapis.openapi.models.shared.AnalyzeEntitiesRequest;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnalyzeEntitiesRequest req = new LanguageDocumentsAnalyzeEntitiesRequest() {{
                security = new LanguageDocumentsAnalyzeEntitiesSecurity() {{
                    option1 = new LanguageDocumentsAnalyzeEntitiesSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new LanguageDocumentsAnalyzeEntitiesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new AnalyzeEntitiesRequest() {{
                    document = new Document() {{
                        content = "deserunt";
                        gcsContentUri = "suscipit";
                        language = "iure";
                        type = "TYPE_UNSPECIFIED";
                    }};
                    encodingType = "UTF32";
                }};
            }};            

            LanguageDocumentsAnalyzeEntitiesResponse res = sdk.documents.languageDocumentsAnalyzeEntities(req);

            if (res.analyzeEntitiesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->