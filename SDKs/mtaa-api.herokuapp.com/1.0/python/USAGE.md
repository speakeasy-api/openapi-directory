<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DistrictsInARegionRequest(
    path_params=operations.DistrictsInARegionPathParams(
        country="qui",
        region="sit",
    ),
)
    
res = s.districts_in_region.districts_in_a_region(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->