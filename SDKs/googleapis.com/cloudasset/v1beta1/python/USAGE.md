<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudassetProjectsBatchGetAssetsHistoryRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    asset_names=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
    callback="vel",
    content_type="RESOURCE",
    fields_="deserunt",
    key="suscipit",
    oauth_token="iure",
    parent="magnam",
    pretty_print=False,
    quota_user="debitis",
    read_time_window_end_time="ipsa",
    read_time_window_start_time="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.projects.cloudasset_projects_batch_get_assets_history(req, operations.CloudassetProjectsBatchGetAssetsHistorySecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.batch_get_assets_history_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->