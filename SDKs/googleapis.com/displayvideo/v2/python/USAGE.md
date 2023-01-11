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
        advertiser_id="et",
    ),
    query_params=operations.DisplayvideoAdvertisersAssetsUploadQueryParams(
        dollar_xgafv="2",
        access_token="rerum",
        alt="json",
        callback="aut",
        fields="asperiores",
        key="ea",
        oauth_token="quam",
        pretty_print=True,
        quota_user="consequatur",
        upload_type="et",
        upload_protocol="natus",
    ),
    request="corrupti".encode(),
)
    
res = s.advertisers.displayvideo_advertisers_assets_upload(req)

if res.create_asset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->