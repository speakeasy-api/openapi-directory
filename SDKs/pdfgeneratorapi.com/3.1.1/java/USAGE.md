<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeTemplateRequest;
import org.openapis.openapi.models.operations.MergeTemplateResponse;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.OutputEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            MergeTemplateRequest req = new MergeTemplateRequest(                new Data() {{
                                id = 12312L;
                                name = "Sample Data";
                            }};, 19375L) {{
                format = FormatEnum.PDF;
                name = "My document";
                output = OutputEnum.BASE64;
            }};            

            MergeTemplateResponse res = sdk.documents.mergeTemplate(req);

            if (res.mergeTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->