<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        token="YOUR_API_KEY_HERE",
    ),
)


req = operations.CurrenciesHistoryGETRequest(
    end="2021-10-25T05:21:43.948Z",
    format="xml",
    interval="quibusdam",
    pairs="unde",
    start="2021-05-14T08:28:11.899Z",
)
    
res = s.currencies.currencies_history_get(req)

if res.interval_collection_responses is not None:
    # handle response
```
<!-- End SDK Example Usage -->