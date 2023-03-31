<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetYearMonthJsonPathParams;
import org.openapis.openapi.models.operations.GetYearMonthJsonRequest;
import org.openapis.openapi.models.operations.GetYearMonthJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetYearMonthJsonRequest req = new GetYearMonthJsonRequest() {{
                pathParams = new GetYearMonthJsonPathParams() {{
                    month = 548814;
                    year = 592845;
                }};
            }};            

            GetYearMonthJsonResponse res = sdk.archive.getYearMonthJson(req);

            if (res.getYearMonthJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->