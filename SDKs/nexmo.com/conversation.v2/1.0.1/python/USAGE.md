<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetUsersRequest(
    query_params=operations.GetUsersQueryParams(
        cursor="qui",
        order="asc",
        page_size=416485071681452520,
    ),
)
    
res = s.get_users(req)

if res.get_users_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->