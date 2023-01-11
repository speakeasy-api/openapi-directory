<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PolyAssetsGetRequest(
    path_params=operations.PolyAssetsGetPathParams(
        name="autem",
    ),
    query_params=operations.PolyAssetsGetQueryParams(
        dollar_xgafv="2",
        access_token="dolores",
        alt="json",
        callback="eum",
        fields="facere",
        key="vitae",
        oauth_token="pariatur",
        pretty_print=False,
        quota_user="aspernatur",
        upload_type="reiciendis",
        upload_protocol="velit",
    ),
)
    
res = s.assets.poly_assets_get(req)

if res.asset is not None:
    # handle response
```
<!-- End SDK Example Usage -->