<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVaccineStatusRequest(
    headers=operations.GetVaccineStatusHeaders(
        accept="ullam",
        authorization="sunt",
        content_type="quas",
        cowin_api_key="et",
    ),
    request=shared.VaccineStatusRequest(
        beneficiary_id="perspiciatis",
        mobile="et",
    ),
)
    
res = s.india_api.get_vaccine_status(req)

if res.vaccine_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->