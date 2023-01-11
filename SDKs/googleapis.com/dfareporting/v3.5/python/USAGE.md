<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DfareportingAccountActiveAdSummariesGetRequest(
    security=operations.DfareportingAccountActiveAdSummariesGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DfareportingAccountActiveAdSummariesGetPathParams(
        profile_id="qui",
        summary_account_id="ipsum",
    ),
    query_params=operations.DfareportingAccountActiveAdSummariesGetQueryParams(
        dollar_xgafv="2",
        access_token="quia",
        alt="media",
        callback="qui",
        fields="facere",
        key="est",
        oauth_token="necessitatibus",
        pretty_print=False,
        quota_user="aut",
        upload_type="laborum",
        upload_protocol="sunt",
    ),
)
    
res = s.account_active_ad_summaries.dfareporting_account_active_ad_summaries_get(req)

if res.account_active_ad_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->