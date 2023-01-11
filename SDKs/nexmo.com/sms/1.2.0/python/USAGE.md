<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SendAnSmsRequest(
    path_params=operations.SendAnSmsPathParams(
        format="json",
    ),
    request="cum",
)
    
res = s.send_an_sms(req)

if res.send_an_sms_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->