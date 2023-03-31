<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    location="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.projects.baremetalsolution_projects_locations_instance_provisioning_settings_fetch(req, operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.fetch_instance_provisioning_settings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->