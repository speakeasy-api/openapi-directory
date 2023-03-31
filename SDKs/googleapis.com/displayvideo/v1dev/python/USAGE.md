<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DisplayvideoMediaDownloadRequest(
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
    
res = s.media.displayvideo_media_download(req, operations.DisplayvideoMediaDownloadSecurity(
    option1=operations.DisplayvideoMediaDownloadSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_bytestream_media is not None:
    # handle response
```
<!-- End SDK Example Usage -->