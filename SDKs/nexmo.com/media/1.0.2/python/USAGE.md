<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.delete_a_media_item()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->