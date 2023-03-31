<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = "es"
    
res = s.feedback.post_suggest(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->