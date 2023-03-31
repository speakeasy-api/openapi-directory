<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        client_id="YOUR_API_KEY_HERE",
        plaid_version="YOUR_API_KEY_HERE",
        secret="YOUR_API_KEY_HERE",
    ),
)


req = shared.AccountsBalanceGetRequest(
    access_token="corrupti",
    client_id="provident",
    options=shared.AccountsBalanceGetRequestOptions(
        account_ids=[
            "quibusdam",
            "unde",
            "nulla",
        ],
        min_last_updated_datetime="2021-04-22T12:08:58.275Z",
    ),
    secret="vel",
)
    
res = s.plaid.accounts_balance_get(req)

if res.accounts_get_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->