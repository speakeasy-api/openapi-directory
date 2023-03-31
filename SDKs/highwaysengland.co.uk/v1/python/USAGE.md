<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AreasGetRequest(
    version="corrupti",
)
    
res = s.areas.areas_get(req)

if res.area_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->