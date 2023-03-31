<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AnalyticsDataGetRequest(
    alt="atom",
    dimensions="corrupti",
    end_date="provident",
    fields_="distinctio",
    filters="quibusdam",
    ids="unde",
    key="nulla",
    max_results=544883,
    metrics="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    segment="deserunt",
    sort="suscipit",
    start_date="iure",
    start_index=297534,
    user_ip="debitis",
)
    
res = s.data.analytics_data_get(req, operations.AnalyticsDataGetSecurity(
    option1=operations.AnalyticsDataGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->