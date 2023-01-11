<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetCommunicationPreferencesV3DefinitionsGetPageRequest(
    security=operations.GetCommunicationPreferencesV3DefinitionsGetPageSecurity(
        hapikey=shared.SchemeHapikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
)
    
res = s.definition.get_communication_preferences_v3_definitions_get_page(req)

if res.subscription_definitions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->