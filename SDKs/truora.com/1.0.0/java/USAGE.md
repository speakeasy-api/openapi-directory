<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ReportBehaviorSecurity;
import org.openapis.openapi.models.operations.ReportBehaviorResponse;
import org.openapis.openapi.models.shared.CreateBehaviorInputCountryEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInputDocumentTypeEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInputReasonEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateBehaviorInput req = new CreateBehaviorInput() {{
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
            }}            

            ReportBehaviorResponse res = sdk.behavior.reportBehavior(req, new ReportBehaviorSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.behaviourOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->