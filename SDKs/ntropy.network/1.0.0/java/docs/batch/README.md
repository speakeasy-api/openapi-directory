# batch

### Available Operations

* [getABatchOfConsumerTransactionClassificationResults](#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.

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

            GetABatchOfConsumerTransactionClassificationResultsResponse res = sdk.batch.getABatchOfConsumerTransactionClassificationResults(req);

            if (res.getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
