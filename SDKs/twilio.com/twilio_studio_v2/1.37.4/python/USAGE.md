<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateExecutionRequest(
    security=operations.CreateExecutionSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateExecutionPathParams(
        flow_sid="molestiae",
    ),
    request=operations.CreateExecutionCreateExecutionRequest(
        from_="et",
        parameters="dicta",
        to="necessitatibus",
    ),
)
    
res = s.create_execution(req)

if res.studio_v2_flow_execution is not None:
    # handle response
```
<!-- End SDK Example Usage -->