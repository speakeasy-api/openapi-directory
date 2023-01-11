<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest(
    path_params=operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams(
        org="quam",
        repository_id=6914057560638142822,
        runner_group_id=697969517094214007,
    ),
)
    
res = s.actions.actions_add_repo_access_to_self_hosted_runner_group_in_org(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->