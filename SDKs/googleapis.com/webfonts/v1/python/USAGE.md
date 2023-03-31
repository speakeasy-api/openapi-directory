<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WebfontsWebfontsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    quota_user="illum",
    sort="DATE",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.webfonts.webfonts_webfonts_list(req)

if res.webfont_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->