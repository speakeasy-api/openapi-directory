<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateLicenseRequestBody(
    active=False,
    currency="corrupti",
    hidden=False,
    license_template_number="provident",
    licensee_number="distinctio",
    name="quibusdam",
    number="unde",
    parentfeature="nulla",
    price=5448.83,
    quantity="illum",
    start_date="2022-05-18T09:34:54.894Z",
    time_volume="deserunt",
    time_volume_period="suscipit",
    used_quantity="iure",
)
    
res = s.license.create_license(req, operations.CreateLicenseSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.netlicensing is not None:
    # handle response
```
<!-- End SDK Example Usage -->