<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdsensehostAccountsAdclientsGetRequest(
    account_id="corrupti",
    ad_client_id="provident",
    alt="json",
    fields_="quibusdam",
    key="unde",
    oauth_token="nulla",
    pretty_print=False,
    quota_user="corrupti",
    user_ip="illum",
)
    
res = s.accounts.adsensehost_accounts_adclients_get(req, operations.AdsensehostAccountsAdclientsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.ad_client is not None:
    # handle response
```
<!-- End SDK Example Usage -->