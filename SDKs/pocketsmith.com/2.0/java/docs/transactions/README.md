# transactions

### Available Operations

* [deleteTransactionsId](#deletetransactionsid) - Delete transaction
* [getAccountsIdTransactions](#getaccountsidtransactions) - List transactions in account
* [getCategoriesIdTransactions](#getcategoriesidtransactions) - List transactions in categories
* [getTransactionAccountsIdTransactions](#gettransactionaccountsidtransactions) - List transactions in transaction account
* [getTransactionsId](#gettransactionsid) - Get a transaction
* [getUsersIdTransactions](#getusersidtransactions) - List transactions in user
* [postTransactionAccountsIdTransactions](#posttransactionaccountsidtransactions) - Create a transaction in transaction account
* [putTransactionsId](#puttransactionsid) - Update a transaction

## deleteTransactionsId

Deletes a transaction and all its data by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTransactionsIdRequest;
import org.openapis.openapi.models.operations.DeleteTransactionsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTransactionsIdRequest req = new DeleteTransactionsIdRequest(979587L);            

            DeleteTransactionsIdResponse res = sdk.transactions.deleteTransactionsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsIdTransactions

Lists transactions belonging to an account by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsIdTransactionsRequest;
import org.openapis.openapi.models.operations.GetAccountsIdTransactionsResponse;
import org.openapis.openapi.models.operations.GetAccountsIdTransactionsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountsIdTransactionsRequest req = new GetAccountsIdTransactionsRequest(359444L) {{
                endDate = "dolore";
                needsReview = 480894L;
                page = 118727L;
                search = "harum";
                startDate = "enim";
                type = GetAccountsIdTransactionsTypeEnum.CREDIT;
                uncategorised = 414263L;
                updatedSince = "repudiandae";
            }};            

            GetAccountsIdTransactionsResponse res = sdk.transactions.getAccountsIdTransactions(req);

            if (res.transactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoriesIdTransactions

Lists transactions belonging to one or more categories by their IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesIdTransactionsRequest;
import org.openapis.openapi.models.operations.GetCategoriesIdTransactionsResponse;
import org.openapis.openapi.models.operations.GetCategoriesIdTransactionsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCategoriesIdTransactionsRequest req = new GetCategoriesIdTransactionsRequest("ipsum") {{
                endDate = "quidem";
                needsReview = 565189L;
                page = 566602L;
                search = "pariatur";
                startDate = "modi";
                type = GetCategoriesIdTransactionsTypeEnum.CREDIT;
                uncategorised = 523248L;
                updatedSince = "voluptates";
            }};            

            GetCategoriesIdTransactionsResponse res = sdk.transactions.getCategoriesIdTransactions(req);

            if (res.transactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionAccountsIdTransactions

Lists transactions belonging to a transaction account by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionAccountsIdTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionAccountsIdTransactionsResponse;
import org.openapis.openapi.models.operations.GetTransactionAccountsIdTransactionsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionAccountsIdTransactionsRequest req = new GetTransactionAccountsIdTransactionsRequest(921158L) {{
                endDate = "sint";
                needsReview = 83112L;
                page = 929297L;
                search = "incidunt";
                startDate = "enim";
                type = GetTransactionAccountsIdTransactionsTypeEnum.DEBIT;
                uncategorised = 667411L;
                updatedSince = "quibusdam";
            }};            

            GetTransactionAccountsIdTransactionsResponse res = sdk.transactions.getTransactionAccountsIdTransactions(req);

            if (res.transactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionsId

Gets a transaction by its ID.

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
                .setSecurity(new Security("explicabo") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionsIdRequest req = new GetTransactionsIdRequest(647174L);            

            GetTransactionsIdResponse res = sdk.transactions.getTransactionsId(req);

            if (res.transaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdTransactions

Lists transactions belonging to a user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdTransactionsRequest;
import org.openapis.openapi.models.operations.GetUsersIdTransactionsResponse;
import org.openapis.openapi.models.operations.GetUsersIdTransactionsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdTransactionsRequest req = new GetUsersIdTransactionsRequest(841386L) {{
                endDate = "labore";
                needsReview = 264730L;
                page = 183191L;
                search = "aliquid";
                startDate = "cupiditate";
                type = GetUsersIdTransactionsTypeEnum.CREDIT;
                uncategorised = 20107L;
                updatedSince = "magni";
            }};            

            GetUsersIdTransactionsResponse res = sdk.transactions.getUsersIdTransactions(req);

            if (res.transactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransactionAccountsIdTransactions

Creates a transaction in a transaction account by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransactionAccountsIdTransactionsRequest;
import org.openapis.openapi.models.operations.PostTransactionAccountsIdTransactionsRequestBody;
import org.openapis.openapi.models.operations.PostTransactionAccountsIdTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTransactionAccountsIdTransactionsRequest req = new PostTransactionAccountsIdTransactionsRequest(369808L) {{
                requestBody = new PostTransactionAccountsIdTransactionsRequestBody(11.5, "2018-02-27", "Tex Otago") {{
                    categoryId = 42L;
                    chequeNumber = "alias";
                    isTransfer = false;
                    labels = "lunch,mexican";
                    memo = "fugit";
                    needsReview = false;
                    note = "I really enjoyed the loaded corn chips";
                }};;
            }};            

            PostTransactionAccountsIdTransactionsResponse res = sdk.transactions.postTransactionAccountsIdTransactions(req);

            if (res.transaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTransactionsId

Updates a transaction by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTransactionsIdRequest;
import org.openapis.openapi.models.operations.PutTransactionsIdRequestBody;
import org.openapis.openapi.models.operations.PutTransactionsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutTransactionsIdRequest req = new PutTransactionsIdRequest(569618L) {{
                requestBody = new PutTransactionsIdRequestBody() {{
                    amount = 225;
                    categoryId = 42L;
                    chequeNumber = "503113643691";
                    date = "2018-02-27";
                    isTransfer = false;
                    labels = "foo,bar,baz";
                    memo = "Rent";
                    needsReview = false;
                    note = "tempora";
                    payee = "Bill";
                }};;
            }};            

            PutTransactionsIdResponse res = sdk.transactions.putTransactionsId(req);

            if (res.transaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
