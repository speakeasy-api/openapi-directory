<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudresourcemanagerOrganizationsGetRequest(
    security=operations.CloudresourcemanagerOrganizationsGetSecurity(
        option1=operations.CloudresourcemanagerOrganizationsGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.CloudresourcemanagerOrganizationsGetPathParams(
        name="accusamus",
    ),
    query_params=operations.CloudresourcemanagerOrganizationsGetQueryParams(
        dollar_xgafv="1",
        access_token="dolorem",
        alt="json",
        callback="est",
        fields="impedit",
        key="harum",
        oauth_token="distinctio",
        organization_id="et",
        pretty_print=True,
        quota_user="qui",
        upload_type="dolor",
        upload_protocol="consequatur",
    ),
)
    
res = s.organizations.cloudresourcemanager_organizations_get(req)

if res.organization is not None:
    # handle response
```
<!-- End SDK Example Usage -->