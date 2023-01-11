<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetClientClientIDRequest(
    path_params=operations.GetClientClientIDPathParams(
        client_id="aspernatur",
    ),
)
    
res = s.client.get_client_client_id_(req)

if res.get_client_client_id_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->