<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExportCustomJobCreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobResponse;
import org.openapis.openapi.models.operations.CreateExportCustomJobSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExportCustomJobRequest req = new CreateExportCustomJobRequest("corrupti") {{
                requestBody = new CreateExportCustomJobCreateExportCustomJobRequest("provident", "distinctio", "quibusdam") {{
                    email = "Ryan.Little62@yahoo.com";
                    webhookMethod = "deserunt";
                    webhookUrl = "suscipit";
                }};;
            }};            

            CreateExportCustomJobResponse res = sdk.createExportCustomJob(req, new CreateExportCustomJobSecurity("iure", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkexportsV1ExportExportCustomJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->