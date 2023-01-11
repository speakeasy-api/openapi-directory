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
        name="dolor",
    ),
    query_params=operations.ServicedirectoryProjectsLocationsListQueryParams(
        dollar_xgafv="2",
        access_token="dolores",
        alt="proto",
        callback="ut",
        fields="et",
        filter="nisi",
        key="quo",
        oauth_token="dolores",
        page_size=2675157406275008310,
        page_token="et",
        pretty_print=True,
        quota_user="recusandae",
        upload_type="animi",
        upload_protocol="cumque",
    ),
)
    
res = s.projects.servicedirectory_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->