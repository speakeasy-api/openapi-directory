<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetOauthV1AccessTokensTokenGetAccessTokenRequest(
    path_params=operations.GetOauthV1AccessTokensTokenGetAccessTokenPathParams(
        token="recusandae",
    ),
)
    
res = s.access_tokens.get_oauth_v1_access_tokens_token_get_access_token(req)

if res.access_token_info_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->