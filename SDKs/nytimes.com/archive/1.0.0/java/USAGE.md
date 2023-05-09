<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetYearMonthJsonRequest;
import org.openapis.openapi.models.operations.GetYearMonthJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetYearMonthJsonRequest req = new GetYearMonthJsonRequest(592845, 715190);            

            GetYearMonthJsonResponse res = sdk.archive.getYearMonthJson(req);

            if (res.getYearMonthJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->