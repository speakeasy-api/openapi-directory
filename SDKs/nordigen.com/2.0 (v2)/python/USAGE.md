<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        jwt_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.AccountsBalancesRetrieveRequest(
    id="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
)
    
res = s.accounts.accounts_balances_retrieve(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->