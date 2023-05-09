# accounts

### Available Operations

* [getAccounts](#getaccounts) - Get Accounts
* [getAccountsAccountId](#getaccountsaccountid) - Get Accounts

## getAccounts

Get Accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountsResponse;
import org.openapis.openapi.models.operations.GetAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsRequest req = new GetAccountsRequest("nam") {{
                xCustomerUserAgent = "officia";
                xFapiAuthDate = "occaecati";
                xFapiCustomerIpAddress = "fugit";
                xFapiInteractionId = "deleniti";
            }};            

            GetAccountsResponse res = sdk.accounts.getAccounts(req, new GetAccountsSecurity("hic", "optio") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadAccount5 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsAccountId

Get Accounts by Account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdRequest req = new GetAccountsAccountIdRequest("totam", "beatae") {{
                xCustomerUserAgent = "commodi";
                xFapiAuthDate = "molestiae";
                xFapiCustomerIpAddress = "modi";
                xFapiInteractionId = "qui";
            }};            

            GetAccountsAccountIdResponse res = sdk.accounts.getAccountsAccountId(req, new GetAccountsAccountIdSecurity("impedit", "cum") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadAccount5 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
