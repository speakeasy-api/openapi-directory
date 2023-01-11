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
        name="ea",
    ),
    query_params=operations.DomainsProjectsLocationsListQueryParams(
        dollar_xgafv="1",
        access_token="exercitationem",
        alt="json",
        callback="autem",
        fields="excepturi",
        filter="impedit",
        key="assumenda",
        oauth_token="non",
        page_size=6994450903425382212,
        page_token="unde",
        pretty_print=False,
        quota_user="voluptatum",
        upload_type="incidunt",
        upload_protocol="dolor",
    ),
)
    
res = s.projects.domains_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->