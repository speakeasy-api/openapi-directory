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
                    parent = "et";
                }};
                queryParams = new TranslateProjectsLocationsBatchTranslateDocumentQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "necessitatibus";
                    alt = "media";
                    callback = "corrupti";
                    fields = "ipsum";
                    key = "qui";
                    oauthToken = "optio";
                    prettyPrint = false;
                    quotaUser = "et";
                    uploadType = "dicta";
                    uploadProtocol = "quia";
                }};
                request = new BatchTranslateDocumentRequest() {{
                    formatConversions = new java.util.HashMap<String, String>() {{
                        put("sequi", "ea");
                        put("doloribus", "incidunt");
                    }};
                    glossaries = new java.util.HashMap<String, openapisdk.models.shared.TranslateTextGlossaryConfig>() {{
                        put("esse", new TranslateTextGlossaryConfig() {{
                            glossary = "omnis";
                            ignoreCase = true;
                        }});
                        put("impedit", new TranslateTextGlossaryConfig() {{
                            glossary = "deserunt";
                            ignoreCase = true;
                        }});
                    }};
                    inputConfigs = new openapisdk.models.shared.BatchDocumentInputConfig[]() {{
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "aliquam";
                            }};
                        }}),
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("pariatur", "hic");
                        put("id", "est");
                    }};
                    outputConfig = new BatchDocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "a";
                        }};
                    }};
                    sourceLanguageCode = "sint";
                    targetLanguageCodes = new String[]() {{
                        add("rerum"),
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