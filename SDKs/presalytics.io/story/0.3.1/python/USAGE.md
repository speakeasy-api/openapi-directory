<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.get_environment()

if res.get_environment_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->