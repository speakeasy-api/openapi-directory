<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAccountInfoRequest(
    training_key="corrupti",
)
    
res = s.account_api.get_account_info(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->