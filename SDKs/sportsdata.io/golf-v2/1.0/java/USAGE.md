<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CurrentSeasonFormatEnum;
import org.openapis.openapi.models.operations.CurrentSeasonPathParams;
import org.openapis.openapi.models.operations.CurrentSeasonRequest;
import org.openapis.openapi.models.operations.CurrentSeasonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CurrentSeasonRequest req = new CurrentSeasonRequest() {{
                pathParams = new CurrentSeasonPathParams() {{
                    format = "JSON";
                }};
            }};            

            CurrentSeasonResponse res = sdk.currentSeason(req);

            if (res.season.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->