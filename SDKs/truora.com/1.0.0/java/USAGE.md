<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportBehaviorResponse;
import org.openapis.openapi.models.operations.ReportBehaviorSecurity;
import org.openapis.openapi.models.shared.CreateBehaviorInput;
import org.openapis.openapi.models.shared.CreateBehaviorInputCountryEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInputDocumentTypeEnum;
import org.openapis.openapi.models.shared.CreateBehaviorInputReasonEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateBehaviorInput req = new CreateBehaviorInput(OffsetDateTime.parse("2021-10-25T05:21:43.948Z"), CreateBehaviorInputCountryEnum.CR, "quibusdam", CreateBehaviorInputDocumentTypeEnum.NAME, "nulla", OffsetDateTime.parse("2021-04-22T12:08:58.275Z"), "vel", "error", CreateBehaviorInputReasonEnum.DRUG_POSSESSION) {{
                phoneNumber = "suscipit";
            }};            

            ReportBehaviorResponse res = sdk.behavior.reportBehavior(req, new ReportBehaviorSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.behaviourOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->