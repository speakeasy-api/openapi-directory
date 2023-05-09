<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQodRequest;
import org.openapis.openapi.models.operations.GetQodResponse;
import org.openapis.openapi.models.operations.GetQodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQodRequest req = new GetQodRequest() {{
                category = "corrupti";
                id = "provident";
                language = "distinctio";
            }};            

            GetQodResponse res = sdk.privateQOD.getQod(req, new GetQodSecurity("quibusdam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.qodResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->