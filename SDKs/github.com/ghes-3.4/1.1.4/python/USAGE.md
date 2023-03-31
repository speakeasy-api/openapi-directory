<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest(
    request_body=operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody(
        labels=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
    ),
    org="unde",
    runner_id=857946,
)
    
res = s.actions.actions_add_custom_labels_to_self_hosted_runner_for_org(req)

if res.actions_add_custom_labels_to_self_hosted_runner_for_org_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->