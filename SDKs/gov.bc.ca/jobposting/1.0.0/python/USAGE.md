<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.job_feed.get_industries()

if res.industries is not None:
    # handle response
```
<!-- End SDK Example Usage -->