<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetMappingValuesKeyRequest(
    path_params=operations.GetMappingValuesKeyPathParams(
        key="micCode",
    ),
)
    
res = s.get_mapping_values_key_(req)

if res.get_mapping_values_key_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->