<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ServicedirectoryProjectsLocationsListRequest(
    security=operations.ServicedirectoryProjectsLocationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ServicedirectoryProjectsLocationsListPathParams(
        name="quia",
    ),
    query_params=operations.ServicedirectoryProjectsLocationsListQueryParams(
        dollar_xgafv="2",
        access_token="distinctio",
        alt="media",
        callback="cumque",
        fields="provident",
        filter="atque",
        key="ut",
        oauth_token="dolor",
        page_size=81552667699180543,
        page_token="voluptates",
        pretty_print=True,
        quota_user="nesciunt",
        upload_type="laudantium",
        upload_protocol="nam",
    ),
)
    
res = s.projects.servicedirectory_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->