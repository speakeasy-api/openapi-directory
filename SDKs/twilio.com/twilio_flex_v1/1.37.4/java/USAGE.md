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

            CreateAssessmentsRequest req = new CreateAssessmentsRequest() {{
                security = new CreateAssessmentsSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
            }};

            CreateAssessmentsResponse res = sdk.createAssessments(req);

            if (res.flexV1Assessments.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->