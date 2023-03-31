<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDRequest(
    id="corrupti",
    member_slug="provident",
    workspace_slug="distinctio",
)
    
res = s.activities.delete_workspace_slug_members_member_slug_activities_id_(req, operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDSecurity(
    bearer="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->