<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GenerateTokenV2RequestBody(
    assertion="SOME_ASSERTION_STRING",
    grant_type="urn:ietf:params:oauth:grant-type:jwt-bearer",
    refresh_token="SomeRefreshToken",
    scope="offline",
    valid_for=120,
)
    
res = s.authorization.generate_token_v2(req)

if res.generate_access_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->