<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetV1ValidationSingleRequest(
    email="Larue_Rau85@yahoo.com",
    format="xml",
    key="illum",
)
    
res = s.get_v1_validation_single(req)

if res.get_v1_validation_single_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->