<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedactMessageResponse;
import org.openapis.openapi.models.operations.RedactMessageSecurity;
import org.openapis.openapi.models.shared.RedactTransaction;
import org.openapis.openapi.models.shared.RedactTransactionProductEnum;
import org.openapis.openapi.models.shared.RedactTransactionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RedactTransaction req = new RedactTransaction("209ab3c7536542b91e8b5aef032f6861", RedactTransactionProductEnum.SMS, RedactTransactionTypeEnum.OUTBOUND);            

            RedactMessageResponse res = sdk.redactMessage(req, new RedactMessageSecurity("corrupti", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->