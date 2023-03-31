<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        developer_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteAccountsIDRequest(
    id=548814,
)
    
res = s.accounts.delete_accounts_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->