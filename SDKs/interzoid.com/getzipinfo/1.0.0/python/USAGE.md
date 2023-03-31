<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetzipcodeinfoRequest(
    license="corrupti",
    zip="provident",
)
    
res = s.detailed_zip_code_information.getzipcodeinfo(req)

if res.getzipcodeinfo_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->