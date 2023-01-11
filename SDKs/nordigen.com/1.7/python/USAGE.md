<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        token_auth=shared.SchemeTokenAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.RetrieveAccountBalancesRequest(
    path_params=operations.RetrieveAccountBalancesPathParams(
        id="deserunt",
    ),
)
    
res = s.accounts.retrieve_account_balances(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->