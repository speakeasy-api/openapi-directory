<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GETHackathonsIDFormatRequest(
    id=548814,
)
    
res = s.hackathons.get_hackathons_id_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->