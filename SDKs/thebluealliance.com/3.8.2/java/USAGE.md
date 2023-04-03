<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetStatusSecurity;
import org.openapis.openapi.models.operations.GetStatusRequest;
import org.openapis.openapi.models.operations.GetStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatusRequest req = new GetStatusRequest() {{
                ifNoneMatch = "corrupti";
            }}            

            GetStatusResponse res = sdk.tba.getStatus(req, new GetStatusSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.apiStatus.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->