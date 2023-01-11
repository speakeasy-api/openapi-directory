<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EventarcProjectsLocationsListRequest(
    security=operations.EventarcProjectsLocationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.EventarcProjectsLocationsListPathParams(
        name="saepe",
    ),
    query_params=operations.EventarcProjectsLocationsListQueryParams(
        dollar_xgafv="1",
        access_token="maxime",
        alt="proto",
        callback="aut",
        fields="et",
        filter="fugit",
        key="nostrum",
        oauth_token="quia",
        page_size=862857162017981555,
        page_token="quia",
        pretty_print=False,
        quota_user="assumenda",
        upload_type="doloremque",
        upload_protocol="quia",
    ),
)
    
res = s.projects.eventarc_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->