<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.VeteranStatusRequest(
    birth_date="1965-01-01",
    first_name="John",
    gender="M",
    last_name="Doe",
    middle_name="Theodore",
    ssn="555-55-5555",
)
    
res = s.veteran_confirmation_status.get_veteran_status(req, operations.GetVeteranStatusSecurity(
    apikey="YOUR_API_KEY_HERE",
))

if res.veteran_status_confirmation is not None:
    # handle response
```
<!-- End SDK Example Usage -->