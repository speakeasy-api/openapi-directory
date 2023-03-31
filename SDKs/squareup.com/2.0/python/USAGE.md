<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.RegisterDomainRequest(
    domain_name="corrupti",
)
    
res = s.apple_pay.register_domain(req, operations.RegisterDomainSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.register_domain_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->