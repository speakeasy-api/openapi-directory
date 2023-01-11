<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AnalyticsDataGaGetRequest(
    security=operations.AnalyticsDataGaGetSecurity(
        option1=operations.AnalyticsDataGaGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.AnalyticsDataGaGetQueryParams(
        alt="json",
        dimensions="expedita",
        end_date="necessitatibus",
        fields="eveniet",
        filters="omnis",
        ids="nulla",
        include_empty_rows=False,
        key="occaecati",
        max_results=2708896409316756384,
        metrics="similique",
        oauth_token="eum",
        output="dataTable",
        pretty_print=True,
        quota_user="id",
        sampling_level="DEFAULT",
        segment="veniam",
        sort="ea",
        start_date="omnis",
        start_index=4655524701577144768,
        user_ip="ipsum",
    ),
)
    
res = s.data.analytics_data_ga_get(req)

if res.ga_data is not None:
    # handle response
```
<!-- End SDK Example Usage -->