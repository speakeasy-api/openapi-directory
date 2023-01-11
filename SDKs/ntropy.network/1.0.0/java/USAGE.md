<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetABatchOfConsumerTransactionClassificationResultsRequest req = new GetABatchOfConsumerTransactionClassificationResultsRequest() {{
                pathParams = new GetABatchOfConsumerTransactionClassificationResultsPathParams() {{
                    id = "et";
                }};
            }};

            GetABatchOfConsumerTransactionClassificationResultsResponse res = sdk.batch.getABatchOfConsumerTransactionClassificationResults(req);

            if (res.getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->