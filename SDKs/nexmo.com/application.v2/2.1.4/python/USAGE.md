<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.CreateApplicationRequest(
    request="voluptatem",
)
    
res = s.create_application(req)

if res.create_application_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->