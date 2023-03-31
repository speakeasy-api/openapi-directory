<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.description.get_description()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->