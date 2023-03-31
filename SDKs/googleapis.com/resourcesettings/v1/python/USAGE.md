<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ResourcesettingsProjectsSettingsGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    name="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
    view="SETTING_VIEW_BASIC",
)
    
res = s.projects.resourcesettings_projects_settings_get(req, operations.ResourcesettingsProjectsSettingsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_resourcesettings_v1_setting is not None:
    # handle response
```
<!-- End SDK Example Usage -->