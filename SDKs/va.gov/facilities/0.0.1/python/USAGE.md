<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAllFacilitiesRequest(
    accept="application/vnd.geo+json",
)
    
res = s.facilities.get_all_facilities(req, operations.GetAllFacilitiesSecurity(
    apikey="YOUR_API_KEY_HERE",
))

if res.geo_facilities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->