<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateDocumentRequest(
    security=operations.CreateDocumentSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateDocumentPathParams(
        service_sid="pariatur",
    ),
    request=operations.CreateDocumentCreateDocumentRequest(
        data="quis",
        ttl=6521294580770293352,
        unique_name="nesciunt",
    ),
)
    
res = s.create_document(req)

if res.sync_v1_service_document is not None:
    # handle response
```
<!-- End SDK Example Usage -->