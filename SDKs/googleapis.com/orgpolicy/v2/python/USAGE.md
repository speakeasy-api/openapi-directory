<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest(
    security=operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.OrgpolicyOrganizationsCustomConstraintsCreatePathParams(
        parent="veritatis",
    ),
    query_params=operations.OrgpolicyOrganizationsCustomConstraintsCreateQueryParams(
        dollar_xgafv="1",
        access_token="dolor",
        alt="json",
        callback="mollitia",
        fields="rerum",
        key="rem",
        oauth_token="recusandae",
        pretty_print=False,
        quota_user="reprehenderit",
        upload_type="dolorem",
        upload_protocol="omnis",
    ),
    request=shared.GoogleCloudOrgpolicyV2CustomConstraintInput(
        action_type="DENY",
        condition="omnis",
        description="itaque",
        display_name="consequuntur",
        method_types=[
            "UPDATE",
            "CREATE",
            "UPDATE",
        ],
        name="ab",
        resource_types=[
            "voluptas",
        ],
    ),
)
    
res = s.organizations.orgpolicy_organizations_custom_constraints_create(req)

if res.google_cloud_orgpolicy_v2_custom_constraint is not None:
    # handle response
```
<!-- End SDK Example Usage -->