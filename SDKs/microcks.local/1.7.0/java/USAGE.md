<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceRequest;
import org.openapis.openapi.models.operations.GetResourceResponse;
import org.openapis.openapi.models.operations.GetResourceSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourceRequest req = new GetResourceRequest("corrupti");            

            GetResourceResponse res = sdk.getResource(req, new GetResourceSecurity("provident") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->