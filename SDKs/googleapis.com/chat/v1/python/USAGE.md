<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ChatMediaDownloadRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    quota_user="illum",
    resource_name="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.media.chat_media_download(req, operations.ChatMediaDownloadSecurity(
    option1=operations.ChatMediaDownloadSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.media is not None:
    # handle response
```
<!-- End SDK Example Usage -->