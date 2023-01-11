<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest(
    security=operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams(
        location="ducimus",
    ),
    query_params=operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams(
        dollar_xgafv="1",
        access_token="voluptatem",
        alt="json",
        callback="enim",
        fields="quos",
        key="blanditiis",
        oauth_token="fugit",
        pretty_print=False,
        quota_user="praesentium",
        upload_type="est",
        upload_protocol="eius",
    ),
)
    
res = s.projects.baremetalsolution_projects_locations_instance_provisioning_settings_fetch(req)

if res.fetch_instance_provisioning_settings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->