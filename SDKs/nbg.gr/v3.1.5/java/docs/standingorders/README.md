# standingOrders

### Available Operations

* [getAccountsAccountIdStandingOrders](#getaccountsaccountidstandingorders) - Get Standing Orders

## getAccountsAccountIdStandingOrders

Get Standing Orders by Account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStandingOrdersRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStandingOrdersResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStandingOrdersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdStandingOrdersRequest req = new GetAccountsAccountIdStandingOrdersRequest("minus", "fuga") {{
                xCustomerUserAgent = "laborum";
                xFapiAuthDate = "consectetur";
                xFapiCustomerIpAddress = "velit";
                xFapiInteractionId = "atque";
            }};            

            GetAccountsAccountIdStandingOrdersResponse res = sdk.standingOrders.getAccountsAccountIdStandingOrders(req, new GetAccountsAccountIdStandingOrdersSecurity("ipsum", "impedit") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadStandingOrder6 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
