# transactions

## Overview

Transactions represent the movement of money into and out of an
account. They have many characteristics that vary depending on
the kind of transaction. Transactions may be temporarily `HELD`
(pending) or `SETTLED`, typically depending on which payment
method was used at the point of sale.


### Available Operations

* [getAccountsAccountIdTransactions](#getaccountsaccountidtransactions) - List transactions by account
* [getTransactions](#gettransactions) - List transactions
* [getTransactionsId](#gettransactionsid) - Retrieve transaction

## getAccountsAccountIdTransactions

Retrieve a list of all transactions for a specific account. The returned
list is [paginated](#pagination) and can be scrolled by following the
`next` and `prev` links where present. To narrow the results to a
specific date range pass one or both of `filter[since]` and
`filter[until]` in the query string. These filter parameters
**should not** be used for pagination. Results are ordered newest first
to oldest last.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdTransactionsRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdTransactionsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionStatusEnumEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetAccountsAccountIdTransactionsRequest req = new GetAccountsAccountIdTransactionsRequest("quibusdam") {{
                filterCategory = "sed";
                filterSince = OffsetDateTime.parse("2020-05-25T09:38:49.528Z");
                filterStatus = TransactionStatusEnumEnum.HELD;
                filterTag = "consequuntur";
                filterUntil = OffsetDateTime.parse("2021-10-08T15:23:46.576Z");
                pageSize = 166847L;
            }};            

            GetAccountsAccountIdTransactionsResponse res = sdk.transactions.getAccountsAccountIdTransactions(req);

            if (res.listTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactions

Retrieve a list of all transactions across all accounts for the currently
authenticated user. The returned list is [paginated](#pagination) and can
be scrolled by following the `next` and `prev` links where present. To
narrow the results to a specific date range pass one or both of
`filter[since]` and `filter[until]` in the query string. These filter
parameters **should not** be used for pagination. Results are ordered
newest first to oldest last.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionStatusEnumEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTransactionsRequest req = new GetTransactionsRequest() {{
                filterCategory = "quo";
                filterSince = OffsetDateTime.parse("2020-05-28T21:33:10.895Z");
                filterStatus = TransactionStatusEnumEnum.SETTLED;
                filterTag = "ea";
                filterUntil = OffsetDateTime.parse("2022-09-20T19:40:48.375Z");
                pageSize = 407183L;
            }};            

            GetTransactionsResponse res = sdk.transactions.getTransactions(req);

            if (res.listTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionsId

Retrieve a specific transaction by providing its unique identifier.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsIdRequest;
import org.openapis.openapi.models.operations.GetTransactionsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTransactionsIdRequest req = new GetTransactionsIdRequest("ab");            

            GetTransactionsIdResponse res = sdk.transactions.getTransactionsId(req);

            if (res.getTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
