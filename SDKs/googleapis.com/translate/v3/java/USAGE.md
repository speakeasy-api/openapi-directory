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

            TranslateProjectsLocationsBatchTranslateDocumentRequest req = new TranslateProjectsLocationsBatchTranslateDocumentRequest() {{
                security = new TranslateProjectsLocationsBatchTranslateDocumentSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TranslateProjectsLocationsBatchTranslateDocumentPathParams() {{
                    parent = "sit";
                }};
                queryParams = new TranslateProjectsLocationsBatchTranslateDocumentQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new BatchTranslateDocumentRequest() {{
                    formatConversions = new java.util.HashMap<String, String>() {{
                        put("debitis", "voluptatum");
                        put("et", "ut");
                        put("dolorem", "et");
                    }};
                    glossaries = new java.util.HashMap<String, openapisdk.models.shared.TranslateTextGlossaryConfig>() {{
                        put("iste", new TranslateTextGlossaryConfig() {{
                            glossary = "vitae";
                            ignoreCase = true;
                        }});
                    }};
                    inputConfigs = new openapisdk.models.shared.BatchDocumentInputConfig[]() {{
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "illum";
                            }};
                        }}),
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("vel", "odio");
                    }};
                    outputConfig = new BatchDocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "dolore";
                        }};
                    }};
                    sourceLanguageCode = "id";
                    targetLanguageCodes = new String[]() {{
                        add("accusantium"),
                    }};
                }};
            }};

            TranslateProjectsLocationsBatchTranslateDocumentResponse res = sdk.projects.translateProjectsLocationsBatchTranslateDocument(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->