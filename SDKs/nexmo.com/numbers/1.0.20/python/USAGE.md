<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
        api_secret="YOUR_API_KEY_HERE",
    ),
)


req = shared.NumberDetails(
    country="GB",
    msisdn="447700900000",
    target_api_key="1a2345b7",
)
    
res = s.buy_a_number(req)

if res.response is not None:
    # handle response
```
<!-- End SDK Example Usage -->