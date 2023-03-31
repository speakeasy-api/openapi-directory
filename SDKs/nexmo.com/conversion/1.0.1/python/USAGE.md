<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        option1=shared.SecurityOption1(
            api_key="YOUR_API_KEY_HERE",
            api_secret="YOUR_API_KEY_HERE",
        ),
    ),
)


req = operations.SmsConversionRequest(
    delivered="0",
    message_id="provident",
    timestamp="distinctio",
)
    
res = s.sms_conversion.sms_conversion(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->