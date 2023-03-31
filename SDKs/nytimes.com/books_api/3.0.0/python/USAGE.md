<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GETListsBestSellersHistoryJSONRequest(
    age_group="corrupti",
    author="provident",
    contributor="distinctio",
    isbn="quibusdam",
    price="unde",
    publisher="nulla",
    title="Ms.",
)
    
res = s.get_lists_best_sellers_history_json(req, operations.GETListsBestSellersHistoryJSONSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_lists_best_sellers_history_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->