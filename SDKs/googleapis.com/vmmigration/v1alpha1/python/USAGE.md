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
        group="iste",
    ),
    query_params=operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams(
        dollar_xgafv="2",
        access_token="odit",
        alt="proto",
        callback="ut",
        fields="corporis",
        key="fugit",
        oauth_token="placeat",
        pretty_print=False,
        quota_user="dignissimos",
        upload_type="neque",
        upload_protocol="rerum",
    ),
    request=shared.AddGroupMigrationRequest(
        migrating_vm="et",
    ),
)
    
res = s.projects.vmmigration_projects_locations_groups_add_group_migration(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->