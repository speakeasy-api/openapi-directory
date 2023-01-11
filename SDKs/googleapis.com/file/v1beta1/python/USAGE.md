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
        parent="eius",
    ),
    query_params=operations.FileProjectsLocationsBackupsCreateQueryParams(
        dollar_xgafv="2",
        access_token="sunt",
        alt="json",
        backup_id="consequuntur",
        callback="itaque",
        fields="architecto",
        key="magni",
        oauth_token="repellat",
        pretty_print=False,
        quota_user="ut",
        upload_type="qui",
        upload_protocol="voluptas",
    ),
    request=shared.BackupInput(
        description="sed",
        kms_key_name="odit",
        labels={
            "minima": "dolores",
            "eum": "sapiente",
            "culpa": "et",
        },
        source_file_share="molestiae",
        source_instance="ex",
    ),
)
    
res = s.projects.file_projects_locations_backups_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->