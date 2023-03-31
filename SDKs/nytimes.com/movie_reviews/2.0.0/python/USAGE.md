<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetCriticsResourceTypeJSONRequest(
    resource_type="corrupti",
)
    
res = s.get_critics_resource_type_json(req)

if res.get_critics_resource_type_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->