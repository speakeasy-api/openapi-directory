<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.TokenRequest(
    client_id="00000000-0000-0000-0000-00000000000",
    client_secret="00000000-0000-0000-0000-00000000000",
    grant_type="client_credentials",
)
    
res = s.authentication.auth_token(req)

if res.token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->