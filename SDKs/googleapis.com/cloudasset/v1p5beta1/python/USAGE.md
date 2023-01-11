<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudassetAssetsListRequest(
    security=operations.CloudassetAssetsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudassetAssetsListPathParams(
        parent="occaecati",
    ),
    query_params=operations.CloudassetAssetsListQueryParams(
        dollar_xgafv="2",
        access_token="rerum",
        alt="json",
        asset_types=[
            "enim",
            "voluptas",
        ],
        callback="voluptas",
        content_type="RESOURCE",
        fields="atque",
        key="dolores",
        oauth_token="optio",
        page_size=2232215791667708434,
        page_token="aut",
        pretty_print=True,
        quota_user="totam",
        read_time="ut",
        upload_type="et",
        upload_protocol="et",
    ),
)
    
res = s.assets.cloudasset_assets_list(req)

if res.list_assets_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->