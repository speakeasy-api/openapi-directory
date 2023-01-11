<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAssessmentsRequest(
    security=operations.CreateAssessmentsSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
)
    
res = s.create_assessments(req)

if res.flex_v1_assessments is not None:
    # handle response
```
<!-- End SDK Example Usage -->