<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ReportBehaviorSecurity;
import org.openapis.openapi.models.operations.ReportBehaviorRequest;
import org.openapis.openapi.models.operations.ReportBehaviorResponse;
import org.openapis.openapi.models.shared.CreateBehaviorInputCountryEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInputDocumentTypeEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInputReasonEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInput;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportBehaviorRequest req = new ReportBehaviorRequest() {{
                security = new ReportBehaviorSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new CreateBehaviorInput() {{
                    birthDate = "2021-10-25T05:21:43.948Z";
                    country = "cr";
                    documentId = "quibusdam";
                    documentType = "name";
                    email = "Karley_Stamm@hotmail.com";
                    feedbackDate = "2022-03-26T09:37:56.283Z";
                    firstName = "Hunter";
                    lastName = "Gulgowski";
                    phoneNumber = "debitis";
                    reason = "rape";
                }};
            }};            

            ReportBehaviorResponse res = sdk.behavior.reportBehavior(req);

            if (res.behaviourOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->