# classifier

### Available Operations

* [getABatchOfBusinessTransactionClassificationResults](#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.
* [getABatchOfConsumerTransactionClassificationResults](#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.

## getABatchOfBusinessTransactionClassificationResults

Get a batch of business transaction classification results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetABatchOfBusinessTransactionClassificationResultsRequest;
import org.openapis.openapi.models.operations.GetABatchOfBusinessTransactionClassificationResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetABatchOfBusinessTransactionClassificationResultsRequest req = new GetABatchOfBusinessTransactionClassificationResultsRequest("247ee045-3d04-4b3c-872b-a9160b810f33");            

            GetABatchOfBusinessTransactionClassificationResultsResponse res = sdk.classifier.getABatchOfBusinessTransactionClassificationResults(req);

            if (res.getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getABatchOfConsumerTransactionClassificationResults

Get a batch of consumer transaction classification results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetABatchOfConsumerTransactionClassificationResultsRequest;
import org.openapis.openapi.models.operations.GetABatchOfConsumerTransactionClassificationResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetABatchOfConsumerTransactionClassificationResultsRequest req = new GetABatchOfConsumerTransactionClassificationResultsRequest("247ee045-3d04-4b3c-872b-a9160b810f33");            

            GetABatchOfConsumerTransactionClassificationResultsResponse res = sdk.classifier.getABatchOfConsumerTransactionClassificationResults(req);

            if (res.getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
