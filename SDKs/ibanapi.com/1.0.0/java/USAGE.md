<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBalanceResponse;
import org.openapis.openapi.models.operations.GetBalanceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBalanceResponse res = sdk.ibanapi.getBalance(new GetBalanceSecurity("corrupti") {{
                apiKeySecurity = "YOUR_API_KEY_HERE";
            }});

            if (res.balanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->