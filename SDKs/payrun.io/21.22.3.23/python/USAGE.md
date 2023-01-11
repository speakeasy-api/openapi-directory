<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAeAssessmentRequest(
    path_params=operations.DeleteAeAssessmentPathParams(
        ae_assessment_id="quia",
        employee_id="rem",
        employer_id="labore",
    ),
    headers=operations.DeleteAeAssessmentHeaders(
        api_version="veritatis",
        authorization="aut",
    ),
)
    
res = s.ae_assessment.delete_ae_assessment(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->