<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.definition.get_communication_preferences_v3_definitions_get_page()

if res.subscription_definitions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->