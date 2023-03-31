<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchAlertRequest(
    sid="corrupti",
)
    
res = s.fetch_alert(req, operations.FetchAlertSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.monitor_v1_alert_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->