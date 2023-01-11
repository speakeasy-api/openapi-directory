<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudassetProjectsBatchGetAssetsHistoryRequest(
    security=operations.CloudassetProjectsBatchGetAssetsHistorySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudassetProjectsBatchGetAssetsHistoryPathParams(
        parent="consequatur",
    ),
    query_params=operations.CloudassetProjectsBatchGetAssetsHistoryQueryParams(
        dollar_xgafv="2",
        access_token="et",
        alt="media",
        asset_names=[
            "sunt",
            "voluptatem",
        ],
        callback="nobis",
        content_type="IAM_POLICY",
        fields="reprehenderit",
        key="vel",
        oauth_token="aut",
        pretty_print=False,
        quota_user="dignissimos",
        read_time_window_end_time="aut",
        read_time_window_start_time="maxime",
        upload_type="ea",
        upload_protocol="et",
    ),
)
    
res = s.projects.cloudasset_projects_batch_get_assets_history(req)

if res.batch_get_assets_history_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->