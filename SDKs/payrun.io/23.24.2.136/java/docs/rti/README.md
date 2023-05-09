# rti

### Available Operations

* [deleteRtiTransaction](#deletertitransaction) - Delete the RTI transaction
* [getAllRtiTransactionTags](#getallrtitransactiontags) - Get all RTI transaction tags
* [getRtiTransactionFromEmployer](#getrtitransactionfromemployer) - Get the RTI transaction
* [getRtiTransactionSummariesFromEmployer](#getrtitransactionsummariesfromemployer) - Get all RTI transaction summaries for the employer
* [getRtiTransactionSummaryFromEmployer](#getrtitransactionsummaryfromemployer) - Get the RTI transaction summary
* [getRtiTransactionsFromEmployer](#getrtitransactionsfromemployer) - Get all RTI transactions for the employer
* [getRtiTransactionsWithTag](#getrtitransactionswithtag) - Get RTI transactions with tag

## deleteRtiTransaction

Deletes the specified RTI transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRtiTransactionRequest;
import org.openapis.openapi.models.operations.DeleteRtiTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRtiTransactionRequest req = new DeleteRtiTransactionRequest("veritatis", "quae", "eaque", "saepe");            

            DeleteRtiTransactionResponse res = sdk.rti.deleteRtiTransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllRtiTransactionTags

Gets all the RTI transaction tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllRtiTransactionTagsRequest;
import org.openapis.openapi.models.operations.GetAllRtiTransactionTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllRtiTransactionTagsRequest req = new GetAllRtiTransactionTagsRequest("delectus", "mollitia", "nulla");            

            GetAllRtiTransactionTagsResponse res = sdk.rti.getAllRtiTransactionTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiTransactionFromEmployer

Returns the specified RTI transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiTransactionFromEmployerRequest;
import org.openapis.openapi.models.operations.GetRtiTransactionFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiTransactionFromEmployerRequest req = new GetRtiTransactionFromEmployerRequest("officia", "sed", "voluptatem", "alias");            

            GetRtiTransactionFromEmployerResponse res = sdk.rti.getRtiTransactionFromEmployer(req);

            if (res.rtiTransactionBase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiTransactionSummariesFromEmployer

Get links for all RTI transaction summaries for the specified employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiTransactionSummariesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetRtiTransactionSummariesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiTransactionSummariesFromEmployerRequest req = new GetRtiTransactionSummariesFromEmployerRequest("eveniet", "hic", "voluptatem");            

            GetRtiTransactionSummariesFromEmployerResponse res = sdk.rti.getRtiTransactionSummariesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiTransactionSummaryFromEmployer

Returns the specified RTI transaction summary data excluding some poroperties

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiTransactionSummaryFromEmployerRequest;
import org.openapis.openapi.models.operations.GetRtiTransactionSummaryFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiTransactionSummaryFromEmployerRequest req = new GetRtiTransactionSummaryFromEmployerRequest("incidunt", "qui", "qui", "necessitatibus");            

            GetRtiTransactionSummaryFromEmployerResponse res = sdk.rti.getRtiTransactionSummaryFromEmployer(req);

            if (res.rtiTransactionBase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiTransactionsFromEmployer

Get links for all RTI transactions for the specified employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiTransactionsFromEmployerRequest;
import org.openapis.openapi.models.operations.GetRtiTransactionsFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiTransactionsFromEmployerRequest req = new GetRtiTransactionsFromEmployerRequest("harum", "explicabo", "beatae");            

            GetRtiTransactionsFromEmployerResponse res = sdk.rti.getRtiTransactionsFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiTransactionsWithTag

Gets the RTI transactions with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiTransactionsWithTagRequest;
import org.openapis.openapi.models.operations.GetRtiTransactionsWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiTransactionsWithTagRequest req = new GetRtiTransactionsWithTagRequest("aliquid", "modi", "optio", "voluptatibus");            

            GetRtiTransactionsWithTagResponse res = sdk.rti.getRtiTransactionsWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
