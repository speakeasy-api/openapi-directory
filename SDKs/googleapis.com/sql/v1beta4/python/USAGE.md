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
        id="ut",
        instance="quia",
        project="laboriosam",
    ),
    query_params=operations.SQLBackupRunsDeleteQueryParams(
        dollar_xgafv="2",
        access_token="molestiae",
        alt="proto",
        callback="sed",
        fields="quibusdam",
        key="odit",
        oauth_token="similique",
        pretty_print=False,
        quota_user="porro",
        upload_type="optio",
        upload_protocol="atque",
    ),
)
    
res = s.backup_runs.sql_backup_runs_delete(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->