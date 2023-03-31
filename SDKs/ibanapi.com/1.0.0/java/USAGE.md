<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetBalanceSecurity;
import org.openapis.openapi.models.operations.GetBalanceRequest;
import org.openapis.openapi.models.operations.GetBalanceResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBalanceRequest req = new GetBalanceRequest() {{
                security = new GetBalanceSecurity() {{
                    apiKeySecurity = new SchemeAPIKeySecurity() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
            }};            

            GetBalanceResponse res = sdk.ibanapi.getBalance(req);

            if (res.balanceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->