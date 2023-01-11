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
        profile_id="ut",
        summary_account_id="et",
    ),
    query_params=operations.DfareportingAccountActiveAdSummariesGetQueryParams(
        dollar_xgafv="2",
        access_token="veritatis",
        alt="media",
        callback="natus",
        fields="voluptates",
        key="aspernatur",
        oauth_token="vitae",
        pretty_print=True,
        quota_user="voluptas",
        upload_type="libero",
        upload_protocol="non",
    ),
)
    
res = s.account_active_ad_summaries.dfareporting_account_active_ad_summaries_get(req)

if res.account_active_ad_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->