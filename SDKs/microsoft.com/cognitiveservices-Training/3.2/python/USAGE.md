<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apim_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetDomainRequest(
    domain_id="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
)
    
res = s.domains_api.get_domain(req)

if res.domain is not None:
    # handle response
```
<!-- End SDK Example Usage -->