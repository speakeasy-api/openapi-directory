<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RedactMessageSecurity;
import org.openapis.openapi.models.operations.RedactMessageRequest;
import org.openapis.openapi.models.operations.RedactMessageResponse;
import org.openapis.openapi.models.shared.RedactTransactionProductEnum;
import org.openapis.openapi.models.shared.RedactTransactionTypeEnum;
import org.openapis.openapi.models.shared.RedactTransaction;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedactMessageRequest req = new RedactMessageRequest() {{
                security = new RedactMessageSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new RedactTransaction() {{
                    id = "209ab3c7536542b91e8b5aef032f6861";
                    product = "sms";
                    type = "outbound";
                }};
            }};            

            RedactMessageResponse res = sdk.redactMessage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->