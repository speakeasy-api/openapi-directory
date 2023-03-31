<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudassetAssetsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    asset_types=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
    callback="vel",
    content_type="ACCESS_POLICY",
    fields_="deserunt",
    key="suscipit",
    oauth_token="iure",
    page_size=297534,
    page_token="debitis",
    parent="ipsa",
    pretty_print=False,
    quota_user="delectus",
    read_time="tempora",
    relationship_types=[
        "molestiae",
        "minus",
    ],
    upload_type="placeat",
    upload_protocol="voluptatum",
)
    
res = s.assets.cloudasset_assets_list(req, operations.CloudassetAssetsListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_assets_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->