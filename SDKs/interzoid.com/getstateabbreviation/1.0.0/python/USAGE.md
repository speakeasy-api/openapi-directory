<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetstateabbreviationRequest(
    license="corrupti",
    state="provident",
)
    
res = s.state_data_standardization.getstateabbreviation(req)

if res.getstateabbreviation_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->