<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetStatusRequest req = new GetStatusRequest() {{
                security = new GetStatusSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new GetStatusHeaders() {{
                    ifModifiedSince = "sit";
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