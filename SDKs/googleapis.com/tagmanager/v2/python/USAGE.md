<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TagmanagerAccountsContainersCombineRequest(
    dollar_xgafv="2",
    access_token="provident",
    allow_user_permission_feature_update=False,
    alt="proto",
    callback="quibusdam",
    container_id="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    path="vel",
    pretty_print=False,
    quota_user="error",
    setting_source="current",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.accounts.tagmanager_accounts_containers_combine(req, operations.TagmanagerAccountsContainersCombineSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.container is not None:
    # handle response
```
<!-- End SDK Example Usage -->