<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ThreeGetEstimatedPriceRequest(
    query_params=operations.ThreeGetEstimatedPriceQueryParams(
        amount="deserunt",
        currency_from="et",
        currency_to="fugit",
    ),
)
    
res = s.three_get_estimated_price(req)

if res.three_get_estimated_price_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->