<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRenderRequest;
import org.openapis.openapi.models.operations.GetRenderResponse;
import org.openapis.openapi.models.operations.GetRenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRenderRequest req = new GetRenderRequest("corrupti");            

            GetRenderResponse res = sdk.edit.getRender(req, new GetRenderSecurity("provident") {{
                developerKey = "YOUR_API_KEY_HERE";
            }});

            if (res.renderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->