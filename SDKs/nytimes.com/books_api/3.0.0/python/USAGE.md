<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetListsBestSellersHistoryJSONRequest(
    security=operations.GetListsBestSellersHistoryJSONSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetListsBestSellersHistoryJSONQueryParams(
        age_group="dolores",
        author="autem",
        contributor="voluptates",
        isbn="qui",
        price="et",
        publisher="ut",
        title="consequuntur",
    ),
)
    
res = s.get_lists_best_sellers_history_json(req)

if res.get_lists_best_sellers_history_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->