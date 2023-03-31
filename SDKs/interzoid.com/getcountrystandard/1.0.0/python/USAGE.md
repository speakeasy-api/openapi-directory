<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetcountrystandardRequest(
    country="Malta",
    license="provident",
)
    
res = s.country_name_standardization.getcountrystandard(req)

if res.getcountrystandard_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->