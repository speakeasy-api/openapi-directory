<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdexchangebuyerAccountsGetRequest(
    security=operations.AdexchangebuyerAccountsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AdexchangebuyerAccountsGetPathParams(
        id=1370564907374010457,
    ),
    query_params=operations.AdexchangebuyerAccountsGetQueryParams(
        alt="json",
        fields="ipsa",
        key="aspernatur",
        oauth_token="nam",
        pretty_print=False,
        quota_user="natus",
        user_ip="ipsam",
    ),
)
    
res = s.accounts.adexchangebuyer_accounts_get(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->