<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.general.get_open_api_spec()

if res.get_open_api_spec_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->