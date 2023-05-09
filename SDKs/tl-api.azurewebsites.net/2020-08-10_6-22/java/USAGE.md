<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArticleAddMeasureUnitResponse;
import org.openapis.openapi.models.shared.MeasureUnitDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.MeasureUnitDTO[]{{
                add(new MeasureUnitDTO() {{
                    id = 715190;
                    name = "Stuart Stiedemann";
                    type = "vel";
                }}),
                add(new MeasureUnitDTO() {{
                    id = 623564;
                    name = "Rick Kertzmann";
                    type = "ipsa";
                }}),
                add(new MeasureUnitDTO() {{
                    id = 963663;
                    name = "Laurie Kreiger";
                    type = "voluptatum";
                }}),
            }}            

            ArticleAddMeasureUnitResponse res = sdk.article.articleAddMeasureUnit(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->