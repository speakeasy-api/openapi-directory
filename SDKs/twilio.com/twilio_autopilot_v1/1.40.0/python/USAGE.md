<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAssistantCreateAssistantRequest(
    callback_events="corrupti",
    callback_url="https://salty-stag.name",
    defaults="nulla",
    friendly_name="corrupti",
    log_queries=False,
    style_sheet="illum",
    unique_name="vel",
)
    
res = s.create_assistant(req, operations.CreateAssistantSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.autopilot_v1_assistant is not None:
    # handle response
```
<!-- End SDK Example Usage -->