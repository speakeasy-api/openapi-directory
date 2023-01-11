<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAPISpecificationRequest(
    security=operations.DeleteAPISpecificationSecurity(
        api_key=shared.SchemeAPIKey(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.DeleteAPISpecificationPathParams(
        id="earum",
    ),
)
    
res = s.api_specification.delete_api_specification(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->