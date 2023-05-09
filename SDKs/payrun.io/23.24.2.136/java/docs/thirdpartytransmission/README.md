# thirdPartyTransmission

### Available Operations

* [deleteThirdPartyTransaction](#deletethirdpartytransaction) - Delete third party transaction
* [getThirdPartyTransaction](#getthirdpartytransaction) - Get a third party transaction
* [getThirdPartyTransactions](#getthirdpartytransactions) - Get all third party transaction links

## deleteThirdPartyTransaction

Deletes a third party transaction record from the given resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteThirdPartyTransactionRequest;
import org.openapis.openapi.models.operations.DeleteThirdPartyTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteThirdPartyTransactionRequest req = new DeleteThirdPartyTransactionRequest("maxime", "fuga", "ab", "ex");            

            DeleteThirdPartyTransactionResponse res = sdk.thirdPartyTransmission.deleteThirdPartyTransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThirdPartyTransaction

Get a third party transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThirdPartyTransactionRequest;
import org.openapis.openapi.models.operations.GetThirdPartyTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetThirdPartyTransactionRequest req = new GetThirdPartyTransactionRequest("consectetur", "maiores", "sed", "animi");            

            GetThirdPartyTransactionResponse res = sdk.thirdPartyTransmission.getThirdPartyTransaction(req);

            if (res.thirdPartyTransaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThirdPartyTransactions

Get all third party transaction links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThirdPartyTransactionsRequest;
import org.openapis.openapi.models.operations.GetThirdPartyTransactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetThirdPartyTransactionsRequest req = new GetThirdPartyTransactionsRequest("sequi", "eligendi", "voluptatum");            

            GetThirdPartyTransactionsResponse res = sdk.thirdPartyTransmission.getThirdPartyTransactions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
