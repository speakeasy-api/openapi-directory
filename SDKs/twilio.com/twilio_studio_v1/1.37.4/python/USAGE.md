<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateEngagementRequest(
    security=operations.CreateEngagementSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateEngagementPathParams(
        flow_sid="quod",
    ),
    request=operations.CreateEngagementCreateEngagementRequest(
        from_="earum",
        parameters="nihil",
        to="aut",
    ),
)
    
res = s.create_engagement(req)

if res.studio_v1_flow_engagement is not None:
    # handle response
```
<!-- End SDK Example Usage -->