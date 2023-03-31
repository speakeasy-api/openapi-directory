<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DisplayvideoAdvertisersAssetsUploadRequest(
    dollar_xgafv="2",
    request_body="provident".encode(),
    access_token="distinctio",
    advertiser_id="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.advertisers.displayvideo_advertisers_assets_upload(req, operations.DisplayvideoAdvertisersAssetsUploadSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.create_asset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->