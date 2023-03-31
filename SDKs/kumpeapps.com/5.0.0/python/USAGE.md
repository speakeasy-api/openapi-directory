<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KkidAllowanceGetRequest(
    kid_user_id=548814,
    transaction_days=592845,
)
    
res = s.k_kid.kkid_allowance_get(req, operations.KkidAllowanceGetSecurity(
    auth_key="YOUR_API_KEY_HERE",
))

if res.allowance is not None:
    # handle response
```
<!-- End SDK Example Usage -->