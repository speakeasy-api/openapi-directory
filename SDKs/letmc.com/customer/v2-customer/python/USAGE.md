<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BranchControllerGetBranchesRequest(
    count=548814,
    offset=592845,
    short_name="distinctio",
)
    
res = s.branch_controller.branch_controller_get_branches(req)

if res.branch_model_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->