<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AnalyticsadminAccountSummariesListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    page_size=847252,
    page_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.account_summaries.analyticsadmin_account_summaries_list(req, operations.AnalyticsadminAccountSummariesListSecurity(
    option1=operations.AnalyticsadminAccountSummariesListSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_analytics_admin_v1alpha_list_account_summaries_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->