<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetNumbersBaseRequest(
    from_=548814,
    number=592845,
    to=715190,
)
    
res = s.base_conversion.get_numbers_base(req, operations.GetNumbersBaseSecurity(
    x_mathtools_api_secret="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->