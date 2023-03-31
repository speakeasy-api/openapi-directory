<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.GetAccountsRequest(
    filter_account_type="TRANSACTIONAL",
    filter_ownership_type="JOINT",
    page_size=715190,
)
    
res = s.accounts.get_accounts(req)

if res.list_accounts_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->