<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.ShortlinkRequest(
    keyid="corrupti",
    shortlink="provident",
)
    
res = s.add_shortlink.add_shortlink(req)

if res.shortlink_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->