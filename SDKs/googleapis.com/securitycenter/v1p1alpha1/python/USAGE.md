<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SecuritycenterOrganizationsOperationsCancelRequest(
    security=operations.SecuritycenterOrganizationsOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SecuritycenterOrganizationsOperationsCancelPathParams(
        name="qui",
    ),
    query_params=operations.SecuritycenterOrganizationsOperationsCancelQueryParams(
        dollar_xgafv="2",
        access_token="est",
        alt="media",
        callback="deserunt",
        fields="necessitatibus",
        key="voluptatem",
        oauth_token="vel",
        pretty_print=True,
        quota_user="aut",
        upload_type="voluptatum",
        upload_protocol="sequi",
    ),
)
    
res = s.organizations.securitycenter_organizations_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->