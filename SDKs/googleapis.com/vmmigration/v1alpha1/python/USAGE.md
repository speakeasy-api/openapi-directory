<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest(
    dollar_xgafv="2",
    add_group_migration_request=shared.AddGroupMigrationRequest(
        migrating_vm="provident",
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    fields_="nulla",
    group="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.projects.vmmigration_projects_locations_groups_add_group_migration(req, operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->