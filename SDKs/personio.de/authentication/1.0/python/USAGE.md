<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostAuthRequest(
    query_params=operations.PostAuthQueryParams(
        client_id="qui",
        client_secret="sapiente",
    ),
)
    
res = s.post_auth(req)

if res.authentication_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->