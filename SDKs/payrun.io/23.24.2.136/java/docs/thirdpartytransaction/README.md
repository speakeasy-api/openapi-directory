# thirdPartyTransaction

### Available Operations

* [deleteThirdPartyTransactionTag](#deletethirdpartytransactiontag) - Delete third party transaction tag
* [getAllThirdPartyTransactionTags](#getallthirdpartytransactiontags) - Get all third party transaction tags
* [getAllThirdPartyTransactionsWithTag](#getallthirdpartytransactionswithtag) - Get links to tagged third party transactions
* [getTagFromThirdPartyTransaction](#gettagfromthirdpartytransaction) - Get third party transaction tag
* [getTagsFromThirdPartyTransaction](#gettagsfromthirdpartytransaction) - Get tags from third party transaction
* [putThirdPartyTransactionTag](#putthirdpartytransactiontag) - insert third party transaction tag

## deleteThirdPartyTransactionTag

Deletes a tag from the third party transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteThirdPartyTransactionTagRequest;
import org.openapis.openapi.models.operations.DeleteThirdPartyTransactionTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteThirdPartyTransactionTagRequest req = new DeleteThirdPartyTransactionTagRequest("quam", "atque", "officia", "ex", "architecto");            

            DeleteThirdPartyTransactionTagResponse res = sdk.thirdPartyTransaction.deleteThirdPartyTransactionTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllThirdPartyTransactionTags

Gets all the third party transaction tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllThirdPartyTransactionTagsRequest;
import org.openapis.openapi.models.operations.GetAllThirdPartyTransactionTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllThirdPartyTransactionTagsRequest req = new GetAllThirdPartyTransactionTagsRequest("a", "laborum", "veritatis");            

            GetAllThirdPartyTransactionTagsResponse res = sdk.thirdPartyTransaction.getAllThirdPartyTransactionTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllThirdPartyTransactionsWithTag

Gets the third party transactions with the specified tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllThirdPartyTransactionsWithTagRequest;
import org.openapis.openapi.models.operations.GetAllThirdPartyTransactionsWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllThirdPartyTransactionsWithTagRequest req = new GetAllThirdPartyTransactionsWithTagRequest("quod", "a", "qui", "accusantium");            

            GetAllThirdPartyTransactionsWithTagResponse res = sdk.thirdPartyTransaction.getAllThirdPartyTransactionsWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromThirdPartyTransaction

Gets a tag from the third party transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromThirdPartyTransactionRequest;
import org.openapis.openapi.models.operations.GetTagFromThirdPartyTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromThirdPartyTransactionRequest req = new GetTagFromThirdPartyTransactionRequest("commodi", "atque", "totam", "tenetur", "voluptate");            

            GetTagFromThirdPartyTransactionResponse res = sdk.thirdPartyTransaction.getTagFromThirdPartyTransaction(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromThirdPartyTransaction

Gets all tags from the third party transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromThirdPartyTransactionRequest;
import org.openapis.openapi.models.operations.GetTagsFromThirdPartyTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromThirdPartyTransactionRequest req = new GetTagsFromThirdPartyTransactionRequest("quam", "quod", "vitae", "sapiente");            

            GetTagsFromThirdPartyTransactionResponse res = sdk.thirdPartyTransaction.getTagsFromThirdPartyTransaction(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putThirdPartyTransactionTag

Inserts a tag on the third party transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutThirdPartyTransactionTagRequest;
import org.openapis.openapi.models.operations.PutThirdPartyTransactionTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutThirdPartyTransactionTagRequest req = new PutThirdPartyTransactionTagRequest("reiciendis", "quod", "voluptate", "inventore", "facere");            

            PutThirdPartyTransactionTagResponse res = sdk.thirdPartyTransaction.putThirdPartyTransactionTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
