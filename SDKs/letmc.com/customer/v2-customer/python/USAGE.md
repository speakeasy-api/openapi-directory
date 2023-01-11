<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BranchControllerGetBranchesRequest(
    path_params=operations.BranchControllerGetBranchesPathParams(
        short_name="magni",
    ),
    query_params=operations.BranchControllerGetBranchesQueryParams(
        count=6068504787947082871,
        offset=8515991310693167825,
    ),
)
    
res = s.branch_controller.branch_controller_get_branches(req)

if res.branch_model_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->