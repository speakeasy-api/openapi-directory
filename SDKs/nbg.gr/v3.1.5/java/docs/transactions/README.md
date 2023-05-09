# transactions

### Available Operations

* [getAccountsAccountIdStatementsStatementIdTransactions](#getaccountsaccountidstatementsstatementidtransactions) - Get Transactions
* [getAccountsAccountIdTransactions](#getaccountsaccountidtransactions) - Get Transactions

## getAccountsAccountIdStatementsStatementIdTransactions

Get Transactions by Account ID and Statement ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdTransactionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdStatementsStatementIdTransactionsRequest req = new GetAccountsAccountIdStatementsStatementIdTransactionsRequest("vel", "ea", "beatae") {{
                xCustomerUserAgent = "vero";
                xFapiAuthDate = "excepturi";
                xFapiCustomerIpAddress = "eum";
                xFapiInteractionId = "velit";
            }};            

            GetAccountsAccountIdStatementsStatementIdTransactionsResponse res = sdk.transactions.getAccountsAccountIdStatementsStatementIdTransactions(req, new GetAccountsAccountIdStatementsStatementIdTransactionsSecurity("ut", "perspiciatis") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadTransaction6 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsAccountIdTransactions

Get Transactions by Account ID

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdTransactionsRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdTransactionsResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdTransactionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdTransactionsRequest req = new GetAccountsAccountIdTransactionsRequest("earum", "dicta") {{
                fromBookingDateTime = OffsetDateTime.parse("2020-01-28T09:46:18.788Z");
                toBookingDateTime = OffsetDateTime.parse("2021-02-19T05:31:39.522Z");
                xCustomerUserAgent = "alias";
                xFapiAuthDate = "nisi";
                xFapiCustomerIpAddress = "itaque";
                xFapiInteractionId = "velit";
            }};            

            GetAccountsAccountIdTransactionsResponse res = sdk.transactions.getAccountsAccountIdTransactions(req, new GetAccountsAccountIdTransactionsSecurity("laborum", "non") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadTransaction6 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
