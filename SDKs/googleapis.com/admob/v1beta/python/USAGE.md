<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdmobAccountsAdSourcesListRequest(
    path_params=operations.AdmobAccountsAdSourcesListPathParams(
        parent="temporibus",
    ),
    query_params=operations.AdmobAccountsAdSourcesListQueryParams(
        dollar_xgafv="2",
        access_token="tenetur",
        alt="proto",
        callback="officiis",
        fields="optio",
        key="tenetur",
        oauth_token="molestiae",
        page_size=4341844419008172106,
        page_token="sint",
        pretty_print=False,
        quota_user="exercitationem",
        upload_type="quia",
        upload_protocol="est",
    ),
)
    
res = s.accounts.admob_accounts_ad_sources_list(req)

if res.list_ad_sources_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->