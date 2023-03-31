<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        option1=shared.SecurityOption1(
            jwt="YOUR_API_KEY_HERE",
            api_key="YOUR_API_KEY_HERE",
            stream_auth_type="YOUR_API_KEY_HERE",
        ),
    ),
)


req = shared.GetCallTokenRequest(
    user={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    user_id="illum",
)
    
res = s.get_call_token_1(req)

if res.get_call_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->