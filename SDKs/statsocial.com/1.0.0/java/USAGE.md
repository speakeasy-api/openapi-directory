<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetApplicationsStatusQueryParams;
import org.openapis.openapi.models.operations.GetApplicationsStatusRequest;
import org.openapis.openapi.models.operations.GetApplicationsStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetApplicationsStatusRequest req = new GetApplicationsStatusRequest() {{
                queryParams = new GetApplicationsStatusQueryParams() {{
                    key = "corrupti";
                }};
            }};            

            GetApplicationsStatusResponse res = sdk.application.getApplicationsStatus(req);

            if (res.applicationStatus.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->