<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentPathParams;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentResponse;
import org.openapis.openapi.models.shared.BatchTranslateDocumentRequest;
import org.openapis.openapi.models.shared.BatchDocumentOutputConfig;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.BatchDocumentInputConfig;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.TranslateTextGlossaryConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new TranslateProjectsLocationsBatchTranslateDocumentQueryParams() {{
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
                request = new BatchTranslateDocumentRequest() {{
                    customizedAttribution = "suscipit";
                    enableShadowRemovalNativePdf = false;
                    formatConversions = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    glossaries = new java.util.HashMap<String, org.openapis.openapi.models.shared.TranslateTextGlossaryConfig>() {{
                        put("suscipit", new TranslateTextGlossaryConfig() {{
                            glossary = "molestiae";
                            ignoreCase = false;
                        }});
                        put("minus", new TranslateTextGlossaryConfig() {{
                            glossary = "placeat";
                            ignoreCase = false;
                        }});
                    }};
                    inputConfigs = new org.openapis.openapi.models.shared.BatchDocumentInputConfig[]{{
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "iusto";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "excepturi";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "nisi";
                            }};
                        }}),
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                        put("deserunt", "perferendis");
                        put("ipsam", "repellendus");
                    }};
                    outputConfig = new BatchDocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "sapiente";
                        }};
                    }};
                    sourceLanguageCode = "quo";
                    targetLanguageCodes = new String[]{{
                        add("at"),
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