<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VaultMattersAddPermissionsRequest(
    dollar_xgafv="2",
    add_matter_permissions_request=shared.AddMatterPermissionsRequest(
        cc_me=False,
        matter_permission=shared.MatterPermission(
            account_id="provident",
            role="OWNER",
        ),
        send_emails=False,
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    matter_id="vel",
    oauth_token="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.matters.vault_matters_add_permissions(req, operations.VaultMattersAddPermissionsSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.matter_permission is not None:
    # handle response
```
<!-- End SDK Example Usage -->