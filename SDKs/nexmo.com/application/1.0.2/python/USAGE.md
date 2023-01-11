<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateApplicationRequest(
    request=operations.CreateApplicationRequestBody(
        answer_method="optio",
        answer_url="ut",
        api_key="adipisci",
        api_secret="qui",
        event_method="at",
        event_url="reiciendis",
        inbound_method="nostrum",
        inbound_url="vero",
        name="qui",
        status_method="ratione",
        status_url="fuga",
        type="voice",
    ),
)
    
res = s.create_application(req)

if res.application_created is not None:
    # handle response
```
<!-- End SDK Example Usage -->