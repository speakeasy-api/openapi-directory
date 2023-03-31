<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.Oauth2TokeninfoRequest(
    access_token="corrupti",
    alt="json",
    fields_="provident",
    id_token="distinctio",
    key="quibusdam",
    oauth_token="unde",
    pretty_print=False,
    quota_user="nulla",
    user_ip="corrupti",
)
    
res = s.oauth2_tokeninfo(req)

if res.tokeninfo is not None:
    # handle response
```
<!-- End SDK Example Usage -->