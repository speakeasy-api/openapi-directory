<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVaccineStatusRequest(
    headers=operations.GetVaccineStatusHeaders(
        accept="eum",
        authorization="non",
        content_type="nisi",
    ),
    request=shared.VaccineStatusRequest(
        patient_id="odio",
    ),
)
    
res = s.brasil_api.get_vaccine_status(req)

if res.vaccine_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->