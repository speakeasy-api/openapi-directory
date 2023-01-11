<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetCriticsResourceTypeJSONRequest(
    path_params=operations.GetCriticsResourceTypeJSONPathParams(
        resource_type="quae",
    ),
)
    
res = s.get_critics_resource_type_json(req)

if res.get_critics_resource_type_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->