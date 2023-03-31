<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FileProjectsLocationsBackupsCreateRequest(
    dollar_xgafv="2",
    backup_input=shared.BackupInput(
        description="provident",
        kms_key="distinctio",
        labels={
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
        source_file_share="iure",
        source_instance="magnam",
    ),
    access_token="debitis",
    alt="json",
    backup_id="delectus",
    callback="tempora",
    fields_="suscipit",
    key="molestiae",
    oauth_token="minus",
    parent="placeat",
    pretty_print=False,
    quota_user="voluptatum",
    upload_type="iusto",
    upload_protocol="excepturi",
)
    
res = s.projects.file_projects_locations_backups_create(req, operations.FileProjectsLocationsBackupsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->