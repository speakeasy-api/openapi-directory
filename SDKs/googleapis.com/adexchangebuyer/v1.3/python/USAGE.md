<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdexchangebuyerAccountsGetRequest(
    alt="json",
    fields_="corrupti",
    id=592845,
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    user_ip="nulla",
)
    
res = s.accounts.adexchangebuyer_accounts_get(req, operations.AdexchangebuyerAccountsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->