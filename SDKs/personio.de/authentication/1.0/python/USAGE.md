<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PostAuthRequest(
    client_id="corrupti",
    client_secret="provident",
)
    
res = s.post_auth(req)

if res.authentication_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->