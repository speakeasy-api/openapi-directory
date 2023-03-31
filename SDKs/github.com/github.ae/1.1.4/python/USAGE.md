<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ActionsAddSelectedRepoToOrgSecretRequest(
    org="corrupti",
    repository_id=592845,
    secret_name="distinctio",
)
    
res = s.actions.actions_add_selected_repo_to_org_secret(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->