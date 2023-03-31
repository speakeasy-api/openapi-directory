<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AnimateImageRequest(
    type="corrupti",
    url="provident",
)
    
res = s.animate_image(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->