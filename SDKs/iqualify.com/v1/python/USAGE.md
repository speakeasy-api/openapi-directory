<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        authorization="YOUR_API_KEY_HERE",
    ),
)

    
res = s.api_info.get_()

if res.get_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->