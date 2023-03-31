<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest(
    dollar_xgafv="2",
    check_upgrade_request=shared.CheckUpgradeRequest(
        image_version="provident",
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    environment="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.projects.composer_projects_locations_environments_check_upgrade(req, operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->