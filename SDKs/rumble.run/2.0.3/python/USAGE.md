<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAccountCredentialRequest(
    security=operations.CreateAccountCredentialSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    request=shared.CredentialOptions(
        acl={
            "ut": "voluptas",
            "quam": "expedita",
        },
        cidrs="possimus",
        global_=False,
        name="consequatur",
        secret={
            "sequi": "qui",
            "autem": "quia",
        },
        type="miradore_api_key_v1",
    ),
)
    
res = s.account.create_account_credential(req)

if res.credential is not None:
    # handle response
```
<!-- End SDK Example Usage -->