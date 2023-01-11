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
    
req = operations.DeleteAttributesComputedIDRequest(
    path_params=operations.DeleteAttributesComputedIDPathParams(
        id=2678697441367098673,
    ),
)
    
res = s.attributes.delete_attributes_computed_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->