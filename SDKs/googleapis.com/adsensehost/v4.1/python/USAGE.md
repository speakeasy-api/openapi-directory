<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdsensehostAccountsAdclientsGetRequest(
    security=operations.AdsensehostAccountsAdclientsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AdsensehostAccountsAdclientsGetPathParams(
        account_id="qui",
        ad_client_id="necessitatibus",
    ),
    query_params=operations.AdsensehostAccountsAdclientsGetQueryParams(
        alt="csv",
        fields="itaque",
        key="veniam",
        oauth_token="nihil",
        pretty_print=True,
        quota_user="est",
        user_ip="placeat",
    ),
)
    
res = s.accounts.adsensehost_accounts_adclients_get(req)

if res.ad_client is not None:
    # handle response
```
<!-- End SDK Example Usage -->