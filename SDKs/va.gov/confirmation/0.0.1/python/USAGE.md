<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVeteranStatusRequest(
    security=operations.GetVeteranStatusSecurity(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=shared.VeteranStatusRequest(
        birth_date="et",
        first_name="aliquid",
        gender="F",
        last_name="provident",
        middle_name="deleniti",
        ssn="suscipit",
    ),
)
    
res = s.veteran_confirmation_status.get_veteran_status(req)

if res.veteran_status_confirmation is not None:
    # handle response
```
<!-- End SDK Example Usage -->