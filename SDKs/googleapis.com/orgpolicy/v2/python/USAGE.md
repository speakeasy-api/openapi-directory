<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest(
    dollar_xgafv="2",
    google_cloud_orgpolicy_v2_custom_constraint_input=shared.GoogleCloudOrgpolicyV2CustomConstraintInput(
        action_type="ALLOW",
        condition="distinctio",
        description="quibusdam",
        display_name="unde",
        method_types=[
            "UPDATE",
            "DELETE",
            "CREATE",
            "UPDATE",
        ],
        name="deserunt",
        resource_types=[
            "iure",
            "magnam",
        ],
    ),
    access_token="debitis",
    alt="json",
    callback="delectus",
    fields_="tempora",
    key="suscipit",
    oauth_token="molestiae",
    parent="minus",
    pretty_print=False,
    quota_user="placeat",
    upload_type="voluptatum",
    upload_protocol="iusto",
)
    
res = s.organizations.orgpolicy_organizations_custom_constraints_create(req, operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_orgpolicy_v2_custom_constraint is not None:
    # handle response
```
<!-- End SDK Example Usage -->