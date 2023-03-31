<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)

    
res = s.api_information.get_api_version()

if res.api_version is not None:
    # handle response
```
<!-- End SDK Example Usage -->