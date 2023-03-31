<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest(
    org="corrupti",
    repository_id=592845,
    runner_group_id=715190,
)
    
res = s.actions.actions_add_repo_access_to_self_hosted_runner_group_in_org(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->