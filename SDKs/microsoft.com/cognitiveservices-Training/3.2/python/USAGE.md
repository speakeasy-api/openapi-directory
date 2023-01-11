<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apim_key=shared.SchemeApimKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetDomainRequest(
    path_params=operations.GetDomainPathParams(
        domain_id="optio",
    ),
)
    
res = s.domains_api.get_domain(req)

if res.domain is not None:
    # handle response
```
<!-- End SDK Example Usage -->