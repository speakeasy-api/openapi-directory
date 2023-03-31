<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer_token="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.GetApplicationsApplicationIDRequest(
    application_id="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
)
    
res = s.applications.get_applications_application_id(req)

if res.get_applications_application_id_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->