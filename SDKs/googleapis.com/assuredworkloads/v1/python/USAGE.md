<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest(
    security=operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AssuredworkloadsOrganizationsLocationsOperationsListPathParams(
        name="minus",
    ),
    query_params=operations.AssuredworkloadsOrganizationsLocationsOperationsListQueryParams(
        dollar_xgafv="2",
        access_token="nisi",
        alt="proto",
        callback="ducimus",
        fields="nulla",
        filter="non",
        key="et",
        oauth_token="dolore",
        page_size=8865056654676877038,
        page_token="non",
        pretty_print=False,
        quota_user="quisquam",
        upload_type="cumque",
        upload_protocol="aspernatur",
    ),
)
    
res = s.organizations.assuredworkloads_organizations_locations_operations_list(req)

if res.google_longrunning_list_operations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->