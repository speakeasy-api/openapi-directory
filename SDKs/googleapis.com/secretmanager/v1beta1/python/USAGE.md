<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SecretmanagerProjectsLocationsListRequest(
    security=operations.SecretmanagerProjectsLocationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SecretmanagerProjectsLocationsListPathParams(
        name="aperiam",
    ),
    query_params=operations.SecretmanagerProjectsLocationsListQueryParams(
        dollar_xgafv="2",
        access_token="veritatis",
        alt="json",
        callback="vero",
        fields="expedita",
        filter="placeat",
        key="distinctio",
        oauth_token="qui",
        page_size=2875379615129349522,
        page_token="et",
        pretty_print=False,
        quota_user="et",
        upload_type="velit",
        upload_protocol="porro",
    ),
)
    
res = s.projects.secretmanager_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->