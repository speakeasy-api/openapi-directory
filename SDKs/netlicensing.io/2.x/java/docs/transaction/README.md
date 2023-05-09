# transaction

## Overview

Transaction operations

Transaction Services
<https://netlicensing.io/wiki/transaction-services>
### Available Operations

* [createTransaction](#createtransaction) - Create Transaction
* [getTransaction](#gettransaction) - Get Transaction 
* [listTransactions](#listtransactions) - List Transactions
* [updateTransaction](#updatetransaction) - Update Transaction

## createTransaction

Creates a new Transaction

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTransactionRequestBody;
import org.openapis.openapi.models.operations.CreateTransactionRequestBodySourceEnum;
import org.openapis.openapi.models.operations.CreateTransactionRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CreateTransactionResponse;
import org.openapis.openapi.models.operations.CreateTransactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTransactionRequestBody req = new CreateTransactionRequestBody(false, CreateTransactionRequestBodySourceEnum.SHOP, CreateTransactionRequestBodyStatusEnum.CLOSED) {{
                dateClosed = OffsetDateTime.parse("2022-01-19T08:19:15.156Z");
                dateCreated = OffsetDateTime.parse("2022-07-13T09:38:30.777Z");
                licenseeNumber = "magnam";
                number = "distinctio";
                paymentMethod = "id";
            }};            

            CreateTransactionResponse res = sdk.transaction.createTransaction(req, new CreateTransactionSecurity("labore", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransaction

Return a Transaction by 'transactionNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionRequest;
import org.openapis.openapi.models.operations.GetTransactionResponse;
import org.openapis.openapi.models.operations.GetTransactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionRequest req = new GetTransactionRequest("suscipit");            

            GetTransactionResponse res = sdk.transaction.getTransaction(req, new GetTransactionSecurity("natus", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTransactions

Return a list of all Transactions for the current Vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTransactionsResponse;
import org.openapis.openapi.models.operations.ListTransactionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTransactionsResponse res = sdk.transaction.listTransactions(new ListTransactionsSecurity("eum", "vero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTransaction

Sets the provided properties to a Transaction. Return an updated Transaction

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTransactionRequest;
import org.openapis.openapi.models.operations.UpdateTransactionRequestBody;
import org.openapis.openapi.models.operations.UpdateTransactionRequestBodySourceEnum;
import org.openapis.openapi.models.operations.UpdateTransactionRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateTransactionResponse;
import org.openapis.openapi.models.operations.UpdateTransactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTransactionRequest req = new UpdateTransactionRequest("aspernatur") {{
                requestBody = new UpdateTransactionRequestBody() {{
                    active = false;
                    dateClosed = OffsetDateTime.parse("2022-09-14T03:02:47.808Z");
                    dateCreated = OffsetDateTime.parse("2022-06-06T23:06:26.119Z");
                    number = "ullam";
                    paymentMethod = "provident";
                    source = UpdateTransactionRequestBodySourceEnum.SHOP;
                    status = UpdateTransactionRequestBodyStatusEnum.CLOSED;
                }};;
            }};            

            UpdateTransactionResponse res = sdk.transaction.updateTransaction(req, new UpdateTransactionSecurity("sint", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
