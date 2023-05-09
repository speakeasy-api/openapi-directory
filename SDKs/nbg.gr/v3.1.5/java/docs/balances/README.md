# balances

### Available Operations

* [getAccountsAccountIdBalances](#getaccountsaccountidbalances) - Get Balances

## getAccountsAccountIdBalances

Get Balances by Account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdBalancesRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdBalancesResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdBalancesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdBalancesRequest req = new GetAccountsAccountIdBalancesRequest("esse", "ipsum") {{
                xCustomerUserAgent = "excepturi";
                xFapiAuthDate = "aspernatur";
                xFapiCustomerIpAddress = "perferendis";
                xFapiInteractionId = "ad";
            }};            

            GetAccountsAccountIdBalancesResponse res = sdk.balances.getAccountsAccountIdBalances(req, new GetAccountsAccountIdBalancesSecurity("natus", "sed") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadBalance1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
