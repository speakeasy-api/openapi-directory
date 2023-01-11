<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAllFacilitiesRequest(
    security=operations.GetAllFacilitiesSecurity(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    headers=operations.GetAllFacilitiesHeaders(
        accept="application/geo+json",
    ),
)
    
res = s.facilities.get_all_facilities(req)

if res.geo_facilities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->