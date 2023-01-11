<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAssistantRequest(
    security=operations.CreateAssistantSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateAssistantCreateAssistantRequest(
        callback_events="repellendus",
        callback_url="temporibus",
        defaults="et",
        friendly_name="soluta",
        log_queries=False,
        style_sheet="aspernatur",
        unique_name="autem",
    ),
)
    
res = s.create_assistant(req)

if res.autopilot_v1_assistant is not None:
    # handle response
```
<!-- End SDK Example Usage -->