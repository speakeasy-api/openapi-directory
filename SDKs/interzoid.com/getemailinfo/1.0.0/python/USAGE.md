<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetemailinfoRequest(
    email="Larue_Rau85@yahoo.com",
    license="corrupti",
)
    
res = s.email_address_information.getemailinfo(req)

if res.getemailinfo_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->