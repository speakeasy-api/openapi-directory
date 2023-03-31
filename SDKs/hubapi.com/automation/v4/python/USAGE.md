<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.BatchInputCallbackCompletionBatchRequest(
    inputs=[
        shared.CallbackCompletionBatchRequest(
            callback_id="provident",
            output_fields={
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        ),
        shared.CallbackCompletionBatchRequest(
            callback_id="error",
            output_fields={
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
        ),
        shared.CallbackCompletionBatchRequest(
            callback_id="tempora",
            output_fields={
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
        ),
    ],
)
    
res = s.callbacks.post_automation_v4_actions_callbacks_complete_complete_batch(req, operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity(
    hapikey="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->