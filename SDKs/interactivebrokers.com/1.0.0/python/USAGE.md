<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        cookie_auth="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetAccountsRequest(
    account="corrupti",
)
    
res = s.account_and_portfolio.get_accounts(req)

if res.get_accounts_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->