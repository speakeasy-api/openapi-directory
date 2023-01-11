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
                    dollarXgafv = "2";
                    accessToken = "eius";
                    alt = "json";
                    callback = "in";
                    fields = "sunt";
                    key = "error";
                    oauthToken = "et";
                    prettyPrint = false;
                    quotaUser = "culpa";
                    uploadType = "quo";
                    uploadProtocol = "qui";
                }};
                request = new AnalyzeEntitiesRequest() {{
                    document = new Document() {{
                        content = "dolores";
                        gcsContentUri = "maxime";
                        language = "perspiciatis";
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