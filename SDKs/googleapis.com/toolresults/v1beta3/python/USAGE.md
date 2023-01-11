<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ToolresultsProjectsGetSettingsRequest(
    security=operations.ToolresultsProjectsGetSettingsSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ToolresultsProjectsGetSettingsPathParams(
        project_id="est",
    ),
    query_params=operations.ToolresultsProjectsGetSettingsQueryParams(
        dollar_xgafv="2",
        access_token="molestiae",
        alt="media",
        callback="est",
        fields="blanditiis",
        key="quisquam",
        oauth_token="doloremque",
        pretty_print=False,
        quota_user="est",
        upload_type="quas",
        upload_protocol="rerum",
    ),
)
    
res = s.projects.toolresults_projects_get_settings(req)

if res.project_settings is not None:
    # handle response
```
<!-- End SDK Example Usage -->