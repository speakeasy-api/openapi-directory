<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAPIVVersionCurrenciesHistoryRequest(
    path_params=operations.GetAPIVVersionCurrenciesHistoryPathParams(
        version="ullam",
    ),
    query_params=operations.GetAPIVVersionCurrenciesHistoryQueryParams(
        end="1974-09-26T22:18:28Z",
        format="xml",
        interval="minus",
        pairs="nihil",
        start="2004-07-30T20:45:49Z",
        token="facilis",
    ),
)
    
res = s.currencies.get_api_v_version_currencies_history(req)

if res.interval_collection_responses is not None:
    # handle response
```
<!-- End SDK Example Usage -->