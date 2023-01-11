<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.favico_favicon_ico_get()

if res.favico_favicon_ico_get_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->