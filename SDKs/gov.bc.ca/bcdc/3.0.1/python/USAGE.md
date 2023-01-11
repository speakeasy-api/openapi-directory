<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        github_access_code=shared.SchemeGithubAccessCode(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.GetActionOrganizationActivityListRequest(
    query_params=operations.GetActionOrganizationActivityListQueryParams(
        id="voluptatem",
    ),
)
    
res = s.action.get_action_organization_activity_list(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->