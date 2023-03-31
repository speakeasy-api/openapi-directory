<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateEventNotificationRequest(
    request_body="corrupti",
    x_fapi_financial_id="provident",
    x_fapi_interaction_id="distinctio",
)
    
res = s.event_notification.create_event_notification(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->