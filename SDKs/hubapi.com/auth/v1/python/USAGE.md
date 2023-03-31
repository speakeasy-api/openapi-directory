<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetOauthV1AccessTokensTokenGetRequest(
    token="corrupti",
)
    
res = s.access_tokens.get_oauth_v1_access_tokens_token_get(req)

if res.access_token_info_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->