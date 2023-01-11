<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVaccineStatusRequest(
    headers=operations.GetVaccineStatusHeaders(
        accept="suscipit",
        authorization="aliquid",
        content_type="distinctio",
    ),
    request=shared.VaccineStatusRequest(
        documento="ut",
    ),
)
    
res = s.paraguay_api.get_vaccine_status(req)

if res.vaccine_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->