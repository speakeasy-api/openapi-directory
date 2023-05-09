# directDeposit

### Available Operations

* [getAllDirectDeposit](#getalldirectdeposit) - Get All Direct Deposit

## getAllDirectDeposit

Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllDirectDepositRequest;
import org.openapis.openapi.models.operations.GetAllDirectDepositResponse;
import org.openapis.openapi.models.operations.GetAllDirectDepositSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllDirectDepositRequest req = new GetAllDirectDepositRequest("molestiae", "quod");            

            GetAllDirectDepositResponse res = sdk.directDeposit.getAllDirectDeposit(req, new GetAllDirectDepositSecurity("quod") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.directDeposits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
