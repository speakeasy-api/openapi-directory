<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetApplicationsStatusRequest req = new GetApplicationsStatusRequest() {{
                queryParams = new GetApplicationsStatusQueryParams() {{
                    key = "sit";
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