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
                    parent = "sed";
                }};
                queryParams = new TranslateProjectsLocationsBatchTranslateDocumentQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "exercitationem";
                    alt = "json";
                    callback = "ratione";
                    fields = "neque";
                    key = "quos";
                    oauthToken = "distinctio";
                    prettyPrint = false;
                    quotaUser = "harum";
                    uploadType = "consequatur";
                    uploadProtocol = "laudantium";
                }};
                request = new BatchTranslateDocumentRequest() {{
                    formatConversions = new java.util.HashMap<String, String>() {{
                        put("nisi", "repellendus");
                    }};
                    glossaries = new java.util.HashMap<String, openapisdk.models.shared.TranslateTextGlossaryConfig>() {{
                        put("sequi", new TranslateTextGlossaryConfig() {{
                            glossary = "quis";
                            ignoreCase = true;
                        }});
                    }};
                    inputConfigs = new openapisdk.models.shared.BatchDocumentInputConfig[]() {{
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "est";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "quia";
                            }};
                        }}),
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("sed", "et");
                    }};
                    outputConfig = new BatchDocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "corrupti";
                        }};
                    }};
                    sourceLanguageCode = "enim";
                    targetLanguageCodes = new String[]() {{
                        add("quia"),
                        add("cum"),
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