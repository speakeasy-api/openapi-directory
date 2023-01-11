<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        api_secret=shared.SchemeAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BuyANumberRequest(
    request=shared.NumberDetails(
        country="sed",
        msisdn="quibusdam",
        target_api_key="consequatur",
    ),
)
    
res = s.buy_a_number(req)

if res.response is not None:
    # handle response
```
<!-- End SDK Example Usage -->