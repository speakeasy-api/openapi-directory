<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAccountBalanceRequest(
    query_params=operations.GetAccountBalanceQueryParams(
        api_key="natus",
        api_secret="libero",
    ),
)
    
res = s.balance.get_account_balance(req)

if res.account_balance is not None:
    # handle response
```
<!-- End SDK Example Usage -->