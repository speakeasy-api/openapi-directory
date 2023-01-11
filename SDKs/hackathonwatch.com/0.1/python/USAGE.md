<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetHackathonsIDFormatRequest(
    path_params=operations.GetHackathonsIDFormatPathParams(
        id=6129263824403308222,
    ),
)
    
res = s.hackathons.get_hackathons_id_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->