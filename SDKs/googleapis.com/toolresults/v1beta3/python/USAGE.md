<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ToolresultsProjectsGetSettingsRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    project_id="illum",
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.projects.toolresults_projects_get_settings(req, operations.ToolresultsProjectsGetSettingsSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.project_settings is not None:
    # handle response
```
<!-- End SDK Example Usage -->