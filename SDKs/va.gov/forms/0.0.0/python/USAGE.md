<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FindFormByFormNameRequest(
    form_name="corrupti",
)
    
res = s.forms.find_form_by_form_name(req, operations.FindFormByFormNameSecurity(
    apikey="YOUR_API_KEY_HERE",
))

if res.find_form_by_form_name_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->