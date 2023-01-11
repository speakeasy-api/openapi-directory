<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AnalyticsDataGetRequest(
    security=operations.AnalyticsDataGetSecurity(
        option1=operations.AnalyticsDataGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.AnalyticsDataGetQueryParams(
        alt="atom",
        dimensions="nam",
        end_date="et",
        fields="molestiae",
        filters="qui",
        ids="sit",
        key="et",
        max_results=1727979121818110814,
        metrics="nemo",
        oauth_token="facere",
        pretty_print=False,
        quota_user="repellat",
        segment="accusantium",
        sort="excepturi",
        start_date="consequuntur",
        start_index=6545082317487046118,
        user_ip="delectus",
    ),
)
    
res = s.data.analytics_data_get(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->