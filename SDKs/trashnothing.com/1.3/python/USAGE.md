<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2_code="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.ContactModeratorsRequest(
    request_body=operations.ContactModeratorsRequestBody(
        message="corrupti",
        subject="provident",
    ),
    group_id="distinctio",
)
    
res = s.groups.contact_moderators(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->