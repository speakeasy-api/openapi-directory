# batch1

### Available Operations

* [getABatchOfBusinessTransactionClassificationResults](#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.

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

            GetABatchOfBusinessTransactionClassificationResultsResponse res = sdk.batch1.getABatchOfBusinessTransactionClassificationResults(req);

            if (res.getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
