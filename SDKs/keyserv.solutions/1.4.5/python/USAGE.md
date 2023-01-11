<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.KeysAPICurrentRequest(
    path_params=operations.KeysAPICurrentPathParams(
        serial="eum",
    ),
)
    
res = s.keys_api.keys_api_current(req)

if res.keys_api_current_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->