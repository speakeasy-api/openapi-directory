<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TasksTasklistsDeleteRequest(
    security=operations.TasksTasklistsDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.TasksTasklistsDeletePathParams(
        tasklist="enim",
    ),
    query_params=operations.TasksTasklistsDeleteQueryParams(
        dollar_xgafv="1",
        access_token="reiciendis",
        alt="media",
        callback="ex",
        fields="veritatis",
        key="sit",
        oauth_token="nisi",
        pretty_print=True,
        quota_user="omnis",
        upload_type="ex",
        upload_protocol="ipsum",
    ),
)
    
res = s.tasklists.tasks_tasklists_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->