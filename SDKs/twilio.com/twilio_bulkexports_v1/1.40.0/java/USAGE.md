<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateExportCustomJobSecurity;
import org.openapis.openapi.models.operations.CreateExportCustomJobCreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExportCustomJobRequest req = new CreateExportCustomJobRequest() {{
                requestBody = new CreateExportCustomJobCreateExportCustomJobRequest() {{
                    email = "Larue_Rau85@yahoo.com";
                    endDay = "corrupti";
                    friendlyName = "illum";
                    startDay = "vel";
                    webhookMethod = "error";
                    webhookUrl = "deserunt";
                }};
                resourceType = "suscipit";
            }}            

            CreateExportCustomJobResponse res = sdk.createExportCustomJob(req, new CreateExportCustomJobSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkexportsV1ExportExportCustomJob.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->