<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ScansRequest;
import org.openapis.openapi.models.operations.GetApiV1ScansResponse;
import org.openapis.openapi.models.operations.GetApiV1ScansSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ScansRequest req = new GetApiV1ScansRequest() {{
                name = "Terrence Rau";
                perPage = "nulla";
            }};            

            GetApiV1ScansResponse res = sdk.scans.getApiV1Scans(req, new GetApiV1ScansSecurity("corrupti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->