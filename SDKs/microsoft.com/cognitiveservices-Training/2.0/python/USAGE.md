<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetDomainRequest(
    training_key="corrupti",
    domain_id="9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
)
    
res = s.domains_api.get_domain(req)

if res.domain is not None:
    # handle response
```
<!-- End SDK Example Usage -->