# scheduledPayments

### Available Operations

* [getAccountsAccountIdScheduledPayments](#getaccountsaccountidscheduledpayments) - Get Scheduled Payments

## getAccountsAccountIdScheduledPayments

Get Scheduled Payments by Account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdScheduledPaymentsRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdScheduledPaymentsResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdScheduledPaymentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdScheduledPaymentsRequest req = new GetAccountsAccountIdScheduledPaymentsRequest("hic", "necessitatibus") {{
                xCustomerUserAgent = "asperiores";
                xFapiAuthDate = "ex";
                xFapiCustomerIpAddress = "voluptas";
                xFapiInteractionId = "debitis";
            }};            

            GetAccountsAccountIdScheduledPaymentsResponse res = sdk.scheduledPayments.getAccountsAccountIdScheduledPayments(req, new GetAccountsAccountIdScheduledPaymentsSecurity("delectus", "quae") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadScheduledPayment3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
