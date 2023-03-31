<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAPIV1ScansRequest(
    name="corrupti",
    per_page="provident",
)
    
res = s.scans.get_api_v1_scans(req, operations.GetAPIV1ScansSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->