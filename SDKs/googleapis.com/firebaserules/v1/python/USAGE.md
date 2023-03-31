<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebaserulesProjectsReleasesCreateRequest(
    dollar_xgafv="2",
    release_input=shared.ReleaseInput(
        name="provident",
        ruleset_name="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    name="vel",
    oauth_token="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.firebaserules_projects_releases_create(req, operations.FirebaserulesProjectsReleasesCreateSecurity(
    option1=operations.FirebaserulesProjectsReleasesCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.release is not None:
    # handle response
```
<!-- End SDK Example Usage -->