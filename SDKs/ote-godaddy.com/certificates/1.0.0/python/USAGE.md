<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CertificateActionRetrieveRequest(
    certificate_id="corrupti",
)
    
res = s.v1.certificate_action_retrieve(req)

if res.array_of_certificate_action is not None:
    # handle response
```
<!-- End SDK Example Usage -->