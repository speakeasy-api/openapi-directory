<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)


req = operations.DeleteAttributesComputedIDRequest(
    id=548814,
)
    
res = s.attributes.delete_attributes_computed_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->