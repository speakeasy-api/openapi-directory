<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetMapVersionNumberCopyrightsFormatRequest(
    callback="corrupti",
    format="jsonp",
    version_number="1",
)
    
res = s.copyrights.get_map_version_number_copyrights_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->