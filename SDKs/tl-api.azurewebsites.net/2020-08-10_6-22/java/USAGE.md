<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ArticleAddMeasureUnitRequest;
import org.openapis.openapi.models.operations.ArticleAddMeasureUnitResponse;
import org.openapis.openapi.models.shared.MeasureUnitDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = new SchemeBearer() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            ArticleAddMeasureUnitRequest req = new ArticleAddMeasureUnitRequest() {{
                request = new org.openapis.openapi.models.shared.MeasureUnitDTO[]{{
                    add(new MeasureUnitDTO() {{
                        id = 592845;
                        name = "distinctio";
                        type = "quibusdam";
                    }}),
                    add(new MeasureUnitDTO() {{
                        id = 602763;
                        name = "nulla";
                        type = "corrupti";
                    }}),
                    add(new MeasureUnitDTO() {{
                        id = 847252;
                        name = "vel";
                        type = "error";
                    }}),
                }};
            }};            

            ArticleAddMeasureUnitResponse res = sdk.article.articleAddMeasureUnit(req);

            if (res.defaultResponseDTOOfStatusDTO.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->