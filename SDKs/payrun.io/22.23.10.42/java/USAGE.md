<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteAEAssessmentRequest;
import org.openapis.openapi.models.operations.DeleteAEAssessmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAEAssessmentRequest req = new DeleteAEAssessmentRequest() {{
                aeAssessmentId = "corrupti";
                apiVersion = "provident";
                authorization = "distinctio";
                employeeId = "quibusdam";
                employerId = "unde";
            }}            

            DeleteAEAssessmentResponse res = sdk.aeAssessment.deleteAEAssessment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->