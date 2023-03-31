<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)

    
res = s.countries.list_payment_channel_rules_v1()

if res.payment_channel_rules_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->