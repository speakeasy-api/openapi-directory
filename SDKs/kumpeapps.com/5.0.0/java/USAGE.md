<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidAllowanceGetRequest;
import org.openapis.openapi.models.operations.KkidAllowanceGetResponse;
import org.openapis.openapi.models.operations.KkidAllowanceGetSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidAllowanceGetRequest req = new KkidAllowanceGetRequest(548814L) {{
                transactionDays = 592845L;
            }};            

            KkidAllowanceGetResponse res = sdk.kKid.kkidAllowanceGet(req, new KkidAllowanceGetSecurity("distinctio") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.allowance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->