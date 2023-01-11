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
        name="facilis",
    ),
    query_params=operations.DomainsProjectsLocationsListQueryParams(
        dollar_xgafv="1",
        access_token="ducimus",
        alt="proto",
        callback="iste",
        fields="similique",
        filter="nulla",
        key="sint",
        oauth_token="quas",
        page_size=5104456016565448762,
        page_token="rem",
        pretty_print=False,
        quota_user="necessitatibus",
        upload_type="eius",
        upload_protocol="eum",
    ),
)
    
res = s.projects.domains_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->