<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateLicenseRequest(
    security=operations.CreateLicenseSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateLicenseRequestBody(
        active=True,
        currency="quo",
        hidden=False,
        license_template_number="incidunt",
        licensee_number="asperiores",
        name="doloribus",
        number="excepturi",
        parentfeature="enim",
        price=28.200001,
        quantity="ut",
        start_date="2008-07-16T16:51:35Z",
        time_volume="at",
        time_volume_period="explicabo",
        used_quantity="autem",
    ),
)
    
res = s.license.create_license(req)

if res.netlicensing is not None:
    # handle response
```
<!-- End SDK Example Usage -->