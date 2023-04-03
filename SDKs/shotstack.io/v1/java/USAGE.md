<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetRenderSecurity;
import org.openapis.openapi.models.operations.GetRenderRequest;
import org.openapis.openapi.models.operations.GetRenderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRenderRequest req = new GetRenderRequest() {{
                id = "corrupti";
            }}            

            GetRenderResponse res = sdk.edit.getRender(req, new GetRenderSecurity() {{
                developerKey = "YOUR_API_KEY_HERE";
            }});

            if (res.renderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->