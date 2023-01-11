<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        option1=shared.SecurityOption1(
            api_key=shared.SchemeAPIKey(
                api_key="YOUR_API_KEY_HERE",
            ),
            api_secret=shared.SchemeAPISecret(
                api_key="YOUR_API_KEY_HERE",
            ),
        ),
    )
)
    
req = operations.SmsConversionRequest(
    query_params=operations.SmsConversionQueryParams(
        delivered="ab",
        message_id="deserunt",
        timestamp="iste",
    ),
)
    
res = s.sms_conversion.sms_conversion(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->