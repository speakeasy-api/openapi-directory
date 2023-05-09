# transactionsFindPaymentsAndRefunds

### Available Operations

* [deleteTransactionsTransactionId](#deletetransactionstransactionid) - Deleted a transaction
* [getTransactions](#gettransactions) - Returns a paginated list of transactions
* [getTransactionsTransactionId](#gettransactionstransactionid) - Returns a transaction
* [postTransactionsTransactionId](#posttransactionstransactionid) - Updates a transaction

## deleteTransactionsTransactionId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTransactionsTransactionIdRequest;
import org.openapis.openapi.models.operations.DeleteTransactionsTransactionIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteTransactionsTransactionIdRequest req = new DeleteTransactionsTransactionIdRequest("numquam");            

            DeleteTransactionsTransactionIdResponse res = sdk.transactionsFindPaymentsAndRefunds.deleteTransactionsTransactionId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactions

- Results are paginated and the default is value is 100 if no limit is provided


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "ipsa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetTransactionsRequest req = new GetTransactionsRequest() {{
                limit = 56418L;
                pageNumber = 434417L;
                query = "odio";
                sort = "quaerat";
            }};            

            GetTransactionsResponse res = sdk.transactionsFindPaymentsAndRefunds.getTransactions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionsTransactionId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsTransactionIdRequest;
import org.openapis.openapi.models.operations.GetTransactionsTransactionIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "quidem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetTransactionsTransactionIdRequest req = new GetTransactionsTransactionIdRequest("voluptatibus");            

            GetTransactionsTransactionIdResponse res = sdk.transactionsFindPaymentsAndRefunds.getTransactionsTransactionId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransactionsTransactionId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransactionsTransactionIdRequest;
import org.openapis.openapi.models.operations.PostTransactionsTransactionIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas", "natus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostTransactionsTransactionIdRequest req = new PostTransactionsTransactionIdRequest("eos") {{
                customData = "atque";
            }};            

            PostTransactionsTransactionIdResponse res = sdk.transactionsFindPaymentsAndRefunds.postTransactionsTransactionId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
