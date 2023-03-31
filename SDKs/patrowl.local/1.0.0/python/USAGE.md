<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CleanScanPageRequest(
    scan_id=548814,
)
    
res = s.patrowl_engine.clean_scan_page(req)

if res.api_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->