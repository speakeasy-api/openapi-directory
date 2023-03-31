<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ContentAccountsAuthinfoRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    quota_user="illum",
    upload_type="vel",
    upload_protocol="error",
)
    
res = s.accounts.content_accounts_authinfo(req, operations.ContentAccountsAuthinfoSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.accounts_auth_info_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->