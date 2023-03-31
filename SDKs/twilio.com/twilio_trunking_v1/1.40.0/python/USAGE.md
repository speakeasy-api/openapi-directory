<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateCredentialListRequest(
    request_body=operations.CreateCredentialListCreateCredentialListRequest(
        credential_list_sid="corrupti",
    ),
    trunk_sid="provident",
)
    
res = s.create_credential_list(req, operations.CreateCredentialListSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.trunking_v1_trunk_credential_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->