<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GETUserContentByDateJsonSecurity;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonRequest;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETUserContentByDateJsonRequest req = new GETUserContentByDateJsonRequest() {{
                date = "corrupti";
            }}            

            GETUserContentByDateJsonResponse res = sdk.getUserContentByDateJson(req, new GETUserContentByDateJsonSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUserContentByDateJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->