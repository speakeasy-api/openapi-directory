<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AnalyticsadminAccountSummariesListRequest(
    security=operations.AnalyticsadminAccountSummariesListSecurity(
        option1=operations.AnalyticsadminAccountSummariesListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.AnalyticsadminAccountSummariesListQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="json",
        callback="vel",
        fields="quia",
        key="voluptatibus",
        oauth_token="beatae",
        page_size=3724472702297372290,
        page_token="sequi",
        pretty_print=False,
        quota_user="occaecati",
        upload_type="et",
        upload_protocol="in",
    ),
)
    
res = s.account_summaries.analyticsadmin_account_summaries_list(req)

if res.google_analytics_admin_v1beta_list_account_summaries_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->