<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetApiV1ScansSecurity;
import org.openapis.openapi.models.operations.GetApiV1ScansQueryParams;
import org.openapis.openapi.models.operations.GetApiV1ScansRequest;
import org.openapis.openapi.models.operations.GetApiV1ScansResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ScansRequest req = new GetApiV1ScansRequest() {{
                security = new GetApiV1ScansSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetApiV1ScansQueryParams() {{
                    name = "corrupti";
                    perPage = "provident";
                }};
            }};            

            GetApiV1ScansResponse res = sdk.scans.getApiV1Scans(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->