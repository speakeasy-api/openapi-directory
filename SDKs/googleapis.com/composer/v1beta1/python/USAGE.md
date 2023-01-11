<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest(
    security=operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams(
        environment="animi",
    ),
    query_params=operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams(
        dollar_xgafv="1",
        access_token="vel",
        alt="json",
        callback="architecto",
        fields="autem",
        key="nesciunt",
        oauth_token="ullam",
        pretty_print=True,
        quota_user="aut",
        upload_type="ducimus",
        upload_protocol="odit",
    ),
    request=shared.CheckUpgradeRequest(
        image_version="tenetur",
    ),
)
    
res = s.projects.composer_projects_locations_environments_check_upgrade(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->