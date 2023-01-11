<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FileProjectsLocationsBackupsCreateRequest(
    security=operations.FileProjectsLocationsBackupsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.FileProjectsLocationsBackupsCreatePathParams(
        parent="sapiente",
    ),
    query_params=operations.FileProjectsLocationsBackupsCreateQueryParams(
        dollar_xgafv="1",
        access_token="accusamus",
        alt="media",
        backup_id="voluptatem",
        callback="et",
        fields="asperiores",
        key="reprehenderit",
        oauth_token="sequi",
        pretty_print=True,
        quota_user="ea",
        upload_type="ea",
        upload_protocol="facere",
    ),
    request=shared.BackupInput(
        description="veritatis",
        labels={
            "velit": "nostrum",
        },
        source_file_share="minus",
        source_instance="qui",
    ),
)
    
res = s.projects.file_projects_locations_backups_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->