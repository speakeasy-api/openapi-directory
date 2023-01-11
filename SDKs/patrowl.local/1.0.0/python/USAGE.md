<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CleanScanPageRequest(
    path_params=operations.CleanScanPagePathParams(
        scan_id=6178327298726221817,
    ),
)
    
res = s.patrowl_engine.clean_scan_page(req)

if res.api_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->