<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AnalyticsRequest(
    query_params=operations.AnalyticsQueryParams(
        end="id",
        group_by="label",
        label="quia",
        start="amet",
        subaccounts="omnis",
    ),
)
    
res = s.analytics.analytics(req)

if res.analytics_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->