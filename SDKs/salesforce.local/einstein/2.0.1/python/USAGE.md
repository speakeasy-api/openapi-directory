<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GenerateTokenV2Request(
    request=operations.GenerateTokenV2RequestBody(
        assertion="numquam",
        grant_type="refresh_token",
        refresh_token="tempora",
        scope="id",
        valid_for=4762912909714962691,
    ),
)
    
res = s.authorization.generate_token_v2(req)

if res.generate_access_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->