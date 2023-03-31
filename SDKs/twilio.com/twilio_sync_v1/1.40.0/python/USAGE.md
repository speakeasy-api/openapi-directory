<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateDocumentRequest(
    request_body=operations.CreateDocumentCreateDocumentRequest(
        data="corrupti",
        ttl=592845,
        unique_name="distinctio",
    ),
    service_sid="quibusdam",
)
    
res = s.create_document(req, operations.CreateDocumentSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.sync_v1_service_document is not None:
    # handle response
```
<!-- End SDK Example Usage -->