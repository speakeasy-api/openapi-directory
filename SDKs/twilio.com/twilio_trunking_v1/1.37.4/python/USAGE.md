<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateCredentialListRequest(
    security=operations.CreateCredentialListSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateCredentialListPathParams(
        trunk_sid="sed",
    ),
    request=operations.CreateCredentialListCreateCredentialListRequest(
        credential_list_sid="blanditiis",
    ),
)
    
res = s.create_credential_list(req)

if res.trunking_v1_trunk_credential_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->