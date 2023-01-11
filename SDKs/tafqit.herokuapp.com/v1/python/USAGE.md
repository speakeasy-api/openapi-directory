<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ConvertRequest(
    request=operations.ConvertRequestBody(
        hundreds_form="aut",
        the_number="laudantium",
        unit="est",
    ),
)
    
res = s.convert(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->