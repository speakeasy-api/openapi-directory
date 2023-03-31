<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetABatchOfConsumerTransactionClassificationResultsRequest(
    id="247ee045-3d04-4b3c-872b-a9160b810f33",
)
    
res = s.batch.get_a_batch_of_consumer_transaction_classification_results(req)

if res.get_a_batch_of_consumer_transaction_classification_results_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->