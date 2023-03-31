<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAccountBalanceRequest(
    api_key="abcd1234",
    api_secret="ABCDEFGH01234abc",
)
    
res = s.balance.get_account_balance(req)

if res.account_balance is not None:
    # handle response
```
<!-- End SDK Example Usage -->