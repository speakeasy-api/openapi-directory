<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteAEAssessmentRequest(
    ae_assessment_id="corrupti",
    api_version="provident",
    authorization="distinctio",
    employee_id="quibusdam",
    employer_id="unde",
)
    
res = s.ae_assessment.delete_ae_assessment(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->