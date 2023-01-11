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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new AnalyzeEntitiesRequest() {{
                    document = new Document() {{
                        boilerplateHandling = "KEEP_BOILERPLATE";
                        content = "dicta";
                        gcsContentUri = "debitis";
                        language = "voluptatum";
                        referenceWebUri = "et";
                        type = "HTML";
                    }};
                    encodingType = "UTF16";
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