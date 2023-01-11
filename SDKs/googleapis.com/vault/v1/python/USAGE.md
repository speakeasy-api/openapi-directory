<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VaultMattersAddPermissionsRequest(
    security=operations.VaultMattersAddPermissionsSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.VaultMattersAddPermissionsPathParams(
        matter_id="ut",
    ),
    query_params=operations.VaultMattersAddPermissionsQueryParams(
        dollar_xgafv="1",
        access_token="sit",
        alt="json",
        callback="doloremque",
        fields="facere",
        key="voluptatum",
        oauth_token="possimus",
        pretty_print=True,
        quota_user="rem",
        upload_type="praesentium",
        upload_protocol="at",
    ),
    request=shared.AddMatterPermissionsRequest(
        cc_me=False,
        matter_permission=shared.MatterPermission(
            account_id="non",
            role="COLLABORATOR",
        ),
        send_emails=True,
    ),
)
    
res = s.matters.vault_matters_add_permissions(req)

if res.matter_permission is not None:
    # handle response
```
<!-- End SDK Example Usage -->