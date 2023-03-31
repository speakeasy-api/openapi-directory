<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.MergeTemplateQueryParams;
import org.openapis.openapi.models.operations.MergeTemplateRequest;
import org.openapis.openapi.models.operations.MergeTemplateResponse;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.OutputEnum;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    jsonWebTokenAuth = new SchemeJSONWebTokenAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            MergeTemplateRequest req = new MergeTemplateRequest() {{
                queryParams = new MergeTemplateQueryParams() {{
                    format = "pdf";
                    name = "My document";
                    output = "base64";
                    templateId = 19375;
                }};
                request = new Data() {{
                    id = 12312;
                    name = "Sample Data";
                }};
            }};            

            MergeTemplateResponse res = sdk.documents.mergeTemplate(req);

            if (res.mergeTemplate200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->