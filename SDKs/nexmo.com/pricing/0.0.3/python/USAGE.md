<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RetrievePrefixPricingRequest(
    api_key="corrupti",
    api_secret="provident",
    prefix="distinctio",
    type="quibusdam",
)
    
res = s.pricing.retrieve_prefix_pricing(req)

if res.pricing_countries_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->