<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DomainsProjectsLocationsListRequest(
    security=operations.DomainsProjectsLocationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DomainsProjectsLocationsListPathParams(
        name="ducimus",
    ),
    query_params=operations.DomainsProjectsLocationsListQueryParams(
        dollar_xgafv="1",
        access_token="laboriosam",
        alt="json",
        callback="modi",
        fields="dolores",
        filter="sunt",
        key="sed",
        oauth_token="eaque",
        page_size=6518858577195946249,
        page_token="tempore",
        pretty_print=True,
        quota_user="non",
        upload_type="amet",
        upload_protocol="error",
    ),
)
    
res = s.projects.domains_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->