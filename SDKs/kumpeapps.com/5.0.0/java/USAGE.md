<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.KkidAllowanceGetSecurity;
import org.openapis.openapi.models.operations.KkidAllowanceGetQueryParams;
import org.openapis.openapi.models.operations.KkidAllowanceGetRequest;
import org.openapis.openapi.models.operations.KkidAllowanceGetResponse;
import org.openapis.openapi.models.shared.SchemeAuthKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidAllowanceGetRequest req = new KkidAllowanceGetRequest() {{
                security = new KkidAllowanceGetSecurity() {{
                    authKey = new SchemeAuthKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new KkidAllowanceGetQueryParams() {{
                    kidUserId = 548814;
                    transactionDays = 592845;
                }};
            }};            

            KkidAllowanceGetResponse res = sdk.kKid.kkidAllowanceGet(req);

            if (res.allowance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->