<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RetrievePrefixPricingRequest(
    path_params=operations.RetrievePrefixPricingPathParams(
        type="ab",
    ),
    query_params=operations.RetrievePrefixPricingQueryParams(
        api_key="illo",
        api_secret="exercitationem",
        prefix="id",
    ),
)
    
res = s.pricing.retrieve_prefix_pricing(req)

if res.pricing_countries_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->