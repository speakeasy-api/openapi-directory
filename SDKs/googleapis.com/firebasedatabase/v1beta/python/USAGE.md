<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest(
    security=operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity(
        option1=operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.FirebasedatabaseProjectsLocationsInstancesCreatePathParams(
        parent="molestiae",
    ),
    query_params=operations.FirebasedatabaseProjectsLocationsInstancesCreateQueryParams(
        dollar_xgafv="2",
        access_token="facere",
        alt="media",
        callback="aut",
        database_id="cumque",
        fields="sint",
        key="repellendus",
        oauth_token="cumque",
        pretty_print=True,
        quota_user="asperiores",
        upload_type="ut",
        upload_protocol="quia",
        validate_only=False,
    ),
    request=shared.DatabaseInstanceInput(
        name="impedit",
        type="DATABASE_INSTANCE_TYPE_UNSPECIFIED",
    ),
)
    
res = s.projects.firebasedatabase_projects_locations_instances_create(req)

if res.database_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->