<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CertificateActionRetrieveRequest(
    path_params=operations.CertificateActionRetrievePathParams(
        certificate_id="voluptatum",
    ),
)
    
res = s.v1.certificate_action_retrieve(req)

if res.array_of_certificate_action is not None:
    # handle response
```
<!-- End SDK Example Usage -->