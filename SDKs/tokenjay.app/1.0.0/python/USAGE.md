<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CalcSigmaRsvExchangeRequest(
    amount=548814,
)
    
res = s.age_usd.calc_sigma_rsv_exchange(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->