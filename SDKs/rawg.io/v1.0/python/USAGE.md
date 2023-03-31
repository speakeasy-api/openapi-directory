<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreatorRolesListRequest(
    page=548814,
    page_size=592845,
)
    
res = s.creator_roles.creator_roles_list(req)

if res.creator_roles_list_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->