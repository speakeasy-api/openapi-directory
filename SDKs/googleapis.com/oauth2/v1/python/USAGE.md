<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.Oauth2TokeninfoRequest(
    query_params=operations.Oauth2TokeninfoQueryParams(
        access_token="doloribus",
        alt="json",
        fields="autem",
        id_token="adipisci",
        key="accusantium",
        oauth_token="ut",
        pretty_print=False,
        quota_user="quaerat",
        user_ip="et",
    ),
)
    
res = s.oauth2_tokeninfo(req)

if res.tokeninfo is not None:
    # handle response
```
<!-- End SDK Example Usage -->