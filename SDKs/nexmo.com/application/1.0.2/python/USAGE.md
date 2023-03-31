<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateApplicationRequestBody(
    answer_method="GET",
    answer_url="https://example.com/webhooks/answer",
    api_key="ap1k3y",
    api_secret="230e6cf0709417176df1b4fc1e083adc",
    event_method="POST",
    event_url="https://example.com/webhooks/event",
    inbound_method="POST",
    inbound_url="https://example.com/webhooks/inbound",
    name="My Application",
    status_method="POST",
    status_url="https://example.com/webhooks/status",
    type="voice",
)
    
res = s.create_application(req)

if res.application_created is not None:
    # handle response
```
<!-- End SDK Example Usage -->