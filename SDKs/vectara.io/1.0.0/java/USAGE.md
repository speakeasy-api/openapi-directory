<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCorpusRequest;
import org.openapis.openapi.models.operations.CreateCorpusResponse;
import org.openapis.openapi.models.shared.AdminCreateCorpusRequest;
import org.openapis.openapi.models.shared.AdminCorpus;
import org.openapis.openapi.models.shared.AdminFilterAttribute;
import org.openapis.openapi.models.shared.AdminFilterAttributeTypeEnum;
import org.openapis.openapi.models.shared.AdminFilterAttributeLevelEnum;
import org.openapis.openapi.models.shared.AdminDimension;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateCorpusRequest req = new CreateCorpusRequest() {{
                adminCreateCorpusRequest = new AdminCreateCorpusRequest() {{
                    corpus = new AdminCorpus() {{
                        customDimensions = new org.openapis.openapi.models.shared.AdminDimension[]{{
                            add(new AdminDimension() {{
                                description = "provident";
                                indexingDefault = 7151.9;
                                name = "quibusdam";
                                servingDefault = 6027.63;
                            }}),
                            add(new AdminDimension() {{
                                description = "nulla";
                                indexingDefault = 5448.83;
                                name = "illum";
                                servingDefault = 4236.55;
                            }}),
                            add(new AdminDimension() {{
                                description = "error";
                                indexingDefault = 6458.94;
                                name = "suscipit";
                                servingDefault = 4375.87;
                            }}),
                        }};
                        description = "magnam";
                        dtProvision = "debitis";
                        enabled = false;
                        encoderId = "ipsa";
                        encrypted = false;
                        filterAttributes = new org.openapis.openapi.models.shared.AdminFilterAttribute[]{{
                            add(new AdminFilterAttribute() {{
                                description = "tempora";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__DOCUMENT";
                                name = "molestiae";
                                type = "FILTER_ATTRIBUTE_TYPE__TEXT";
                            }}),
                            add(new AdminFilterAttribute() {{
                                description = "placeat";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__DOCUMENT";
                                name = "iusto";
                                type = "FILTER_ATTRIBUTE_TYPE__REAL";
                            }}),
                            add(new AdminFilterAttribute() {{
                                description = "nisi";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART";
                                name = "temporibus";
                                type = "FILTER_ATTRIBUTE_TYPE__UNDEFINED";
                            }}),
                            add(new AdminFilterAttribute() {{
                                description = "quis";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__UNDEFINED";
                                name = "deserunt";
                                type = "FILTER_ATTRIBUTE_TYPE__UNDEFINED";
                            }}),
                        }};
                        id = 368241;
                        metadataMaxBytes = 832620;
                        name = "sapiente";
                        swapIenc = false;
                        swapQenc = false;
                        textless = false;
                    }};
                }};
                customerId = 778157;
            }}            

            CreateCorpusResponse res = sdk.adminService.createCorpus(req);

            if (res.adminCreateCorpusResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->