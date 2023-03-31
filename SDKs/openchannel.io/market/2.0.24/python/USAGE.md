<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)


req = operations.DeleteAppsAppIDRequest(
    app_id="corrupti",
    developer_id="provident",
)
    
res = s.apps_find_and_modify_apps.delete_apps_app_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->