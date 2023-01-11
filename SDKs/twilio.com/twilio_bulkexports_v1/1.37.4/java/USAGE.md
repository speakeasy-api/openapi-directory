<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateExportCustomJobRequest req = new CreateExportCustomJobRequest() {{
                security = new CreateExportCustomJobSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateExportCustomJobPathParams() {{
                    resourceType = "qui";
                }};
                request = new CreateExportCustomJobCreateExportCustomJobRequest() {{
                    email = "omnis";
                    endDay = "minus";
                    friendlyName = "nostrum";
                    startDay = "non";
                    webhookMethod = "sit";
                    webhookUrl = "repellat";
                }};
            }};

            CreateExportCustomJobResponse res = sdk.createExportCustomJob(req);

            if (res.bulkexportsV1ExportExportCustomJob.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->