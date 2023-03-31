<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetFamilyDetailsRequest(
    ocp_apim_subscription_key="{{apiKey}}",
    id="{family_id}",
)
    
res = s.language_model_direct_access.get_family_details(req)

if res.get_family_details_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->