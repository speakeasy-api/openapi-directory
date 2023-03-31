<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AnalyticsDataGaGetRequest(
    alt="json",
    dimensions="corrupti",
    end_date="provident",
    fields_="distinctio",
    filters="quibusdam",
    ids="unde",
    include_empty_rows=False,
    key="nulla",
    max_results=544883,
    metrics="illum",
    oauth_token="vel",
    output="json",
    pretty_print=False,
    quota_user="deserunt",
    sampling_level="FASTER",
    segment="iure",
    sort="magnam",
    start_date="debitis",
    start_index=56713,
    user_ip="delectus",
)
    
res = s.data.analytics_data_ga_get(req, operations.AnalyticsDataGaGetSecurity(
    option1=operations.AnalyticsDataGaGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.ga_data is not None:
    # handle response
```
<!-- End SDK Example Usage -->