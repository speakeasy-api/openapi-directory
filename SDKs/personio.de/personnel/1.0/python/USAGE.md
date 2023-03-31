<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteCompanyAttendancesIDRequest(
    id=548814,
)
    
res = s.delete_company_attendances_id_(req)

if res.response is not None:
    # handle response
```
<!-- End SDK Example Usage -->