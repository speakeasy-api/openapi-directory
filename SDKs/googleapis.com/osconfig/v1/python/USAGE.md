<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.OsconfigProjectsLocationsInstancesInventoriesListRequest(
    security=operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.OsconfigProjectsLocationsInstancesInventoriesListPathParams(
        parent="qui",
    ),
    query_params=operations.OsconfigProjectsLocationsInstancesInventoriesListQueryParams(
        dollar_xgafv="1",
        access_token="autem",
        alt="json",
        callback="tempora",
        fields="quaerat",
        filter="necessitatibus",
        key="aut",
        oauth_token="voluptas",
        page_size=5135397023255952795,
        page_token="veritatis",
        pretty_print=False,
        quota_user="sapiente",
        upload_type="tenetur",
        upload_protocol="at",
        view="FULL",
    ),
)
    
res = s.projects.osconfig_projects_locations_instances_inventories_list(req)

if res.list_inventories_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->