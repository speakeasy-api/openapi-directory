<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetRenderSecurity;
import org.openapis.openapi.models.operations.GetRenderPathParams;
import org.openapis.openapi.models.operations.GetRenderRequest;
import org.openapis.openapi.models.operations.GetRenderResponse;
import org.openapis.openapi.models.shared.SchemeDeveloperKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRenderRequest req = new GetRenderRequest() {{
                security = new GetRenderSecurity() {{
                    developerKey = new SchemeDeveloperKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetRenderPathParams() {{
                    id = "corrupti";
                }};
            }};            

            GetRenderResponse res = sdk.edit.getRender(req);

            if (res.renderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->