<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CancelReportSecurity;
import org.openapis.openapi.models.operations.CancelReportPathParams;
import org.openapis.openapi.models.operations.CancelReportRequest;
import org.openapis.openapi.models.operations.CancelReportResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelReportRequest req = new CancelReportRequest() {{
                security = new CancelReportSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CancelReportPathParams() {{
                    reportId = "aaaaaaaa-bbbb-cccc-dddd-0123456789ab";
                }};
            }};            

            CancelReportResponse res = sdk.cancelReport(req);

            if (res.cancelReport200ApplicationJSONOneOf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->