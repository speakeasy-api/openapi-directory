<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest(
    dollar_xgafv="2",
    database_instance_input=shared.DatabaseInstanceInput(
        name="provident",
        type="USER_DATABASE",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    database_id="corrupti",
    fields_="illum",
    key="vel",
    oauth_token="error",
    parent="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
    validate_only=False,
)
    
res = s.projects.firebasedatabase_projects_locations_instances_create(req, operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity(
    option1=operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.database_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->