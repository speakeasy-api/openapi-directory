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
        name="in",
    ),
    query_params=operations.SecretmanagerProjectsLocationsListQueryParams(
        dollar_xgafv="1",
        access_token="expedita",
        alt="media",
        callback="repellendus",
        fields="sint",
        filter="rerum",
        key="maiores",
        oauth_token="et",
        page_size=1672131744666614647,
        page_token="veniam",
        pretty_print=True,
        quota_user="qui",
        upload_type="aut",
        upload_protocol="sunt",
    ),
)
    
res = s.projects.secretmanager_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->