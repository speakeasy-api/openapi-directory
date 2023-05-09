# statements

### Available Operations

* [getAccountsAccountIdStatements](#getaccountsaccountidstatements) - Get Statements
* [getAccountsAccountIdStatementsStatementId](#getaccountsaccountidstatementsstatementid) - Get Statements
* [getAccountsAccountIdStatementsStatementIdFile](#getaccountsaccountidstatementsstatementidfile) - Get Statements

## getAccountsAccountIdStatements

Get Statements by Account ID

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdStatementsRequest req = new GetAccountsAccountIdStatementsRequest("magni", "soluta") {{
                fromStatementDateTime = OffsetDateTime.parse("2020-11-02T00:49:00.024Z");
                toStatementDateTime = OffsetDateTime.parse("2022-07-08T17:52:09.255Z");
                xCustomerUserAgent = "voluptate";
                xFapiAuthDate = "sequi";
                xFapiCustomerIpAddress = "dignissimos";
                xFapiInteractionId = "neque";
            }};            

            GetAccountsAccountIdStatementsResponse res = sdk.statements.getAccountsAccountIdStatements(req, new GetAccountsAccountIdStatementsSecurity("quo", "deleniti") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadStatement2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsAccountIdStatementsStatementId

Get Statements by Account ID and Statement ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdStatementsStatementIdRequest req = new GetAccountsAccountIdStatementsStatementIdRequest("quibusdam", "iure", "odit") {{
                xCustomerUserAgent = "voluptatibus";
                xFapiAuthDate = "vel";
                xFapiCustomerIpAddress = "magnam";
                xFapiInteractionId = "quibusdam";
            }};            

            GetAccountsAccountIdStatementsStatementIdResponse res = sdk.statements.getAccountsAccountIdStatementsStatementId(req, new GetAccountsAccountIdStatementsStatementIdSecurity("inventore", "facere") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadStatement2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsAccountIdStatementsStatementIdFile

Get Statement PDF File by Account ID and Statement ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdFileRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdFileResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdStatementsStatementIdFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdStatementsStatementIdFileRequest req = new GetAccountsAccountIdStatementsStatementIdFileRequest("libero", "architecto", "voluptatibus") {{
                xCustomerUserAgent = "quia";
                xFapiAuthDate = "porro";
                xFapiCustomerIpAddress = "aliquam";
                xFapiInteractionId = "velit";
            }};            

            GetAccountsAccountIdStatementsStatementIdFileResponse res = sdk.statements.getAccountsAccountIdStatementsStatementIdFile(req, new GetAccountsAccountIdStatementsStatementIdFileSecurity("illo", "accusantium") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getAccountsAccountIdStatementsStatementIdFile200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
