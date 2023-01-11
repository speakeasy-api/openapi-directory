<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DisplayvideoMediaDownloadRequest(
    security=operations.DisplayvideoMediaDownloadSecurity(
        option1=operations.DisplayvideoMediaDownloadSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.DisplayvideoMediaDownloadPathParams(
        resource_name="ab",
    ),
    query_params=operations.DisplayvideoMediaDownloadQueryParams(
        dollar_xgafv="1",
        access_token="quia",
        alt="proto",
        callback="ad",
        fields="adipisci",
        key="deleniti",
        oauth_token="corrupti",
        pretty_print=False,
        quota_user="dolorem",
        upload_type="omnis",
        upload_protocol="qui",
    ),
)
    
res = s.media.displayvideo_media_download(req)

if res.google_bytestream_media is not None:
    # handle response
```
<!-- End SDK Example Usage -->