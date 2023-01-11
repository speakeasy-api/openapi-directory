<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ResourcesettingsProjectsSettingsGetRequest(
    security=operations.ResourcesettingsProjectsSettingsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ResourcesettingsProjectsSettingsGetPathParams(
        name="recusandae",
    ),
    query_params=operations.ResourcesettingsProjectsSettingsGetQueryParams(
        dollar_xgafv="1",
        access_token="excepturi",
        alt="proto",
        callback="autem",
        fields="fugiat",
        key="doloremque",
        oauth_token="beatae",
        pretty_print=False,
        quota_user="accusantium",
        upload_type="eveniet",
        upload_protocol="labore",
        view="SETTING_VIEW_LOCAL_VALUE",
    ),
)
    
res = s.projects.resourcesettings_projects_settings_get(req)

if res.google_cloud_resourcesettings_v1_setting is not None:
    # handle response
```
<!-- End SDK Example Usage -->