<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAPIV2ListFederationsRequest(
    x_rapid_api_key="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
)
    
res = s.get_api_v2_list_federations(req)

if res.get_api_v2_list_federations_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->