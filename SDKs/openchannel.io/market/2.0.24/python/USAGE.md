<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.DeleteAppsAppIDRequest(
    path_params=operations.DeleteAppsAppIDPathParams(
        app_id="consequatur",
    ),
    query_params=operations.DeleteAppsAppIDQueryParams(
        developer_id="est",
    ),
)
    
res = s.apps_find_and_modify_apps.delete_apps_app_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->