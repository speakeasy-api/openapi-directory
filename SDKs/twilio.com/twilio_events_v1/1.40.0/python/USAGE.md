<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateSinkCreateSinkRequest(
    description="corrupti",
    sink_configuration="provident",
    sink_type="segment",
)
    
res = s.create_sink(req, operations.CreateSinkSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.events_v1_sink is not None:
    # handle response
```
<!-- End SDK Example Usage -->