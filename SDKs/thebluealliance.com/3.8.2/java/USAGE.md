<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetStatusSecurity;
import org.openapis.openapi.models.operations.GetStatusHeaders;
import org.openapis.openapi.models.operations.GetStatusRequest;
import org.openapis.openapi.models.operations.GetStatusResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatusRequest req = new GetStatusRequest() {{
                security = new GetStatusSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new GetStatusHeaders() {{
                    ifNoneMatch = "corrupti";
                }};
            }};            

            GetStatusResponse res = sdk.tba.getStatus(req);

            if (res.apiStatus.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->