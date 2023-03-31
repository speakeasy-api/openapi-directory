<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.PerfectpdfAPIBody(
    api_key="abc123",
    html="<!doctype html><html><head><meta charset="UTF-8"><title>my title</title><script src="script.js"></script></head><body><div>My PDF</div></body></html>",
)
    
res = s.post_perfectpdf_api(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->