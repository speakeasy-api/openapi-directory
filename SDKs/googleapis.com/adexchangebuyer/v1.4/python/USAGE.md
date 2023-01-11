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
        id=8528060938840017890,
    ),
    query_params=operations.AdexchangebuyerAccountsGetQueryParams(
        alt="json",
        fields="consequuntur",
        key="omnis",
        oauth_token="culpa",
        pretty_print=False,
        quota_user="totam",
        user_ip="numquam",
    ),
)
    
res = s.accounts.adexchangebuyer_accounts_get(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->