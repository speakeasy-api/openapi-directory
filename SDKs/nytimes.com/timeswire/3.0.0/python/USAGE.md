<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetContentJSONRequest(
    url="corrupti",
)
    
res = s.get_content_json(req)

if res.get_content_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->