<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetareacodefromnumberRequest(
    license="corrupti",
    number="provident",
)
    
res = s.area_code_information.getareacodefromnumber(req)

if res.getareacodefromnumber_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->