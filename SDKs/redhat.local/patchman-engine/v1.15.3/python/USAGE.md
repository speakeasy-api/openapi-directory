<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LatestPackageRequest(
    package_name="corrupti",
)
    
res = s.latest_package(req, operations.LatestPackageSecurity(
    rh_identity="YOUR_API_KEY_HERE",
))

if res.controllers_package_detail_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->