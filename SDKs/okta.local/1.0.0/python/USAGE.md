<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ClearUserSessionsRequest(
    path_params=operations.ClearUserSessionsPathParams(
        user_id="unde",
    ),
    request="nihil".encode(),
)
    
res = s.clear_user_sessions(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->