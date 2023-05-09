# accounts

## Overview

Accounts represent the underlying store used to track balances
and the transactions that have occurred to modify those balances
over time. Up currently has two types of account: `SAVER`—used to
earn interest and to hit savings goals, and `TRANSACTIONAL`—used
for everyday spending.


### Available Operations

* [getAccounts](#getaccounts) - List accounts
* [getAccountsId](#getaccountsid) - Retrieve account

## getAccounts

Retrieve a paginated list of all accounts for the currently
authenticated user. The returned list is paginated and can be scrolled
by following the `prev` and `next` links where present.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountsResponse;
import org.openapis.openapi.models.shared.AccountTypeEnumEnum;
import org.openapis.openapi.models.shared.OwnershipTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetAccountsRequest req = new GetAccountsRequest() {{
                filterAccountType = AccountTypeEnumEnum.TRANSACTIONAL;
                filterOwnershipType = OwnershipTypeEnumEnum.JOINT;
                pageSize = 847252L;
            }};            

            GetAccountsResponse res = sdk.accounts.getAccounts(req);

            if (res.listAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsId

Retrieve a specific account by providing its unique identifier.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsIdRequest;
import org.openapis.openapi.models.operations.GetAccountsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetAccountsIdRequest req = new GetAccountsIdRequest("error");            

            GetAccountsIdResponse res = sdk.accounts.getAccountsId(req);

            if (res.getAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
