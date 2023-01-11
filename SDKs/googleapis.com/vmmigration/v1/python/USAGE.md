<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest(
    security=operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams(
        group="nobis",
    ),
    query_params=operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams(
        dollar_xgafv="1",
        access_token="quia",
        alt="json",
        callback="doloremque",
        fields="dignissimos",
        key="ut",
        oauth_token="at",
        pretty_print=False,
        quota_user="aut",
        upload_type="dolorum",
        upload_protocol="aut",
    ),
    request=shared.AddGroupMigrationRequest(
        migrating_vm="eos",
    ),
)
    
res = s.projects.vmmigration_projects_locations_groups_add_group_migration(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->