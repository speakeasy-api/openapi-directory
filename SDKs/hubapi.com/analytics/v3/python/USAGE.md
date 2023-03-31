<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.BehavioralEventHTTPCompletionRequest(
    email="Larue_Rau85@yahoo.com",
    event_name="corrupti",
    object_id="illum",
    occurred_at="2022-05-18T09:34:54.894Z",
    properties={
        "suscipit": "iure",
        "magnam": "debitis",
        "ipsa": "delectus",
    },
    utk="tempora",
)
    
res = s.behavioral_events_tracking.post_events_v3_send(req, operations.PostEventsV3SendSecurity(
    hapikey="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->