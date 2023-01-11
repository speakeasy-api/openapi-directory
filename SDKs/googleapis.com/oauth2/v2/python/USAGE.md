<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.Oauth2TokeninfoRequest(
    query_params=operations.Oauth2TokeninfoQueryParams(
        access_token="iusto",
        alt="json",
        fields="repudiandae",
        id_token="dignissimos",
        key="consequatur",
        oauth_token="in",
        pretty_print=False,
        quota_user="accusamus",
        user_ip="iste",
    ),
)
    
res = s.oauth2_tokeninfo(req)

if res.tokeninfo is not None:
    # handle response
```
<!-- End SDK Example Usage -->