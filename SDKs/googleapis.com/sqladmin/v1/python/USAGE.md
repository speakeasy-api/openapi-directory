<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SQLBackupRunsDeleteRequest(
    security=operations.SQLBackupRunsDeleteSecurity(
        option1=operations.SQLBackupRunsDeleteSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.SQLBackupRunsDeletePathParams(
        id="id",
        instance="ipsam",
        project="laudantium",
    ),
    query_params=operations.SQLBackupRunsDeleteQueryParams(
        dollar_xgafv="1",
        access_token="a",
        alt="json",
        callback="quis",
        fields="et",
        key="rerum",
        oauth_token="cum",
        pretty_print=False,
        quota_user="voluptatem",
        upload_type="quis",
        upload_protocol="voluptates",
    ),
)
    
res = s.backup_runs.sql_backup_runs_delete(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->