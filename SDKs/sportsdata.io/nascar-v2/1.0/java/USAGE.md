<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DriverDetailsFormatEnum;
import org.openapis.openapi.models.operations.DriverDetailsRequest;
import org.openapis.openapi.models.operations.DriverDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DriverDetailsRequest req = new DriverDetailsRequest() {{
                driverid = "corrupti";
                format = "json";
            }}            

            DriverDetailsResponse res = sdk.driverDetails(req);

            if (res.driver.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->