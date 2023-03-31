<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GETUserContentByDateJsonSecurity;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonQueryParams;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonRequest;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETUserContentByDateJsonRequest req = new GETUserContentByDateJsonRequest() {{
                security = new GETUserContentByDateJsonSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GETUserContentByDateJsonQueryParams() {{
                    date = "corrupti";
                }};
            }};            

            GETUserContentByDateJsonResponse res = sdk.getUserContentByDateJson(req);

            if (res.getUserContentByDateJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->