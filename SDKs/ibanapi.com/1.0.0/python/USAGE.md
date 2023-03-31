<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.ibanapi.get_balance()

if res.balance_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->