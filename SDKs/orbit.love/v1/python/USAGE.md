<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDRequest(
    security=operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDSecurity(
        bearer=shared.SchemeBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDPathParams(
        id="ipsum",
        member_id="commodi",
        workspace_id="qui",
    ),
)
    
res = s.activities.delete_workspace_id_members_member_id_activities_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->