<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        cast_local_authorization_token=shared.SchemeCastLocalAuthorizationToken(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AccessibilityRequest(
    request=shared.AccessibilityRequest(
        endpoint_enabled=False,
        hotword_enabled=True,
    ),
)
    
res = s.assistant.accessibility(req)

if res.getcurrentvalues is not None:
    # handle response
```
<!-- End SDK Example Usage -->