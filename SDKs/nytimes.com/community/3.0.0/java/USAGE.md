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

            GetUserContentByDateJsonRequest req = new GetUserContentByDateJsonRequest() {{
                security = new GetUserContentByDateJsonSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetUserContentByDateJsonQueryParams() {{
                    date = "dolores";
                }};
            }};

            GetUserContentByDateJsonResponse res = sdk.getUserContentByDateJson(req);

            if (res.getUserContentByDateJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->