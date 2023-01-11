<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateEventNotificationRequest(
    headers=operations.CreateEventNotificationHeaders(
        x_fapi_financial_id="dolores",
        x_fapi_interaction_id="eum",
    ),
    request="autem",
)
    
res = s.event_notification.create_event_notification(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->