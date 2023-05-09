<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCorpusRequest;
import org.openapis.openapi.models.operations.CreateCorpusResponse;
import org.openapis.openapi.models.shared.AdminCorpus;
import org.openapis.openapi.models.shared.AdminCreateCorpusRequest;
import org.openapis.openapi.models.shared.AdminDimension;
import org.openapis.openapi.models.shared.AdminFilterAttribute;
import org.openapis.openapi.models.shared.AdminFilterAttributeLevelEnum;
import org.openapis.openapi.models.shared.AdminFilterAttributeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    oAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateCorpusRequest req = new CreateCorpusRequest(                new AdminCreateCorpusRequest() {{
                                corpus = new AdminCorpus() {{
                                    customDimensions = new org.openapis.openapi.models.shared.AdminDimension[]{{
                                        add(new AdminDimension() {{
                                            description = "distinctio";
                                            indexingDefault = 8442.66;
                                            name = "Ismael Little";
                                            servingDefault = 6235.64;
                                        }}),
                                        add(new AdminDimension() {{
                                            description = "deserunt";
                                            indexingDefault = 3843.82;
                                            name = "Dr. Valerie Toy";
                                            servingDefault = 3834.41;
                                        }}),
                                        add(new AdminDimension() {{
                                            description = "molestiae";
                                            indexingDefault = 7917.25;
                                            name = "Ken Kshlerin";
                                            servingDefault = 9255.97;
                                        }}),
                                    }};
                                    description = "temporibus";
                                    dtProvision = "ab";
                                    enabled = false;
                                    encoderId = "quis";
                                    encrypted = false;
                                    filterAttributes = new org.openapis.openapi.models.shared.AdminFilterAttribute[]{{
                                        add(new AdminFilterAttribute() {{
                                            description = "deserunt";
                                            indexed = false;
                                            level = AdminFilterAttributeLevelEnum.FILTER_ATTRIBUTE_LEVEL_UNDEFINED;
                                            name = "Estelle Will";
                                            type = AdminFilterAttributeTypeEnum.FILTER_ATTRIBUTE_TYPE_TEXT_LIST;
                                        }}),
                                    }};
                                    id = 870088L;
                                    metadataMaxBytes = 978619L;
                                    name = "Bernadette Schmidt";
                                    swapIenc = false;
                                    swapQenc = false;
                                    textless = false;
                                }};;
                            }};, 780529L);            

            CreateCorpusResponse res = sdk.adminService.createCorpus(req);

            if (res.adminCreateCorpusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->