<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebasehostingProjectsSitesCreateRequest(
    dollar_xgafv="2",
    site_input=shared.SiteInput(
        app_id="provident",
        labels={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
    ),
    access_token="error",
    alt="media",
    callback="suscipit",
    fields_="iure",
    key="magnam",
    oauth_token="debitis",
    parent="ipsa",
    pretty_print=False,
    quota_user="delectus",
    site_id="tempora",
    upload_type="suscipit",
    upload_protocol="molestiae",
)
    
res = s.projects.firebasehosting_projects_sites_create(req, operations.FirebasehostingProjectsSitesCreateSecurity(
    option1=operations.FirebasehostingProjectsSitesCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.site is not None:
    # handle response
```
<!-- End SDK Example Usage -->