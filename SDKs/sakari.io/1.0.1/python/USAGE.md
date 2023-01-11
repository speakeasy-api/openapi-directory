<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AuthTokenRequest(
    request=shared.TokenRequest(
        client_id="quis",
        client_secret="beatae",
        grant_type="eos",
    ),
)
    
res = s.authentication.auth_token(req)

if res.token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->