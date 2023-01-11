<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DisplayvideoAdvertisersAssetsUploadRequest(
    security=operations.DisplayvideoAdvertisersAssetsUploadSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DisplayvideoAdvertisersAssetsUploadPathParams(
        advertiser_id="fuga",
    ),
    query_params=operations.DisplayvideoAdvertisersAssetsUploadQueryParams(
        dollar_xgafv="1",
        access_token="libero",
        alt="json",
        callback="quibusdam",
        fields="explicabo",
        key="vel",
        oauth_token="earum",
        pretty_print=True,
        quota_user="voluptatem",
        upload_type="assumenda",
        upload_protocol="vitae",
    ),
    request="harum".encode(),
)
    
res = s.advertisers.displayvideo_advertisers_assets_upload(req)

if res.create_asset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->