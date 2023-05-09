<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDocumentInputConfig;
import org.openapis.openapi.models.shared.BatchDocumentOutputConfig;
import org.openapis.openapi.models.shared.BatchTranslateDocumentRequest;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.TranslateTextGlossaryConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsBatchTranslateDocumentRequest req = new TranslateProjectsLocationsBatchTranslateDocumentRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                batchTranslateDocumentRequest = new BatchTranslateDocumentRequest() {{
                    customizedAttribution = "distinctio";
                    enableShadowRemovalNativePdf = false;
                    formatConversions = new java.util.HashMap<String, String>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                    glossaries = new java.util.HashMap<String, org.openapis.openapi.models.shared.TranslateTextGlossaryConfig>() {{
                        put("magnam", new TranslateTextGlossaryConfig() {{
                            glossary = "debitis";
                            ignoreCase = false;
                        }});
                        put("ipsa", new TranslateTextGlossaryConfig() {{
                            glossary = "delectus";
                            ignoreCase = false;
                        }});
                    }};
                    inputConfigs = new org.openapis.openapi.models.shared.BatchDocumentInputConfig[]{{
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "suscipit";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "molestiae";
                            }};
                        }}),
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    outputConfig = new BatchDocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "quis";
                        }};;
                    }};;
                    sourceLanguageCode = "veritatis";
                    targetLanguageCodes = new String[]{{
                        add("perferendis"),
                        add("ipsam"),
                        add("repellendus"),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            TranslateProjectsLocationsBatchTranslateDocumentResponse res = sdk.projects.translateProjectsLocationsBatchTranslateDocument(req, new TranslateProjectsLocationsBatchTranslateDocumentSecurity("esse", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->