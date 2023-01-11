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

            DeleteAeAssessmentRequest req = new DeleteAeAssessmentRequest() {{
                pathParams = new DeleteAeAssessmentPathParams() {{
                    aeAssessmentId = "optio";
                    employeeId = "eos";
                    employerId = "magnam";
                }};
                headers = new DeleteAeAssessmentHeaders() {{
                    apiVersion = "et";
                    authorization = "earum";
                }};
            }};

            DeleteAeAssessmentResponse res = sdk.aeAssessment.deleteAeAssessment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->