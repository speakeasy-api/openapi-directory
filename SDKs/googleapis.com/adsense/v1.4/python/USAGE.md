<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdsenseAccountsAdclientsGetAdCodeRequest(
    account_id="corrupti",
    ad_client_id="provident",
    alt="json",
    fields_="quibusdam",
    key="unde",
    oauth_token="nulla",
    pretty_print=False,
    quota_user="corrupti",
    tag_partner="illum",
    user_ip="vel",
)
    
res = s.accounts.adsense_accounts_adclients_get_ad_code(req, operations.AdsenseAccountsAdclientsGetAdCodeSecurity(
    option1=operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.ad_code is not None:
    # handle response
```
<!-- End SDK Example Usage -->