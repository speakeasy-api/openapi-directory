<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)

    
res = s.health.get_utility_v1_health_heartbeat()

if res.get_utility_v1_health_heartbeat_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->