<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DfareportingAccountActiveAdSummariesGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    profile_id="illum",
    quota_user="vel",
    summary_account_id="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.account_active_ad_summaries.dfareporting_account_active_ad_summaries_get(req, operations.DfareportingAccountActiveAdSummariesGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.account_active_ad_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->