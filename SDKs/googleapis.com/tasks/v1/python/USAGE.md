<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TasksTasklistsDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    quota_user="illum",
    tasklist="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.tasklists.tasks_tasklists_delete(req, operations.TasksTasklistsDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->