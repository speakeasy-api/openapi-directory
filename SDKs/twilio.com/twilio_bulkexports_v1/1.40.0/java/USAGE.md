<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateExportCustomJobSecurity;
import org.openapis.openapi.models.operations.CreateExportCustomJobPathParams;
import org.openapis.openapi.models.operations.CreateExportCustomJobCreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExportCustomJobRequest req = new CreateExportCustomJobRequest() {{
                security = new CreateExportCustomJobSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateExportCustomJobPathParams() {{
                    resourceType = "corrupti";
                }};
                request = new CreateExportCustomJobCreateExportCustomJobRequest() {{
                    email = "Micheal_Sporer@yahoo.com";
                    endDay = "corrupti";
                    friendlyName = "illum";
                    startDay = "vel";
                    webhookMethod = "error";
                    webhookUrl = "deserunt";
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