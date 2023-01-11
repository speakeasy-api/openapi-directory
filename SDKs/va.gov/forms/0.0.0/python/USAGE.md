<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FindFormByFormNameRequest(
    security=operations.FindFormByFormNameSecurity(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.FindFormByFormNamePathParams(
        form_name="quis",
    ),
)
    
res = s.forms.find_form_by_form_name(req)

if res.find_form_by_form_name_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->