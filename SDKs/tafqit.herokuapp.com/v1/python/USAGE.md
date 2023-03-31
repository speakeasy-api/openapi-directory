<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConvertRequestBody(
    hundreds_form="مائة",
    the_number="2519.50",
    unit=" ريال سعودي",
)
    
res = s.convert(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->