<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        cast_local_authorization_token="YOUR_API_KEY_HERE",
    ),
)


req = shared.AccessibilityRequest(
    endpoint_enabled=False,
    hotword_enabled=False,
)
    
res = s.assistant.accessibility(req)

if res.getcurrentvalues is not None:
    # handle response
```
<!-- End SDK Example Usage -->