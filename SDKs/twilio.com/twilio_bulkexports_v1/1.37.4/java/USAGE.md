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
                    resourceType = "sit";
                }};
                request = new CreateExportCustomJobCreateExportCustomJobRequest() {{
                    email = "voluptas";
                    endDay = "culpa";
                    friendlyName = "expedita";
                    startDay = "consequuntur";
                    webhookMethod = "dolor";
                    webhookUrl = "expedita";
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