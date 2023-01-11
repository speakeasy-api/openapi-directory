<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest(
    security=operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity(
        oauth2_legacy=shared.SchemeOauth2Legacy(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    request=shared.BatchInputCallbackCompletionBatchRequest(
        inputs=[
            shared.CallbackCompletionBatchRequest(
                callback_id="quo",
                output_fields={
                    "dolorem": "eveniet",
                },
            ),
            shared.CallbackCompletionBatchRequest(
                callback_id="sit",
                output_fields={
                    "sequi": "facilis",
                    "fugit": "eum",
                },
            ),
            shared.CallbackCompletionBatchRequest(
                callback_id="laborum",
                output_fields={
                    "velit": "quos",
                    "nihil": "quisquam",
                    "blanditiis": "ducimus",
                },
            ),
        ],
    ),
)
    
res = s.callbacks.post_automation_v4_actions_callbacks_complete_complete_batch(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->