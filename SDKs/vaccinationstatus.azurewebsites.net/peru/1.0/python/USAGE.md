<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVaccineStatusRequest(
    headers=operations.GetVaccineStatusHeaders(
        accept="non",
        authorization="minus",
        content_type="nam",
    ),
    request=shared.VaccineStatusRequest(
        uuid="cum",
    ),
)
    
res = s.peru_api.get_vaccine_status(req)

if res.vaccine_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->