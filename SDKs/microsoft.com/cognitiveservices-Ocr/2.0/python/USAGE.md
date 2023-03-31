<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apim_key="YOUR_API_KEY_HERE",
    ),
)


req = shared.ImageURL(
    url="corrupti",
)
    
res = s.batch_read_file(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->