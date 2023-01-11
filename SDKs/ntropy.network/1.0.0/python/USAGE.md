<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetABatchOfConsumerTransactionClassificationResultsRequest(
    path_params=operations.GetABatchOfConsumerTransactionClassificationResultsPathParams(
        id="voluptate",
    ),
)
    
res = s.batch.get_a_batch_of_consumer_transaction_classification_results_(req)

if res.get_a_batch_of_consumer_transaction_classification_results_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->