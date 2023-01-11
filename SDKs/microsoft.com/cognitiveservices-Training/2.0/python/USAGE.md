<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetDomainRequest(
    path_params=operations.GetDomainPathParams(
        domain_id="et",
    ),
    headers=operations.GetDomainHeaders(
        training_key="mollitia",
    ),
)
    
res = s.domains_api.get_domain(req)

if res.domain is not None:
    # handle response
```
<!-- End SDK Example Usage -->