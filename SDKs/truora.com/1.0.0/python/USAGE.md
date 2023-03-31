<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateBehaviorInput(
    birth_date="2021-10-25T05:21:43.948Z",
    country="cr",
    document_id="quibusdam",
    document_type="name",
    email="Karley_Stamm@hotmail.com",
    feedback_date="2022-03-26T09:37:56.283Z",
    first_name="Hunter",
    last_name="Gulgowski",
    phone_number="debitis",
    reason="rape",
)
    
res = s.behavior.report_behavior(req, operations.ReportBehaviorSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.behaviour_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->