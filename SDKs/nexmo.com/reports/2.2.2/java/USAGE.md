<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CancelReportSecurity;
import org.openapis.openapi.models.operations.CancelReportRequest;
import org.openapis.openapi.models.operations.CancelReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelReportRequest req = new CancelReportRequest() {{
                reportId = "aaaaaaaa-bbbb-cccc-dddd-0123456789ab";
            }}            

            CancelReportResponse res = sdk.cancelReport(req, new CancelReportSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.cancelReport200ApplicationJSONOneOf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->