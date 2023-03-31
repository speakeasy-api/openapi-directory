<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CompanyControllerGetBranchesRequest(
    count=548814,
    offset=592845,
    short_name="distinctio",
)
    
res = s.company_controller.company_controller_get_branches(req)

if res.advertising_branch_model_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->