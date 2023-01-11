<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateSinkRequest(
    security=operations.CreateSinkSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateSinkCreateSinkRequest(
        description="quis",
        sink_configuration="voluptas",
        sink_type="kinesis",
    ),
)
    
res = s.create_sink(req)

if res.events_v1_sink is not None:
    # handle response
```
<!-- End SDK Example Usage -->