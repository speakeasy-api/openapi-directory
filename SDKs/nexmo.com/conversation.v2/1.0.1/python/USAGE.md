<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetUsersRequest(
    cursor="corrupti",
    order="desc",
    page_size=715190,
)
    
res = s.get_users(req)

if res.get_users_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->