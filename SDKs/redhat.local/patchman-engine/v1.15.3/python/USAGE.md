<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LatestPackageRequest(
    security=operations.LatestPackageSecurity(
        rh_identity=shared.SchemeRhIdentity(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.LatestPackagePathParams(
        package_name="fuga",
    ),
)
    
res = s.latest_package(req)

if res.controllers_package_detail_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->