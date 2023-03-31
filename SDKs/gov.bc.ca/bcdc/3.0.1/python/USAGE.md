<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        github_access_code="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.GetActionOrganizationActivityListRequest(
    id="corrupti",
)
    
res = s.action.get_action_organization_activity_list(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->