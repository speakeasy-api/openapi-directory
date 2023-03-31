<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_auth="YOUR_API_KEY_HERE",
    ),
)


req = operations.AnalyticsRequest(
    end="corrupti",
    group_by="subaccount",
    label="distinctio",
    start="quibusdam",
    subaccounts="unde",
)
    
res = s.analytics.analytics(req)

if res.analytics_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->